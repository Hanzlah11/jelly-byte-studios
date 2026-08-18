import { useState, useEffect, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, HeartHandshake, Rocket } from "lucide-react";
import { useAuth } from "../context/AuthContext";

// ============================================================
// PRIVACY POLICY
// ============================================================
export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#090311] text-white">
      {/* Simple top bar */}
      <div className="border-b border-white/10 px-6 py-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <img src="/images/logo.png" alt="JellyByte Studios Logo" className="w-10 h-10 object-contain" />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-14">
        <p className="text-sm font-medium text-pink-400 mb-3">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-black tracking-wide font-bebas mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: August 7, 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <p>
              JellyByte Studios ("we," "us," or "our") respects your privacy. This Privacy
              Policy explains what information we collect through jellybytestudios.com (the
              "Site"), how we use it, and the choices you have. By using the Site, you agree
              to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 marker:text-pink-400">
              <li>
                <span className="text-white font-medium">Information you provide directly</span> —
                such as your name and email address when you contact us, sign up for updates,
                or fill out a form on the Site.
              </li>
              <li>
                <span className="text-white font-medium">Automatically collected information</span> —
                such as your IP address, browser type, device information, and pages visited,
                collected through cookies and similar technologies or analytics tools.
              </li>
              <li>
                <span className="text-white font-medium">Third-party platform data</span> — if you
                interact with us through social media (Instagram, TikTok, Facebook, YouTube),
                those platforms may share limited interaction data with us subject to their own
                privacy policies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 marker:text-pink-400">
              <li>To respond to inquiries and provide customer support</li>
              <li>To send updates about our games and studio, if you opt in</li>
              <li>To understand how visitors use the Site and improve it</li>
              <li>To protect the Site against fraud, abuse, and security incidents</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Cookies &amp; Analytics</h2>
            <p>
              We may use cookies and similar tools to keep the Site functioning properly and
              to understand usage patterns. You can disable cookies in your browser settings,
              though some parts of the Site may not work as intended if you do.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share information with trusted
              service providers who help us operate the Site (such as hosting or analytics
              providers), or when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
            <p>
              We retain personal information only as long as necessary for the purposes
              described in this policy, or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, or delete
              your personal information, or to object to certain processing. To exercise any
              of these rights, contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Children's Privacy</h2>
            <p>
              The Site is not directed at children under 13, and we do not knowingly collect
              personal information from children under 13. If you believe a child has provided
              us with personal information, please contact us so we can remove it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on
              this page with an updated "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:jellybytestudios@gmail.com"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                jellybytestudios@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

// ============================================================
// TERMS & CONDITIONS
// ============================================================
export function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#090311] text-white">
      {/* Simple top bar */}
      <div className="border-b border-white/10 px-6 py-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <img src="/images/logo.png" alt="JellyByte Studios Logo" className="w-10 h-10 object-contain" />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-14">
        <p className="text-sm font-medium text-pink-400 mb-3">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-black tracking-wide font-bebas mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: August 7, 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <p>
              These Terms &amp; Conditions ("Terms") govern your use of jellybytestudios.com
              (the "Site"), operated by JellyByte Studios ("we," "us," or "our"). By accessing
              or using the Site, you agree to be bound by these Terms. If you do not agree,
              please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Use of the Site</h2>
            <p>
              You may use the Site for lawful purposes only. You agree not to misuse the Site,
              interfere with its normal operation, or attempt to gain unauthorized access to
              any part of it or its underlying systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Intellectual Property</h2>
            <p>
              All content on the Site — including but not limited to game titles, artwork,
              logos, trademarks, text, and design — is the property of JellyByte Studios or
              its licensors and is protected by copyright and other intellectual property
              laws. You may not reproduce, distribute, or create derivative works from any
              content on the Site without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party platforms, including our social media
              channels (Instagram, TikTok, Facebook, YouTube). We are not responsible for the
              content, policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. User Accounts</h2>
            <p>
              If the Site allows you to create an account, you are responsible for maintaining
              the confidentiality of your login credentials and for all activity under your
              account. Notify us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Disclaimer of Warranties</h2>
            <p>
              The Site is provided "as is" and "as available" without warranties of any kind,
              express or implied. We do not guarantee that the Site will be uninterrupted,
              secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, JellyByte Studios shall not be liable for
              any indirect, incidental, or consequential damages arising out of your use of, or
              inability to use, the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Changes to the Site or Terms</h2>
            <p>
              We may modify or discontinue the Site, in whole or in part, at any time. We may
              also update these Terms from time to time; continued use of the Site after
              changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of [your jurisdiction], without regard to
              its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>
              If you have questions about these Terms, contact us at{" "}
              <a
                href="mailto:jellybytestudios@gmail.com"
                className="text-pink-400 hover:text-pink-300 transition"
              >
                jellybytestudios@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

