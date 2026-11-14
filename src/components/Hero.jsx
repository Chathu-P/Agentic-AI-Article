import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-28"
    >
      {/* Background decorative effects */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left side: Hero content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Category label */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            Exploring the Next Generation of AI
          </div>

          {/* Main heading */}
          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            The Rise of
            <span className="block bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Agentic AI
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-slate-300 sm:text-2xl">
            Moving Beyond Chatbots to Autonomous Systems
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            Artificial Intelligence is evolving beyond simply responding to
            prompts. Discover how Agentic AI systems can plan, make decisions,
            use tools, and execute multi-step tasks with varying levels of human
            supervision.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#overview"
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore the Article
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <span className="text-sm text-slate-500">
              An interactive AI exploration
            </span>
          </div>
        </motion.div>

        {/* Right side: Visual illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
        >
          {/* Outer glowing circle */}
          <div className="absolute inset-8 rounded-full border border-cyan-400/20 shadow-[0_0_80px_rgba(34,211,238,0.12)]" />

          {/* Middle circle */}
          <div className="absolute inset-16 rounded-full border border-blue-400/30" />

          {/* Inner circle */}
          <div className="absolute inset-24 rounded-full bg-linear-to-br from-cyan-400/20 to-blue-600/20 blur-xl" />

          {/* Central AI symbol */}
          <div className="relative flex h-36 w-36 items-center justify-center rounded-3xl border border-cyan-300/40 bg-slate-900 shadow-[0_0_60px_rgba(34,211,238,0.2)]">
            <Sparkles size={64} className="text-cyan-300" />
          </div>

          {/* Floating labels */}
          <div className="absolute right-0 top-16 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl">
            <p className="text-xs text-slate-500">01 / CAPABILITY</p>
            <p className="mt-1 font-medium text-cyan-300">Reasoning</p>
          </div>

          <div className="absolute bottom-16 left-0 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl">
            <p className="text-xs text-slate-500">02 / CAPABILITY</p>
            <p className="mt-1 font-medium text-blue-300">Action</p>
          </div>

          <div className="absolute bottom-4 right-12 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl">
            <p className="text-xs text-slate-500">03 / CAPABILITY</p>
            <p className="mt-1 font-medium text-purple-300">Adaptation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
