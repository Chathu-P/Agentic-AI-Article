import { useState } from "react";
import { ArrowUp, ArrowUpRight, BookOpen, Sparkles, X } from "lucide-react";
import logo from "../assests/logo.png";
import references from "../data/references";

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isReferencesOpen, setIsReferencesOpen] = useState(false);

  const footerLinks = [
    { name: "Overview", href: "#overview" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Applications", href: "#applications" },
    { name: "Challenges", href: "#challenges" },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6">
      <div className="mx-auto max-w-7xl py-16">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand and description */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2">
              <img
                src={logo}
                alt="Agentic AI"
                className="h-15 w-auto max-w-[350px] object-contain"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Exploring the evolution of artificial intelligence and the
              emerging world of autonomous AI systems that can reason, plan, and
              take action.
            </p>

            {/* LinkedIn link */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
            >
              Connect on LinkedIn
              <ArrowUpRight size={14} />
            </a>

            <button
              type="button"
              onClick={() => setIsReferencesOpen(true)}
              className="mt-4 flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
            >
              Resources & References
              <BookOpen size={14} />
            </button>
          </div>

          {/* Article navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Explore the Article
            </h3>

            <ul className="mt-6 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:translate-x-1 hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing message */}
          <div>
            <div className="flex items-center gap-2 text-cyan-400">
              <Sparkles size={20} />
              <h3 className="text-sm font-semibold uppercase tracking-widest">
                The Future of AI
              </h3>
            </div>

            <p className="mt-6 text-2xl font-semibold leading-relaxed text-white">
              From generating answers
              <span className="text-cyan-400"> to taking action.</span>
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              The next chapter of artificial intelligence is already unfolding.
              Stay curious and keep exploring.
            </p>
          </div>
        </div>

        {isReferencesOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setIsReferencesOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="references-title"
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-cyan-400/20 bg-slate-950 p-6 text-left shadow-2xl sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <h2
                  id="references-title"
                  className="text-xl font-semibold uppercase tracking-wide text-cyan-300 sm:text-2xl"
                >
                  Resources & References
                </h2>
                <button
                  type="button"
                  onClick={() => setIsReferencesOpen(false)}
                  aria-label="Close resources and references"
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={22} />
                </button>
              </div>

              <ol className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
                {references.map((reference, index) => (
                  <li key={`${reference.text}-${index}`} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 font-mono text-xs font-bold text-cyan-300">
                      {index + 1}
                    </span>
                    <span>
                      {reference.text}{" "}
                      {reference.link && (
                        <a
                          href={reference.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 underline decoration-cyan-300/40 underline-offset-2 hover:text-cyan-200"
                        >
                          [{reference.linkLabel}]
                        </a>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* Footer bottom section */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-slate-500 sm:text-left">
            © {currentYear} AGENTIC AI.
          </p>

          <p className="text-xs text-slate-500">
            Exploring the future of autonomous intelligence.
          </p>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
