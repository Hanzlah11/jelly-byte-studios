import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- REUSABLE ANIMATION WRAPPER ---
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

// --- CAROUSEL BACKGROUND ---
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

// --- MAIN PAGE ---
export default function HomePage() {
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
      platforms: ["PC", "Steam"],
      accent: "from-pink-500 via-fuchsia-500 to-orange-400",
    },
  ];

  const features = [
    {
      title: "Pixel-Perfect Experiences",
      description:
        "We create gameplay-first experiences with strong visual identity and satisfying mechanics.",
    },
    {
      title: "Indie Passion",
      description:
        "Built by gamers, for gamers. Every project is crafted with creativity and experimentation.",
    },
    {
      title: "Expandable Universe",
      description:
        "Our studio website is designed to grow alongside future releases and upcoming projects.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');

        html { scroll-behavior: smooth; }

        body {
          font-family: 'DM Sans', sans-serif;
        }

        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
        }
      `}</style>

      <div className="min-h-screen bg-[#090311] text-white overflow-x-hidden relative">

        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#090311]/80">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo.png"
                alt="JellyByte Studios Logo"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h1 className="font-black text-2xl tracking-wide font-bebas">
                  JellyByte Studios
                </h1>
                <p className="text-sm text-gray-400">
                  Indie Games • Pixel Worlds • Chaos
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <a href="#home" className="hover:text-pink-400 transition">Home</a>
              <a href="#releases" className="hover:text-pink-400 transition">Releases</a>
              <a href="#about" className="hover:text-pink-400 transition">About</a>
              <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden"
        >
          <CarouselBackground />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

            {/* LEFT */}
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
                
                <a href="#releases"
                  className="px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 font-bold hover:scale-105 transition-transform shadow-xl shadow-pink-500/30"
                >
                  Explore Releases
                </a>
                <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </FadeUp>

            {/* RIGHT — STUDIO CARD */}
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
                      <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 font-bold hover:scale-105 transition-transform">
                        Wishlist on Steam
                      </button>
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

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FadeUp
                  key={index}
                  delay={0.1 * (index + 1)}
                  className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.03]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 mb-6" />
                  <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </FadeUp>
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

            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-pink-400 transition">Twitter</a>
              <a href="#" className="hover:text-pink-400 transition">Instagram</a>
              <a href="#" className="hover:text-pink-400 transition">Discord</a>
              <a href="#" className="hover:text-pink-400 transition">Steam</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}