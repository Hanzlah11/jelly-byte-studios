import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Gamepad2,
  Rocket,
  Sparkles,
  Users,
  User,
  Globe,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const teamMembers = [
  {
    name: "Hanzlah Imran",
    title: "Co-Founder",
    role: "Head of Coding & Art",
    gradient: "from-pink-500 to-orange-400",
    description:
      "Leads the technical and artistic direction of JellyByte Studios, overseeing gameplay systems, architecture, programming standards, pixel art, and overall game quality.",
    skills: [
      "Gameplay Programming",
      "Architecture",
      "Pixel Art",
      "Animation",
      "Game Design",
    ],
  },
  {
    name: "Mohib",
    title: "Co-Founder",
    role: "Head of Task Assignment & Budget",
    gradient: "from-purple-500 to-pink-500",
    description:
      "Coordinates every department, manages schedules and production, oversees budgeting, and represents JellyByte Studios during public engagements.",
    skills: [
      "Leadership",
      "Management",
      "Planning",
      "Scheduling",
      "Public Speaking",
    ],
  },
  {
    name: "Haider",
    title: "Co-Founder",
    role: "Head of Marketing",
    gradient: "from-orange-500 to-pink-500",
    description:
      "Builds the studio's community, manages social media, develops marketing campaigns, and connects JellyByte Studios with players worldwide.",
    skills: [
      "Marketing",
      "Social Media",
      "Community",
      "Promotion",
      "Branding",
    ],
  },
  {
    name: "Abdur Rafay",
    title: "Member",
    role: "Head of Web Development & Database",
    gradient: "from-pink-500 to-purple-500",
    description:
      "Develops the studio website and backend systems while designing secure database architecture that supports future products.",
    skills: [
      "React",
      "Backend",
      "Databases",
      "Security",
      "Web",
    ],
  },
];

