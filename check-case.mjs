import fs from 'fs';
import path from 'path';

function findExactCase(directory, item) {
    if (!fs.existsSync(directory)) return null;
    const items = fs.readdirSync(directory);
    const found = items.find(i => i.toLowerCase() === item.toLowerCase());
    return found || null;
}

function checkPathCaseSensitively(baseDir, relativePath) {
    if (relativePath.startsWith('http') || relativePath.startsWith('//')) return null;
    if (!relativePath.startsWith('.')) return null; 

    let cleanPath = relativePath.split('?')[0].split('#')[0];
    const parts = cleanPath.split('/');
    
    let currentPath = baseDir;
    
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        if (part === '.') continue;
        if (part === '..') {
            currentPath = path.dirname(currentPath);
            continue;
        }
        
        if (i === parts.length - 1) {
            // It's the last part. We need to find if it exists as-is, or with an extension, or as a folder.
            let foundWithExactCase = false;
            let actualCaseOnDisk = null;
            
            const exts = ['', '.js', '.jsx', '.ts', '.tsx', '.css'];
            
            for (const ext of exts) {
                const exact = findExactCase(currentPath, part + ext);
                if (exact) {
                    actualCaseOnDisk = exact;
                    if (exact === part + ext) {
                        foundWithExactCase = true;
                    }
                    break;
                }
            }
            
            // Also try index files if it resolved to a folder
            if (!actualCaseOnDisk) {
                const exactDir = findExactCase(currentPath, part);
                if (exactDir) {
                    actualCaseOnDisk = exactDir;
                    if (exactDir === part) {
                        foundWithExactCase = true;
                    }
                }
            }

            if (actualCaseOnDisk && !foundWithExactCase) {
                return { expected: actualCaseOnDisk, actual: part };
            }
            if (!actualCaseOnDisk) {
                return { notFound: true, path: cleanPath, at: currentPath, part };
            }

        } else {
            const exactDir = findExactCase(currentPath, part);
            if (!exactDir) {
                return { notFound: true, path: cleanPath, at: currentPath, part };
            }
            if (exactDir !== part) {
                return { expected: exactDir, actual: part };
            }
            currentPath = path.join(currentPath, exactDir);
        }
    }
    return null; 
}

function scanDirectory(dir) {
    let results = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            results = results.concat(scanDirectory(fullPath));
        } else if (/\.(jsx?|tsx?|css)$/.test(file)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const importRegex = /(?:import.*?from\s+|import\s+)['"]([^'"]+)['"]/g;
            const urlRegex = /url\(['"]?([^'"\)]+)['"]?\)/g;
            const requireRegex = /require\(['"]([^'"]+)['"]\)/g;
            
            let match;
            while ((match = importRegex.exec(content)) !== null) {
                const res = checkPathCaseSensitively(path.dirname(fullPath), match[1]);
                if (res) {
                    results.push({ file: fullPath, import: match[1], res });
                }
            }
            while ((match = urlRegex.exec(content)) !== null) {
                const res = checkPathCaseSensitively(path.dirname(fullPath), match[1]);
                if (res) {
                    results.push({ file: fullPath, import: match[1], res });
                }
            }
            while ((match = requireRegex.exec(content)) !== null) {
                const res = checkPathCaseSensitively(path.dirname(fullPath), match[1]);
                if (res) {
                    results.push({ file: fullPath, import: match[1], res });
                }
            }
        }
    }
    return results;
}

const res = scanDirectory(path.resolve('./src'));
// Filter out not found to focus on casing issues first
const mismatches = res.filter(r => !r.res.notFound);
console.log("Mismatches:");
console.log(JSON.stringify(mismatches, null, 2));

const notFound = res.filter(r => r.res.notFound);
console.log("Not Found:");
console.log(JSON.stringify(notFound, null, 2));
