import { useState } from "react";

// --- FEEDBACK FORM COMPONENT ---
function FeedbackForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);
    
    // Web3Forms Access Key
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
          100% anonymous. We don't ask for your email.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-center font-medium text-lg">
          Thanks for the feedback! We appreciate it.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="hidden" name="subject" value="New Feedback for Getting Under Your Nerve!" />
          {/* Optional: Add a honeypot field to prevent spam */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
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
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
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

// --- MAIN PAGE COMPONENT ---
export default function GettingUnderYourNervePage() {
  const reviews = [
    {
      id: 1,
      name: "PixelForge",
      review: "One of the most brutally satisfying indie platformers we've played in years.",
    },
    {
      id: 2,
      name: "GameHorizon",
      review: "Every jump feels dangerous. Every success feels earned.",
    },
    {
      id: 3,
      name: "IndiePulse",
      review: "A rage-inducing experience wrapped in beautiful pixel chaos.",
    },
  ];

  return (
    <>
      {/* GOOGLE FONTS & GLOBAL STYLES */}
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

      <div className="min-h-screen bg-[#0d0503] text-white overflow-x-hidden relative">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-3xl" />
        </div>

        {/* NAVBAR */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0503]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo.png"
                alt="JellyByte Studios"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="font-bebas text-3xl tracking-wide">
                  JellyByte Studios
                </h1>
                <p className="text-sm text-gray-400">
                  Getting Under Your Nerve
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <a href="/" className="hover:text-orange-400 transition">Home</a>
              <a href="#about" className="hover:text-orange-400 transition">About</a>
              <a href="#download" className="hover:text-orange-400 transition">Download</a>
              <a href="#feedback" className="hover:text-orange-400 transition">Feedback</a>
            </nav>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center px-6 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 opacity-30 blur-3xl rounded-full" />
              <div className="relative rounded-[2rem] overflow-hidden border border-orange-500/20 shadow-2xl shadow-orange-500/20 max-w-md">
                <img
                  src="/images/getting-under-your-nerve-poster.png"
                  alt="Getting Under Your Nerve Poster"
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
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
                <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">PC</span>
                <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">Steam</span>
                <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">Hardcore</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="relative py-28 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-orange-400 uppercase tracking-[0.25em] font-semibold mb-4">
                About The Game
              </p>
              <h3 className="font-bebas text-5xl md:text-7xl leading-none mb-8">
                Precision.<br />Chaos.<br />Pain.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed space-y-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum tincidunt nunc sit amet tellus suscipit, vitae
                accumsan lorem fermentum. Donec posuere, odio sit amet
                scelerisque consequat, massa augue ultricies lorem, quis
                tincidunt ipsum purus sed neque.
                <br /><br />
                Integer feugiat sem in ligula interdum, sed varius massa
                vehicula. Suspendisse potenti. Nulla facilisi. Cras tincidunt
                faucibus erat, sed feugiat lorem pretium sed.
              </p>
            </div>
            <div className="grid gap-6">
              <img src="/images/screenshot-1.jpg" alt="Gameplay 1" className="h-64 w-full object-cover rounded-[2rem] border border-white/10 shadow-lg" />
              <img src="/images/screenshot-2.jpg" alt="Gameplay 2" className="h-64 w-full object-cover rounded-[2rem] border border-white/10 shadow-lg" />
              <img src="/images/screenshot-3.jpg" alt="Gameplay 3" className="h-64 w-full object-cover rounded-[2rem] border border-white/10 shadow-lg" />
            </div>
          </div>
        </section>

        {/* TRAILER SECTION */}
        <section className="py-28 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-orange-400 uppercase tracking-[0.25em] font-semibold mb-4">
                Official Trailer
              </p>
              <h3 className="font-bebas text-5xl md:text-7xl">
                Watch The Chaos
              </h3>
            </div>
            <div className="rounded-[2rem] overflow-hidden border border-orange-500/20 bg-black shadow-2xl shadow-orange-500/10">
              <video controls className="w-full">
                <source src="/videos/trailer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* DOWNLOAD + REVIEWS */}
        <section id="download" className="py-28 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-orange-400 uppercase tracking-[0.25em] font-semibold mb-4">
                Download
              </p>
              <h3 className="font-bebas text-5xl md:text-7xl leading-none mb-8">
                Ready To<br />Lose Your Mind?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Download the latest build of Getting Under Your Nerve and test
                your patience against deadly traps and unforgiving gameplay.
              </p>
              <a
                href="https://drive.google.com/file/d/1RztsZCMH5sqsavONfLIWIDL_8u6PeXIt/view?usp=sharing"
                download
                className="inline-flex px-8 py-5 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-orange-500/30"
              >
                Download Now
              </a>
            </div>
            <div>
              <p className="text-orange-400 uppercase tracking-[0.25em] font-semibold mb-4">
                Public Reviews
              </p>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.03]">
                    <h4 className="text-2xl font-bold mb-4 text-orange-300">
                      {review.name}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      "{review.review}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEEDBACK SECTION */}
        <section id="feedback" className="py-28 px-6 border-t border-white/10 relative">
          {/* Subtle background glow for feedback area */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <FeedbackForm />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/images/logo.png" alt="JellyByte Studios" className="w-12 h-12 object-contain" />
              <div>
                <p className="font-bold">JellyByte Studios</p>
                <p className="text-sm text-gray-500">© 2026 All Rights Reserved</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition">Twitter</a>
              <a href="#" className="hover:text-orange-400 transition">Instagram</a>
              <a href="#" className="hover:text-orange-400 transition">Discord</a>
              <a href="#" className="hover:text-orange-400 transition">Steam</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}