// ============================================================
// REUSABLE ANIMATION WRAPPER
// ============================================================
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

// ============================================================
// CAROUSEL BACKGROUND
// ============================================================
function CarouselBackground() {
  const images = [
    "/images/screenshot-1.jpeg",
    "/images/screenshot-2.jpeg",
    "/images/screenshot-3.jpeg",
  ];

  const doubled = [...images, ...images];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        style={{
          display: "flex",
          height: "100%",
          width: `${doubled.length * (100 / 3)}vw`,
          animation: "carousel-slide 25s linear infinite",
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            style={{
              width: "33.333vw",
              height: "100%",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <img
              src={src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#090311]/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090311] via-transparent to-[#090311]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#090311]/70 via-transparent to-[#090311]/70" />

      <style>{`
        @keyframes carousel-slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${3 * (100 / 3)}vw); }
        }
      `}</style>
    </div>
  );
}

// ============================================================
// PREMIUM FEATURE CARD (About section)
// ============================================================
function FeatureCard({ icon: Icon, title, description, gradient, glow, delay }) {
  return (
    <FadeUp delay={delay}>
      <motion.div
        whileHover={{ y: -11, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="group relative h-full rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:backdrop-blur-2xl hover:shadow-2xl"
        style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
      >
        <div
          className={`pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            padding: 1,
            background: `linear-gradient(135deg, ${glow.from}, ${glow.to})`,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div
          className={`absolute -top-10 left-10 h-40 w-40 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity duration-700 bg-gradient-to-br ${gradient}`}
        />

        <motion.div
          className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-8 shadow-lg`}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.18, rotate: 6 }}
        >
          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
        </motion.div>

        <h4 className="relative z-10 text-2xl font-bold mb-4">{title}</h4>
        <p className="relative z-10 text-gray-400 leading-relaxed mb-8">
          {description}
        </p>

        <div
          className={`relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r ${gradient} bg-clip-text text-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
        >
          Learn More
          <span className="transition-transform duration-500 group-hover:translate-x-1.5">
            →
          </span>
        </div>
      </motion.div>
    </FadeUp>
  );
}

// ============================================================
// HOME PAGE
// ============================================================
export function HomePage() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const games = [
    {
      id: 1,
      title: "Getting Under Your Nerve",
      tagline: "Rage. Jump. Repeat.",
      genre: "Precision Platformer",
      status: "Available Soon",
      image: "/images/getting-under-your-nerve-poster.png",
      description:
        "A brutal pixel-art platformer packed with unpredictable traps, fast-paced gameplay, and unforgiving mechanics.",
      platforms: ["PC", "Itch.io"],
      accent: "from-pink-500 via-fuchsia-500 to-orange-400",
    },
  ];

  const features = [
    {
      icon: Gamepad2,
      title: "Pixel-Perfect Experiences",
      description:
        "We create gameplay-first experiences with strong visual identity and satisfying mechanics.",
      gradient: "from-pink-500 to-purple-500",
      glow: { from: "#ec4899", to: "#a855f7" },
    },
    {
      icon: HeartHandshake,
      title: "Indie Passion",
      description:
        "Built by gamers, for gamers. Every project is crafted with creativity and experimentation.",
      gradient: "from-orange-500 to-amber-400",
      glow: { from: "#f97316", to: "#fbbf24" },
    },
    {
      icon: Rocket,
      title: "Expandable Universe",
      description:
        "Our studio website is designed to grow alongside future releases and upcoming projects.",
      gradient: "from-purple-500 to-indigo-500",
      glow: { from: "#a855f7", to: "#6366f1" },
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #090311;
        }

        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
        }
      `}</style>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#090311]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo & Studio Info */}
          <a href="#home" className="flex items-center gap-4 z-10">
            <img
              src="/images/logo.png"
              alt="JellyByte Studios Logo"
              className="w-14 h-14 object-contain shrink-0"
            />
            <div className="min-w-0">
              <h1 className="font-black text-2xl md:text-3xl tracking-wide font-bebas leading-none text-white whitespace-nowrap">
                JellyByte Studios
              </h1>
              <p className="hidden sm:block text-xs text-gray-400 truncate">
                Indie Games • Pixel Worlds • Chaos
              </p>
            </div>
          </a>

          {/* Centered & Prominent Navigation Links */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 font-bold text-lg tracking-wider text-gray-200">
            <a href="#home" className="hover:text-pink-400 transition-colors">
              Home
            </a>
            <a href="#releases" className="hover:text-pink-400 transition-colors">
              Releases
            </a>
            <a href="#about" className="hover:text-pink-400 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-pink-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Auth Button / User Menu */}
          <div className="flex items-center gap-4 shrink-0 z-10">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  id="user-menu-button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 sm:gap-3 pl-1.5 pr-2 sm:pl-3 sm:pr-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 hover:border-pink-500/30 hover:bg-white/10 transition-all group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-xs font-bold shadow-lg shadow-pink-500/20 shrink-0">
                    {user.avatar}
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-300 group-hover:text-white transition-colors max-w-[90px] md:max-w-[120px] truncate">
                    {user.name}
                  </span>
                  <svg
                    className={`hidden sm:block w-4 h-4 text-gray-400 transition-transform shrink-0 ${showDropdown ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-[calc(100vw-1.5rem)] max-w-64 rounded-2xl border border-white/10 bg-[#12091e]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 py-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-sm font-bold shadow-lg shadow-pink-500/20 shrink-0">
                            {user.avatar}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-white truncate">{user.name}</p>
                            <p className="text-xs text-gray-400 truncate">{user.email}</p>
                          </div>
                        </div>
                      </div>

                      <div className="py-2">
                        <button
                          id="logout-button"
                          onClick={() => {
                            logout();
                            setShowDropdown(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 sm:px-5 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-red-400 transition-colors"
                        >
                          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                id="navbar-login-button"
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 font-semibold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login
              </Link>
            )}

            <button
              id="mobile-menu-toggle"
              className="md:hidden flex flex-col gap-1.5 p-1.5 shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/10 bg-[#090311]/95"
            >
              <nav className="flex flex-col gap-1 px-4 sm:px-6 py-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "releases", label: "Releases" },
                  { id: "about", label: "About" },
                  { id: "contact", label: "Contact" },
                ].map((item, i, arr) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setTimeout(() => {
                        const el = document.getElementById(item.id);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }, 350);
                    }}
                    className={`py-3 text-left font-semibold text-gray-300 hover:text-pink-400 transition${i < arr.length - 1 ? " border-b border-white/5" : ""}`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="min-h-screen bg-[#090311] text-white relative">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden"
        >
          <CarouselBackground />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <FadeUp className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                Official Studio Website
              </div>

              <div className="space-y-6">
                <h2 className="font-bebas text-6xl md:text-8xl leading-none tracking-tight">
                  Building
                  <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                    Chaotic Fun
                  </span>
                </h2>

                <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
                  JellyByte Studios creates stylish indie games focused on
                  challenge, personality, and unforgettable gameplay moments.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#releases"
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 font-bold hover:scale-105 transition-transform shadow-xl shadow-pink-500/30"
                >
                  Explore Releases
                </a>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />

                <div className="relative rounded-[2.5rem] border border-pink-500/20 bg-black/40 backdrop-blur-xl p-10 overflow-hidden">
                  <p className="text-xs tracking-[0.25em] uppercase text-pink-400 font-bold mb-6">
                    Our Promise
                  </p>

                  <h3 className="font-bebas text-4xl leading-tight mb-6">
                    We Don't Do Easy.
                  </h3>

                  <div className="w-12 h-[2px] bg-gradient-to-r from-pink-500 to-orange-400 mb-6" />

                  <p className="text-gray-400 leading-relaxed mb-6">
                    JellyByte Studios builds games that push back. Expect brutal
                    challenges, tight mechanics, and zero hand-holding. Every
                    title we ship is crafted to test you — and keep you coming
                    back for more.
                  </p>

                  <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                    <span className="px-3 py-1 rounded-full border border-white/10">Horror</span>
                    <span className="px-3 py-1 rounded-full border border-white/10">Adventure</span>
                    <span className="px-3 py-1 rounded-full border border-white/10">Platformers</span>
                    <span className="px-3 py-1 rounded-full border border-white/10">& More</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Releases */}
        <section id="releases" className="relative py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="text-pink-400 font-semibold uppercase tracking-[0.25em] mb-4">
                  Releases
                </p>
                <h3 className="font-bebas text-5xl md:text-7xl font-black leading-tight">
                  Featured Games
                </h3>
              </div>
              <p className="text-gray-400 max-w-xl text-lg">
                Every title released by JellyByte Studios will appear here.
              </p>
            </FadeUp>

            <div className="grid gap-12">
              {games.map((game, index) => (
                <FadeUp
                  key={game.id}
                  delay={0.1 * (index + 1)}
                  className="group grid lg:grid-cols-2 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-pink-500/30 transition-all"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </div>

                  <div className="p-10 md:p-14 flex flex-col justify-center">
                    <div className={`inline-flex w-fit px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${game.accent} mb-6`}>
                      {game.genre}
                    </div>

                    <h4 className="font-bebas text-5xl mb-4">{game.title}</h4>

                    <p className="text-xl text-pink-300 font-semibold mb-6">
                      {game.tagline}
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {game.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {game.platforms.map((p) => (
                        <span
                          key={p}
                          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://jellybyte-studios.itch.io/getting-under-your-nerve"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 font-bold hover:scale-105 transition-transform">
                          Get on Itch.io
                        </button>
                      </a>
                      <Link
                        to="/games/getting-under-your-nerve"
                        className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-28 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="max-w-3xl mb-16">
              <p className="text-pink-400 font-semibold uppercase tracking-[0.25em] mb-4">
                About Us
              </p>
              <h3 className="font-bebas text-6xl mb-8">
                Tiny Studio. Massive Energy.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                JellyByte Studios is an indie game studio passionate about pixel
                art, intense gameplay loops, and memorable experiences.
              </p>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradient={feature.gradient}
                  glow={feature.glow}
                  delay={0.1 * (index + 1)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-white/10 py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo.png"
                className="w-20 h-20 object-contain"
                alt="logo"
              />
              <div>
                <p className="font-bold">JellyByte Studios</p>
                <p className="text-sm text-gray-500">© 2026 All Rights Reserved</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="https://www.instagram.com/jellybytestudios/" className="hover:text-pink-400 transition">Instagram</a>
                <a href="https://www.tiktok.com/@jellybytestudios" className="hover:text-pink-400 transition">TikTok</a>
                <a href="https://www.facebook.com/profile.php?id=61592068596434" className="hover:text-pink-400 transition">Facebook</a>
                <a href="https://www.youtube.com/@JellyByteStudios" className="hover:text-pink-400 transition">YouTube</a>
              </div>

              <div className="flex gap-4 text-xs text-gray-500">
                <Link to="/privacy-policy" className="hover:text-pink-400 transition">Privacy Policy</Link>
                <span className="text-gray-700">•</span>
                <Link to="/terms-and-conditions" className="hover:text-pink-400 transition">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

// ============================================================
// APP — ROUTES
// ============================================================
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  );
}