import { useEffect } from "react";
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

// --- REUSABLE TUTORIAL ROW ---
const TutorialRow = ({ ruleNum, title, description, videoId, isReversed, accentColor }) => {
  // YouTube parameters: autoplay, mute, loop, hide controls. 
  // Note: To loop a single video, YouTube requires the 'playlist' parameter to match the videoId.
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=${videoId}&rel=0`;

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <FadeUp className={`space-y-6 ${isReversed ? "order-2 md:order-2" : "order-2 md:order-1"}`}>
        <div className={`font-bebas text-3xl ${accentColor}`}>Rule #{ruleNum}</div>
        <h4 className="text-3xl md:text-4xl font-bold text-white">{title}</h4>
        <p className="text-gray-300 text-lg leading-relaxed">
          {description}
        </p>
      </FadeUp>
      
      <FadeUp className={`relative group ${isReversed ? "order-1 md:order-1" : "order-1 md:order-2"}`}>
        <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-[2rem]" />
        <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video relative z-10">
          <iframe
            src={youtubeUrl}
            title={title}
            className="w-full h-full scale-[1.05] pointer-events-none" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
          ></iframe>
          {/* Overlay to prevent users from clicking/pausing the video */}
          <div className="absolute inset-0 z-20"></div>
        </div>
      </FadeUp>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function HowToPlayGettingUnderYourNerve() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700;900&display=swap');
        body { font-family: 'DM Sans', sans-serif; background: #0d0503; }
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
      `}</style>

      <div className="min-h-screen bg-[#0d0503] text-white overflow-x-hidden relative">
        
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-red-900/20 blur-[120px]" />
        </div>

        {/* SIMPLIFIED NAVBAR FOR SUBPAGE */}
        <header className="relative z-50 border-b border-white/10 bg-[#0d0503]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <a href="/" className="flex items-center gap-4 group">
              <img src="/images/logo.png" alt="JellyByte Studios" className="w-20 h-20 object-contain group-hover:scale-110 transition-transform" />
              <h1 className="font-bebas text-2xl tracking-wide group-hover:text-orange-400 transition-colors">
                JELLYBYTE STUDIOS
              </h1>
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative z-10 pt-20 pb-16 px-6 text-center">
          <FadeUp className="max-w-3xl mx-auto">
            <p className="text-orange-400 uppercase tracking-[0.25em] font-semibold mb-4">
              Official Survival Guide
            </p>
            <h2 className="font-bebas text-6xl md:text-8xl leading-none mb-6">
              How To Play
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Read carefully. The game won't show you any mercy, so you better know the mechanics before you drop in.
            </p>
          </FadeUp>
        </section>

        {/* TUTORIAL CONTENT */}
        <section className="relative z-10 pb-32 px-6">
        <div className="max-w-6xl mx-auto space-y-32 mt-10">
            
            {/* 1. MOVEMENT */}
            <TutorialRow 
              ruleNum="01"
              title="The Art of Motion."
              description={<>Master your vessel. The <strong className="text-orange-300">Up, Left, and Right arrow keys</strong> are your only means of navigating this treacherous world. Move with absolute purpose, leap with conviction, and never second-guess your footing.</>}
              videoId="YOUR_YOUTUBE_ID_1" 
              isReversed={false}
              accentColor="text-orange-500"
            />

            {/* 2. ENEMIES */}
            <TutorialRow 
              ruleNum="02"
              title="The Unforgiving Locals."
              description="Beware the native denizens. The Crabs patrol their territory with ruthless efficiency, while the Shells wait for the perfect moment to strike. They do not negotiate. Evade them at all costs, or perish."
              videoId="YOUR_YOUTUBE_ID_2"
              isReversed={true}
              accentColor="text-red-500"
            />

            {/* 3. ATTACKING (NEW) */}
            <TutorialRow 
              ruleNum="03"
              title="Calculated Wrath."
              description={<>When evasion fails, strike the <strong className="text-orange-300">Spacebar</strong> to unleash your weapon. But heed this warning: your stamina is violently restricted. You may only swing your weapon 10 times, and it demands 10 agonizing seconds to recharge between each blow. Strike only with absolute certainty.</>}
              videoId="YOUR_YOUTUBE_ID_3"
              isReversed={false}
              accentColor="text-orange-500"
            />

            {/* 4. SAVE / LOAD (UPDATED) */}
            <TutorialRow 
              ruleNum="04"
              title="Mastery Over Time."
              description={<>Command the fabric of reality itself. Strike <strong className="text-orange-300">Ctrl + S</strong> to anchor your soul to the present, and <strong className="text-orange-300">Ctrl + L</strong> to resurrect from your inevitable failures. But the universe limits such defiance—you are granted a strict maximum of 3 anchors per level. Do not waste them.</>}
              videoId="YOUR_YOUTUBE_ID_4"
              isReversed={true}
              accentColor="text-red-500"
            />

            {/* 5. PAUSE MENU */}
            <TutorialRow 
              ruleNum="05"
              title="A Moment's Respite."
              description={<>When the relentless chaos becomes too overwhelming, strike the <strong className="text-red-300">ESC key</strong> to fracture reality. The pause menu offers a fleeting sanctuary to catch your breath before you dive back into the nightmare.</>}
              videoId="YOUR_YOUTUBE_ID_5"
              isReversed={false}
              accentColor="text-orange-500"
            />

            {/* 6. ITEMS */}
            <TutorialRow 
              ruleNum="06"
              title="Spoils of the Bold."
              description="Seek the golden glimmer amidst the danger. Collect scattered coins to amass your fortune, and hunt for rare powerups to turn the tide of your journey. Great risk yields great reward."
              videoId="YOUR_YOUTUBE_ID_6"
              isReversed={true}
              accentColor="text-red-500"
            />

          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-10 px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm text-gray-500">© 2026 JellyByte Studios. Good luck out there.</p>
          </div>
        </footer>

      </div>
    </>
  );
}