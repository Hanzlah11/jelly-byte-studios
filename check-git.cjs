const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
                results.push({ file: fullPath, import: match[1] });
            }
            while ((match = urlRegex.exec(content)) !== null) {
                results.push({ file: fullPath, import: match[1] });
            }
            while ((match = requireRegex.exec(content)) !== null) {
                results.push({ file: fullPath, import: match[1] });
            }
        }
    }
    return results;
}

const allImports = scanDirectory(path.resolve('./src'));
const gitFiles = execSync('git ls-files').toString().split('\n').filter(Boolean);
const gitFilesSet = new Set(gitFiles.map(f => f.replace(/\\/g, '/')));

let mismatches = [];

for (const { file, import: imp } of allImports) {
    if (imp.startsWith('http') || imp.startsWith('//')) continue;
    if (!imp.startsWith('.')) continue; // ignore node_modules
    
    // Resolve relative path to absolute
    const cleanImp = imp.split('?')[0].split('#')[0];
    const absoluteImp = path.resolve(path.dirname(file), cleanImp);
    const relativeToRoot = path.relative(path.resolve('.'), absoluteImp).replace(/\\/g, '/');
    
    // Check if it exists exactly in git
    let found = false;
    const extensionsToTry = ['', '.js', '.jsx', '.ts', '.tsx', '.css', '/index.js', '/index.jsx', '/index.ts', '/index.tsx'];
    
    for (const ext of extensionsToTry) {
        if (gitFilesSet.has(relativeToRoot + ext)) {
            found = true;
            break;
        }
    }
    
    if (!found) {
        // Find if it exists case-insensitively
        const lowerImp = relativeToRoot.toLowerCase();
        let actual = null;
        for (const gitFile of gitFiles) {
            for (const ext of extensionsToTry) {
                if (gitFile.toLowerCase() === lowerImp + ext) {
                    actual = gitFile;
                    break;
                }
            }
            if (actual) break;
        }
        
        mismatches.push({
            file,
            importPath: imp,
            resolved: relativeToRoot,
            actualInGit: actual || 'NOT FOUND IN GIT'
        });
    }
}

console.log(JSON.stringify(mismatches, null, 2));
