import { useState } from "react";
import {
  BrainCircuit,
  Database,
  GitBranch,
  LockKeyhole,
  ServerCog,
  Wrench,
} from "lucide-react";
import ArticleSection from "./ArticleSection";

const challenges = [
  {
    title: "Long-Horizon Planning & Short-Sighted Traps",
    icon: BrainCircuit,
    summary: "Local next-step reasoning can lead complex tasks into dead ends.",
    content:
      "Standard language models plan step-by-step using local, next-step reasoning. On complex multi-step tasks, this greedy approach causes the agent to make short-sighted early choices that trap it in dead ends, compounding errors over time.",
    accent: "cyan",
  },
  {
    title: "Memory Loss & Information Noise",
    icon: Database,
    summary: "Long histories can dilute important context and cause summarization drift.",
    content:
      'As conversation history grows, agents face attentional dilution ("lost in the middle"), where important instructions in the center of long context windows get ignored. Periodically summarizing history also leads to summarization drift, where low-frequency but critical details are silently lost.',
    accent: "violet",
  },
  {
    title: "Tool Execution & Schema Errors",
    icon: Wrench,
    summary: "Invalid tool calls and changing APIs can break execution.",
    content:
      "Agents frequently suffer from tool hallucinations (invoking non-existent API endpoints or passing invalid data parameters). Additionally, when external software APIs update over time (schema drift), stored tool patterns break.",
    accent: "amber",
  },
  {
    title: "Multi-Agent Coordination & Scaling Limits",
    icon: GitBranch,
    summary: "Larger agent networks increase message lag and coordination overhead.",
    content:
      "While small teams of 2–5 agents collaborate well, performance degrades sharply as networks scale up (e.g., to 20–100 agents) due to message lag, conflicting strategies, and communication overhead.",
    accent: "fuchsia",
  },
  {
    title: "Action Risks & Security Hazards",
    icon: LockKeyhole,
    summary: "Real-world actions can turn small errors into serious incidents.",
    content:
      "Unlike traditional chatbots where risk is limited to generated text, agents take real actions (executing code, modifying databases, making API requests). A sequence of individually harmless actions can accumulate into severe security breaches or data loss.",
    accent: "rose",
  },
  {
    title: "High Compute Latency & Cost",
    icon: ServerCog,
    summary: "Reasoning loops and verification increase time and infrastructure cost.",
    content:
      "Running multi-turn reasoning loops, iterative self-reflections, RAG searches, and pre-action checks requires significantly more time and computing cost than single-turn answers.",
    accent: "emerald",
  },
];

const accentClasses = {
  cyan: "border-cyan-300/40 bg-cyan-300/10 text-cyan-200",
  violet: "border-violet-300/40 bg-violet-300/10 text-violet-200",
  amber: "border-amber-300/40 bg-amber-300/10 text-amber-200",
  fuchsia: "border-fuchsia-300/40 bg-fuchsia-300/10 text-fuchsia-200",
  rose: "border-rose-300/40 bg-rose-300/10 text-rose-200",
  emerald: "border-emerald-300/40 bg-emerald-300/10 text-emerald-200",
};

function Challenges() {
  const [selectedChallenge, setSelectedChallenge] = useState(0);
  const activeChallenge = challenges[selectedChallenge];
  const ActiveIcon = activeChallenge.icon;

  return (
    <ArticleSection id="challenges" number="09" title="Challenges">
      <div className="space-y-7 text-slate-300 leading-7">
        <p>
          Building autonomous AI agents introduces unique technical hurdles
          that go beyond traditional text-generation models. Select a challenge
          below to explore its impact on agentic systems.
        </p>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            const isSelected = selectedChallenge === index;

            return (
              <button
                key={challenge.title}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedChallenge(index)}
                onFocus={() => setSelectedChallenge(index)}
                className={`group rounded-2xl border p-5 text-left transition hover:-translate-y-1 hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-cyan-300 ${
                  isSelected
                    ? accentClasses[challenge.accent]
                    : "border-white/10 bg-slate-950/40 text-slate-300"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-current/30 bg-slate-950/30">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-semibold text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {challenge.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {challenge.summary}
                </p>
              </button>
            );
          })}
        </div>

        <article className="rounded-2xl border border-cyan-300/30 bg-cyan-300/5 p-6 shadow-xl shadow-cyan-950/20">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              <ActiveIcon size={22} />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Challenge {selectedChallenge + 1}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-white">
                {activeChallenge.title}
              </h3>
            </div>
          </div>
          <p className="mt-5 text-justify">{activeChallenge.content}</p>
        </article>
      </div>
    </ArticleSection>
  );
}

export default Challenges;
