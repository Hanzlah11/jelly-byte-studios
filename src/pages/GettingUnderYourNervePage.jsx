import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

function FeedbackForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-10 rounded-[2rem] border border-orange-500/20 bg-white/[0.02] backdrop-blur-xl shadow-2xl shadow-orange-500/5">
      <div className="text-center mb-8">
        <h3 className="font-bebas text-5xl mb-2">Drop some feedback</h3>
        <p className="text-gray-400 text-sm">
          All ideas are welcomed, including critics
        </p>
      </div>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-center font-medium text-lg"
        >
          Thanks for the feedback! We appreciate it.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="hidden"
            name="subject"
            value="New Feedback for Getting Under Your Nerve!"
          />
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Player Name (Optional)
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Anonymous Gamer"
              className="w-full px-5 py-4 rounded-xl bg-[#0d0503] border border-white/10 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 outline-none transition text-white placeholder:text-gray-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Feedback
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              placeholder="What did you think of the game? Too hard? Too easy?"
              className="w-full px-5 py-4 rounded-xl bg-[#0d0503] border border-white/10 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 outline-none transition text-white placeholder:text-gray-600 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 font-bold text-lg hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 shadow-xl shadow-orange-500/20"
          >
            {status === "submitting" ? "Sending..." : "Send Feedback"}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export default function GettingUnderYourNervePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Basanti",
      review: "Creativity: 4.5/5, Fun: 5/5, UserExperience: -5/5, Overall: 4.5/5",
    },
    {
      id: 2,
      name: "Silicon",
      review: "The game is geniunely fun, despite me raging a couple of times",
    },
    {
      id: 3,
      name: "AtrioxSun",
      review: "Too hard bruv, make it easy",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700;900&display=swap');

        body {
          font-family: 'DM Sans', sans-serif;
          background: #0d0503;
        }

        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* STICKY NAVBAR AT THE TOP LEVEL */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d0503]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo & Studio Info */}
          <a href="/" className="flex items-center gap-4 z-10">
            <img
              src="/images/logo.png"
              alt="JellyByte Studios"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h1 className="font-bebas text-3xl tracking-wide text-white leading-none">
                JellyByte Studios
              </h1>
              <p className="text-xs text-gray-400">Getting Under Your Nerve</p>
            </div>
          </a>

          {/* Centered, Prominent Nav Links */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 font-bold text-lg tracking-wider text-gray-200">
            <a href="/" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-orange-400 transition-colors">
              About
            </a>
            <a href="#download" className="hover:text-orange-400 transition-colors">
              Download
            </a>
            <a href="#feedback" className="hover:text-orange-400 transition-colors">
              Feedback
            </a>
            <a
              href="/HowToPlayGettingUnderYourNerve"
              className="hover:text-orange-400 transition-colors"
            >
              How To Play
            </a>
          </nav>

          <div className="hidden md:block w-32" />
        </div>
      </header>

      <div className="min-h-screen bg-[#0d0503] text-white relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-3xl" />
        </div>

        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp delay={0.1} className="relative flex justify-center">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 opacity-30 blur-3xl rounded-full" />
              <div className="relative rounded-[2rem] overflow-hidden border border-orange-500/20 shadow-2xl shadow-orange-500/20 max-w-md">
                <img
                  src="/images/getting-under-your-nerve-poster.png"
                  alt="Getting Under Your Nerve Poster"
                  className="w-full object-cover"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.3} className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-300 text-sm">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Precision Platformer
              </div>
              <div>
                <h2 className="font-bebas text-6xl md:text-8xl leading-none tracking-tight">
                  Getting
                  <span className="block bg-gradient-to-r from-orange-300 via-red-400 to-orange-500 bg-clip-text text-transparent">
                    Under Your
                  </span>
                  Nerve
                </h2>
              </div>
              <p className="text-2xl text-orange-300 font-semibold">
                Rage. Jump. Repeat.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                A brutal precision platformer where every jump tests your
                patience, reflexes, and sanity. Dodge deadly traps, survive
                unpredictable mechanics, and conquer levels designed to break
                you.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">
                  PC
                </span>
                <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">
                  Steam
                </span>
                <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">
                  Hardcore
                </span>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="relative py-28 px-6 border-t border-white/10 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <FadeUp>
              <p className="text-orange-400 uppercase tracking-[0.25em] font-semibold mb-4">
                About The Game
              </p>
              <h3 className="font-bebas text-5xl md:text-7xl leading-none mb-8">
                Precision.
                <br />
                Chaos.
                <br />
                Pain.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed space-y-4">
                Think you’ve mastered the 2D platformer? Think again.
                <strong className="text-orange-400">
                  {" "}
                  Getting Under Your Nerve
                </strong>{" "}
                isn’t just a game—it’s a relentless psychological war engineered
                specifically to troll you at every single turn. This world doesn't
                care about fair play. Just when you think you’ve finally found a
                safe rhythm, the map shifts dynamically beneath your feet.
                Floors turn into flesh-melting hazards, stable ground vanishes
                into thin air, and hidden traps trigger out of absolutely
                nowhere, completely rewriting the rules of the level mid-air.
                <br />
                <br />
                Every single level is a meticulous puzzle of pain requiring
                pixel-perfect precision, split-second reactions, and a massive
                tolerance for beautiful chaos. This isn't about casual
                exploration; it's a brutal gauntlet designed to break you down
                and force you to adapt. Take a deep breath, accept the hundreds
                of inevitable deaths, and prepare for a high-octane ride that
                will test your raw platforming skill, your patience, and your
                sanity.
              </p>
            </FadeUp>
            <div className="grid gap-6">
              <FadeUp delay={0.1}>
                <img
                  src="/images/screenshot-1.jpeg"
                  alt="Gameplay 1"
                  className="h-64 w-full object-cover rounded-[2rem] border border-white/10 shadow-lg"
                />
              </FadeUp>
              <FadeUp delay={0.2}>
                <img
                  src="/images/screenshot-2.jpeg"
                  alt="Gameplay 2"
                  className="h-64 w-full object-cover rounded-[2rem] border border-white/10 shadow-lg"
                />
              </FadeUp>
              <FadeUp delay={0.3}>
                <img
                  src="/images/screenshot-3.jpeg"
                  alt="Gameplay 3"
                  className="h-64 w-full object-cover rounded-[2rem] border border-white/10 shadow-lg"
                />
              </FadeUp>
            </div>
          </div>
        </section>

        {/* TRAILER SECTION */}
        <section className="py-28 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="mb-12">
              <p className="text-orange-400 uppercase tracking-[0.25em] font-semibold mb-4">
                Official Trailer
              </p>
              <h3 className="font-bebas text-5xl md:text-7xl">
                Watch The Chaos
              </h3>
            </FadeUp>
            <FadeUp
              delay={0.2}
              className="rounded-[2rem] overflow-hidden border border-orange-500/20 bg-black shadow-2xl shadow-orange-500/10 aspect-video"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0U2nv97bFlo"
                title="Getting Under Your Nerve - Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </FadeUp>
          </div>
        </section>

        {/* DOWNLOAD + REVIEWS */}
        <section
          id="download"
          className="py-28 px-6 border-t border-white/10 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
            <FadeUp>
              <p className="text-orange-400 uppercase tracking-[0.25em] font-semibold mb-4">
                Download
              </p>
              <h3 className="font-bebas text-5xl md:text-7xl leading-none mb-8">
                Ready To
                <br />
                Lose Your Mind?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Download the latest build of Getting Under Your Nerve and test
                your patience against deadly traps and unforgiving gameplay.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                v0.1 Beta
              </span>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://drive.google.com/file/d/1RztsZCMH5sqsavONfLIWIDL_8u6PeXIt/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-orange-500/30"
                >
                  <span>⚡</span>
                  Beta Release
                </a>

                <div className="relative group">
                  <a
                    href="https://drive.google.com/file/d/1Zo0ClPm039YAvTYvPl8fTB7iwoq1CpQo/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 font-bold text-lg text-white hover:scale-105 transition-transform shadow-2xl shadow-orange-500/30"
                  >
                    <span>⚡</span>
                    Official Release
                  </a>
                </div>
              </div>
            </FadeUp>

            <div>
              <FadeUp>
                <p className="text-orange-400 uppercase tracking-[0.25em] font-semibold mb-4">
                  Public Reviews
                </p>
              </FadeUp>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <FadeUp key={review.id} delay={0.1 * (index + 1)}>
                    <div className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.03]">
                      <h4 className="text-2xl font-bold mb-4 text-orange-300">
                        {review.name}
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        "{review.review}"
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEEDBACK SECTION */}
        <section
          id="feedback"
          className="py-28 px-6 border-t border-white/10 relative scroll-mt-24"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

          <FadeUp className="max-w-7xl mx-auto relative z-10">
            <FeedbackForm />
          </FadeUp>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-10 px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo.png"
                alt="JellyByte Studios"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-bold">JellyByte Studios</p>
                <p className="text-sm text-gray-500">
                  © 2026 All Rights Reserved
                </p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="https://www.instagram.com/jellybytestudios/"
                className="hover:text-pink-400 transition"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@jellybytestudios"
                className="hover:text-pink-400 transition"
              >
                TikTok
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61592068596434"
                className="hover:text-pink-400 transition"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@JellyByteStudios"
                className="hover:text-pink-400 transition"
              >
                YouTube
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}   