import { ArrowLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AgenticAIVsTraditionalAI,
  Applications,
  Architecture,
  Challenges,
  CoreComponents,
  FutureOfAgenticAI,
  Fundamentals,
  Introduction,
  MultiAgentSystems,
  TypesOfAIAgents,
} from "../components/Article";

const tocItems = [
  { id: "introduction", title: "01 Introduction" },
  { id: "fundamentals", title: "02 Fundamentals" },
  { id: "architecture", title: "03 Architecture" },
  { id: "core-components", title: "04 Core Components" },
  { id: "types-of-ai-agents", title: "05 Types of AI Agents" },
  {
    id: "agentic-ai-vs-traditional-ai",
    title: "06 Agentic AI vs Traditional AI",
  },
  { id: "applications", title: "07 Applications" },
  { id: "multi-agent-systems", title: "08 Multi-Agent Systems" },
  { id: "challenges", title: "09 Challenges" },
  { id: "future-of-agentic-ai", title: "10 Future of Agentic AI" },
];

function ArticlePage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("introduction");
  const [isContentsOpen, setIsContentsOpen] = useState(false);

  useEffect(() => {
    const sections = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0.2, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-24 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/*<button
          type="button"
          onClick={() => navigate("/")}
          className="mt-8 mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900 px-4 py-2 text-sm font-medium text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button> */}

        <div
          className={`mt-8 mb-8 md:fixed md:left-0 md:top-1/2 md:z-40 md:mb-0 md:flex md:-translate-y-1/2 md:items-center ${
            isContentsOpen ? "md:w-[23rem]" : "md:w-12"
          }`}
        >
          <div
            className={`overflow-hidden rounded-r-3xl border border-cyan-400/20 bg-slate-900/80 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-xl md:max-h-[calc(100vh-3rem)] md:transition-[width,opacity] md:duration-300 ${
              isContentsOpen
                ? "md:w-80 md:opacity-100"
                : "md:w-0 md:border-0 md:opacity-0"
            }`}
          >
            <div className="flex items-center border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Contents
              </p>
            </div>

            <div className="p-3">
              <nav className="flex max-h-[calc(100vh-11rem)] flex-col gap-2 overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden">
                {tocItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsContentsOpen(false)}
                      className={`group relative flex shrink-0 items-center justify-between rounded-2xl px-3 py-2.5 text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-300 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.2)]"
                          : "text-slate-300 hover:bg-slate-800/80 hover:text-cyan-300"
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-semibold ${
                            isActive
                              ? "border-cyan-400/40 bg-cyan-500/20 text-cyan-200"
                              : "border-white/10 bg-slate-800 text-cyan-300"
                          }`}
                        >
                          {index + 1}
                        </span>
                        {item.title}
                      </span>
                      <ChevronRight
                        size={14}
                        className={`transition-transform duration-900 ${
                          isActive
                            ? "translate-x-1 text-cyan-300"
                            : "text-slate-500 group-hover:translate-x-1 group-hover:text-cyan-300"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsContentsOpen((isOpen) => !isOpen)}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-r-2xl border border-cyan-400/30 bg-slate-900 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition hover:bg-slate-800 md:flex"
            aria-label={
              isContentsOpen ? "Collapse contents" : "Expand contents"
            }
            aria-expanded={isContentsOpen}
          >
            <ChevronRight
              size={20}
              className={`transition-transform duration-900 ${
                isContentsOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <article className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/70 shadow-[0_30px_80px_rgba(2,6,23,0.8)]">
          <div className="border-b border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/30 p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Feature Article
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              The Rise of Agentic AI
            </h1>

            <p className="mt-6 max-w-full text-lg leading-8 text-slate-300">
              Agentic AI represents the next evolution beyond chatbots. Instead
              of simply responding to prompts, these systems can reason, plan,
              sequence tasks, and take actions across digital workflows with a
              higher degree of autonomy.
            </p>
          </div>

          <div className="space-y-10 p-8 md:p-10">
            <Introduction />
            <Fundamentals />
            <Architecture />
            <CoreComponents />
            <TypesOfAIAgents />
            <AgenticAIVsTraditionalAI />
            <Applications />
            <MultiAgentSystems />
            <Challenges />
            <FutureOfAgenticAI />
          </div>
        </article>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900 px-4 py-2 text-sm font-medium text-cyan-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>
    </main>
  );
}

export default ArticlePage;
