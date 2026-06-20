import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email || !password) {
      setError("Please fill in all required fields");
      return;
    }

    if (isSignup) {
      if (!name.trim()) {
        setError("Please enter your name");
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      if (isSignup) {
        await signup(name, email, password);
      } else {
        await login(email, password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');

        body {
          font-family: 'DM Sans', sans-serif;
        }

        .font-bebas {
          font-family: 'Bebas Neue', sans-serif;
        }

        @keyframes float-orb-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float-orb-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(0.9); }
          66% { transform: translate(25px, -25px) scale(1.1); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      <div className="min-h-screen bg-[#090311] text-white flex items-center justify-center relative overflow-hidden px-4 py-10">
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-pink-500/15 blur-[100px]"
            style={{ animation: "float-orb-1 12s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-fuchsia-500/15 blur-[100px]"
            style={{ animation: "float-orb-2 15s ease-in-out infinite" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[100px]"
            style={{ animation: "float-orb-1 18s ease-in-out infinite reverse" }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 w-full max-w-md">
          {/* Logo / Back */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 group mb-6"
            >
              <img
                src="/images/logo.png"
                alt="JellyByte Studios"
                className="w-14 h-14 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="font-bebas text-2xl tracking-wide text-gray-300 group-hover:text-white transition-colors">
                JellyByte Studios
              </span>
            </Link>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden"
          >
            {/* Gradient top border accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isSignup ? "signup" : "login"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-bebas text-4xl md:text-5xl mb-2">
                      {isSignup ? "Join The Squad" : "Welcome Back"}
                    </h2>
                    <p className="text-gray-400">
                      {isSignup
                        ? "Create your account and join the community"
                        : "Sign in to your JellyByte account"}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 overflow-hidden"
                  >
                    <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {error}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name field (signup only) */}
                <AnimatePresence>
                  {isSignup && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <label className="block text-sm text-gray-400 mb-2 font-medium">
                        Full Name
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-pink-400 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          id="signup-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/25 transition-all"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-pink-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      id="login-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/25 transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2 font-medium">
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-pink-400 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/25 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-pink-400 transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password (signup only) */}
                <AnimatePresence>
                  {isSignup && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <label className="block text-sm text-gray-400 mb-2 font-medium">
                        Confirm Password
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-pink-400 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <input
                          id="signup-confirm-password"
                          type={showPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/25 transition-all"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  id="login-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 font-bold text-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-pink-500/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {isSignup ? "Creating Account..." : "Signing In..."}
                    </div>
                  ) : (
                    isSignup ? "Create Account" : "Sign In"
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-sm text-gray-500">or</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Toggle */}
              <p className="text-center text-gray-400 text-sm">
                {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  id="toggle-auth-mode"
                  type="button"
                  onClick={toggleMode}
                  className="text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                >
                  {isSignup ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </motion.div>

          {/* Back to home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-pink-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