function TeamMemberCard({ member, reverse = false }) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group"
      >
        <div
          className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${member.gradient} opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40`}
        />

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="relative h-[470px] rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-pink-500/40 transition-all duration-500 hover:shadow-[0_0_60px_rgba(236,72,153,0.18)]"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute -top-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-r ${member.gradient} opacity-10 blur-3xl`}
          />

          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-8">
              <User size={58} strokeWidth={1.5} />
            </div>

            <h3 className="font-bebas text-4xl tracking-widest">PHOTO</h3>

            <p className="mt-3 uppercase tracking-[0.35em] text-gray-400 text-sm">
              Coming Soon
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p
          className={`uppercase tracking-[0.35em] text-sm font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
        >
          {member.title}
        </p>

        <h2 className="font-bebas text-6xl mt-3">{member.name}</h2>

        <div
          className={`mt-5 h-[3px] w-28 rounded-full bg-gradient-to-r ${member.gradient}`}
        />

        <h3 className="mt-7 text-2xl font-semibold">{member.role}</h3>

        <p className="mt-8 text-gray-300 text-lg leading-relaxed">
          {member.description}
        </p>

        <div className="mt-10">
          <h4 className="uppercase tracking-[0.25em] text-sm text-pink-400 mb-5">
            Core Skills
          </h4>

          <div className="flex flex-wrap gap-3">
            {member.skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{
                  scale: 1.08,
                }}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 hover:bg-white/[0.06] transition"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          {[FaGithub, FaLinkedin, Globe].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-pink-500/40 transition"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700;900&display=swap');

        body {
          font-family: 'DM Sans', sans-serif;
          background: #090311;
        }

        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* STICKY NAVBAR AT THE TOP LEVEL */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#090311]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo & Studio Info */}
          <Link to="/" className="flex items-center gap-4 z-10">
            <img
              src="/images/logo.png"
              alt="JellyByte Studios"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h1 className="font-bebas text-3xl tracking-wide text-white leading-none">
                JellyByte Studios
              </h1>
              <p className="text-xs text-gray-400">About Our Team</p>
            </div>
          </Link>

          {/* Centered, Prominent Nav Links */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2 font-bold text-lg tracking-wider text-gray-200">
            <Link to="/" className="hover:text-pink-400 transition-colors">
              Home
            </Link>
            <a href="#story" className="hover:text-pink-400 transition-colors">
              Story
            </a>
            <a href="#team" className="hover:text-pink-400 transition-colors">
              Team
            </a>
            <a href="#values" className="hover:text-pink-400 transition-colors">
              Values
            </a>
            <a href="#timeline" className="hover:text-pink-400 transition-colors">
              Journey
            </a>
          </nav>

          <div className="hidden md:block w-32" />
        </div>
      </header>

      <div className="min-h-screen bg-[#090311] text-white relative">
        <motion.div
          animate={{
            left: mouse.x - 250,
            top: mouse.y - 250,
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
          }}
          className="fixed w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[140px] pointer-events-none z-0"
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        {/* HERO SECTION */}
        <div className="relative z-10" id="hero">
          <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
              <FadeUp>
                <div className="inline-flex items-center gap-3 rounded-full border border-pink-500/20 bg-pink-500/10 px-6 py-3 mb-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-2.5 h-2.5 rounded-full bg-pink-400"
                  />
                  <span className="uppercase tracking-[0.3em] text-sm text-pink-300 font-semibold">
                    Meet The Team Behind JellyByte Studios
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <h1 className="font-bebas text-7xl md:text-[9rem] leading-[0.9]">
                  SMALL TEAM.
                  <br />
                  <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                    BIG DREAMS.
                  </span>
                  <br />
                  LIMITLESS
                  <span className="text-white/80"> CREATIVITY.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={0.3}>
                <p className="max-w-3xl mx-auto mt-10 text-xl leading-relaxed text-gray-300">
                  Every unforgettable game begins with passionate people. We are a
                  small independent studio driven by creativity, innovation, and the
                  ambition to build memorable gaming experiences that players will
                  never forget.
                </p>
              </FadeUp>

              <FadeUp delay={0.45}>
                <motion.div
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="relative mt-24 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.12, 0.22, 0.12],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                    }}
                    className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500 blur-3xl"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-orange-500/5" />

                  <div className="relative z-10 px-12 py-24">
                    <h2 className="font-bebas text-5xl md:text-7xl">
                      BUILDING WORLDS
                      <span className="block text-pink-400">
                        ONE BYTE AT A TIME
                      </span>
                    </h2>

                    <p className="max-w-3xl mx-auto mt-8 text-lg leading-relaxed text-gray-300">
                      From gameplay programming and pixel art to marketing, web
                      development, and production management, every member leads a
                      core department while collaborating on every aspect of our
                      games.
                    </p>
                  </div>
                </motion.div>
              </FadeUp>

              <FadeUp delay={0.6}>
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="mt-20 flex flex-col items-center"
                >
                  <span className="uppercase tracking-[0.4em] text-xs text-gray-500">
                    Scroll
                  </span>
                  <div className="mt-4 h-16 w-[2px] rounded-full bg-gradient-to-b from-pink-500 to-transparent" />
                </motion.div>
              </FadeUp>
            </div>
          </section>

          {/* STUDIO STORY */}
          <section id="story" className="relative z-10 py-32 px-6 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <FadeUp>
                <div className="text-center mb-20">
                  <p className="uppercase tracking-[0.35em] text-pink-400 font-semibold mb-5">
                    Our Story
                  </p>
                  <h2 className="font-bebas text-6xl md:text-7xl">
                    More Than Just A
                    <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                      Game Studio
                    </span>
                  </h2>
                </div>
              </FadeUp>

              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {[
                  { number: "4", title: "Core Members" },
                  { number: "100%", title: "Passion Driven" },
                  { number: "∞", title: "Ideas Ahead" },
                ].map((item) => (
                  <FadeUp key={item.title}>
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 text-center hover:border-pink-500/30 hover:shadow-[0_0_50px_rgba(236,72,153,0.15)] transition-all duration-500"
                    >
                      <h3 className="font-bebas text-6xl bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                        {item.number}
                      </h3>
                      <p className="uppercase tracking-[0.25em] text-gray-400 mt-4">
                        {item.title}
                      </p>
                    </motion.div>
                  </FadeUp>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                <FadeUp>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-12 h-full hover:border-pink-500/30 hover:shadow-[0_0_60px_rgba(236,72,153,0.18)] transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center shadow-xl shadow-pink-500/20 mb-8">
                      <Rocket size={30} />
                    </div>
                    <h3 className="font-bebas text-5xl mb-6">Our Mission</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Our mission is to create memorable games that challenge,
                      entertain, and inspire players. Every mechanic, visual, and
                      sound is crafted with care to deliver experiences that feel
                      rewarding from beginning to end.
                    </p>
                  </motion.div>
                </FadeUp>

                <FadeUp delay={0.15}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-12 h-full hover:border-pink-500/30 hover:shadow-[0_0_60px_rgba(236,72,153,0.18)] transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-500/20 mb-8">
                      <Sparkles size={30} />
                    </div>
                    <h3 className="font-bebas text-5xl mb-6">Our Vision</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      We aspire to become a recognized indie game studio known for
                      originality, technical excellence, and unforgettable gameplay.
                      Every release is another step toward building a lasting legacy
                      for JellyByte Studios.
                    </p>
                  </motion.div>
                </FadeUp>
              </div>
            </div>
          </section>

          {/* TEAM SECTION */}
          <section id="team" className="relative z-10 py-32 px-6 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <FadeUp>
                <div className="text-center mb-24">
                  <p className="uppercase tracking-[0.35em] text-pink-400 font-semibold mb-5">
                    Meet The Team
                  </p>
                  <h2 className="font-bebas text-6xl md:text-8xl">
                    The Minds Behind
                    <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                      JellyByte Studios
                    </span>
                  </h2>
                  <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
                    Every member leads a key department while collaborating across
                    every stage of development. Together, we combine creativity,
                    technical expertise, and a shared passion for building
                    unforgettable gaming experiences.
                  </p>
                </div>
              </FadeUp>

              <div className="space-y-40">
                {teamMembers.map((member, index) => (
                  <FadeUp key={member.name} delay={index * 0.1}>
                    <TeamMemberCard member={member} reverse={index % 2 !== 0} />
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>

          {/* STUDIO VALUES */}
          <section id="values" className="relative z-10 py-32 px-6 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <FadeUp>
                <div className="text-center mb-24">
                  <p className="uppercase tracking-[0.35em] text-pink-400 font-semibold mb-5">
                    Our Values
                  </p>
                  <h2 className="font-bebas text-6xl md:text-8xl">
                    What Drives
                    <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                      Everything We Build
                    </span>
                  </h2>
                </div>
              </FadeUp>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                {[
                  {
                    title: "Gameplay First",
                    icon: Gamepad2,
                    text: "Every mechanic should feel rewarding, polished, and memorable before anything else.",
                    gradient: "from-pink-500 to-orange-400",
                  },
                  {
                    title: "Innovation",
                    icon: Rocket,
                    text: "We constantly experiment with new ideas instead of following trends.",
                    gradient: "from-orange-500 to-pink-500",
                  },
                  {
                    title: "Quality",
                    icon: Sparkles,
                    text: "Attention to detail separates good games from unforgettable experiences.",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    title: "Collaboration",
                    icon: Users,
                    text: "Great games are built by passionate people working together toward one vision.",
                    gradient: "from-pink-500 to-purple-500",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <FadeUp key={item.title}>
                      <motion.div
                        whileHover={{
                          y: -10,
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="group relative h-full rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden hover:border-pink-500/40 hover:shadow-[0_0_60px_rgba(236,72,153,0.18)] transition-all duration-500"
                      >
                        <div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${item.gradient} transition-opacity duration-500`}
                        />

                        <div
                          className={`relative mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl`}
                        >
                          <Icon size={30} strokeWidth={2} className="text-white" />
                        </div>

                        <h3 className="relative font-bebas text-4xl mb-5">
                          {item.title}
                        </h3>

                        <p className="relative text-gray-300 leading-relaxed">
                          {item.text}
                        </p>
                      </motion.div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </section>

          {/* TIMELINE */}
          <section id="timeline" className="relative z-10 py-32 px-6 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <FadeUp>
                <div className="text-center mb-24">
                  <p className="uppercase tracking-[0.35em] text-pink-400 font-semibold mb-5">
                    Our Journey
                  </p>
                  <h2 className="font-bebas text-6xl md:text-8xl">
                    Looking
                    <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                      Ahead
                    </span>
                  </h2>
                </div>
              </FadeUp>

              <div className="relative">
                <div className="hidden lg:block">
                  <div className="absolute left-0 right-0 top-10 h-[3px] rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400" />
                  <div className="grid grid-cols-5 gap-8">
                    {[
                      { year: "2026", title: "Studio Founded" },
                      { year: "Project 01", title: "Getting Under Your Nerve" },
                      { year: "Project 02", title: "Next Original Game" },
                      { year: "Steam", title: "Official Release" },
                      { year: "Future", title: "Growing JellyByte Studios" },
                    ].map((item, index) => (
                      <FadeUp key={item.title} delay={index * 0.08}>
                        <div className="relative pt-16 text-center">
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 border-4 border-[#090311]"
                          />
                          <h3 className="font-bebas text-3xl">{item.year}</h3>
                          <p className="mt-4 text-gray-300">{item.title}</p>
                        </div>
                      </FadeUp>
                    ))}
                  </div>
                </div>

                <div className="lg:hidden space-y-10">
                  {[
                    { year: "2026", title: "Studio Founded" },
                    { year: "Project 01", title: "Getting Under Your Nerve" },
                    { year: "Project 02", title: "Next Original Game" },
                    { year: "Steam", title: "Official Release" },
                    { year: "Future", title: "Growing JellyByte Studios" },
                  ].map((item, index) => (
                    <FadeUp key={item.title} delay={index * 0.08}>
                      <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-orange-400" />
                          {index !== 4 && (
                            <div className="w-[2px] flex-1 mt-2 bg-gradient-to-b from-pink-500 to-orange-400" />
                          )}
                        </div>
                        <div className="pb-10">
                          <h3 className="font-bebas text-3xl">{item.year}</h3>
                          <p className="mt-2 text-gray-300">{item.title}</p>
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CALL TO ACTION */}
          <section id="cta" className="relative z-10 py-32 px-6 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <FadeUp>
                <motion.div
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.12, 0.22, 0.12],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500 blur-3xl"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-orange-500/5" />

                  <div className="relative z-10 px-12 py-24 text-center">
                    <h2 className="font-bebas text-6xl md:text-8xl leading-none">
                      THE BEST
                      <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                        IS YET TO COME
                      </span>
                    </h2>

                    <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-300 leading-relaxed">
                      JellyByte Studios is only getting started. Every prototype,
                      every line of code, every design, and every challenge brings
                      us one step closer to creating unforgettable games enjoyed by
                      players around the world.
                    </p>

                    <div className="mt-14 flex flex-wrap justify-center gap-6">
                      <Link
                        to="/"
                        className="rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-4 font-semibold shadow-xl shadow-pink-500/30 hover:scale-105 active:scale-95 transition-transform"
                      >
                        Explore Our Games
                      </Link>

                      <Link to="/">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold backdrop-blur-xl hover:border-pink-500/40 transition"
                        >
                          Back Home
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            </div>
          </section>
        </div>

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