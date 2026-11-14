import { useState } from "react";
import ArticleSection from "./ArticleSection";

const layers = {
  reasoning: {
    number: "1",
    title: 'The Reasoning Engine (The "Brain")',
    shortTitle: "Reasoning Engine",
    summary: "Understands goals, thinks step-by-step, and self-checks",
    description:
      "The reasoning engine is the central intelligence of the agent. It reads instructions, interprets context, and decides what to do next.",
    points: [
      <>
        <strong className="text-white">Thinking and Acting:</strong> The agent
        alternates between thinking out loud to figure out its next move and
        acting on that decision.
      </>,
      <>
        <strong className="text-white">Self-Checking:</strong> Before spending
        resources or taking a major action, the agent verifies its own plan to
        catch mistakes early. After taking an action, it reviews the real-world
        outcome to confirm it worked as expected.
      </>,
    ],
  },
  planning: {
    number: "2",
    title: "The Planning Subsystem",
    shortTitle: "Planning Subsystem",
    summary: "Breaks down goals and looks ahead to avoid dead ends",
    description:
      "Complex objectives cannot be finished in a single step. The planning layer manages how the agent breaks down big projects into smaller, logical sub-tasks.",
    points: [
      <>
        <strong className="text-white">Task Breakdown:</strong> It splits
        large objectives into step-by-step actions, either upfront before
        starting or dynamically as new information comes in.
      </>,
      <>
        <strong className="text-white">Looking Ahead:</strong> Rather than
        guessing one step at a time, smart planners simulate potential future
        outcomes to avoid dead ends and revise their plans when conditions
        change.
      </>,
    ],
  },
  memory: {
    number: "3",
    title: "The Memory Subsystem",
    shortTitle: "Memory Subsystem",
    summary: "Remembers past experiences, facts, and reusable skills",
    description:
      "Memory allows an agent to accumulate knowledge over time instead of starting from scratch on every turn. An agent relies on four main types of memory:",
    points: [
      <>
        <strong className="text-white">Working Memory:</strong> The active
        scratchpad holding current task instructions and immediate context.
      </>,
      <>
        <strong className="text-white">Episodic Memory:</strong> A continuous
        record of past actions, tool outputs, and user interactions.
      </>,
      <>
        <strong className="text-white">Semantic Memory:</strong> Summarized
        facts, preferences, and general rules learned across multiple sessions.
      </>,
      <>
        <strong className="text-white">Procedural Memory:</strong> A library of
        reusable skills, verified code snippets, and proven action templates.
      </>,
    ],
  },
  tools: {
    number: "4",
    title: "Tool Integration & Execution",
    shortTitle: "Tool & Execution Layer",
    summary: "Interacts with web browsers, databases, code, and APIs",
    description:
      "The tool layer connects the agent to the outside world. Instead of just writing about an action, the agent uses tool interfaces to run code, search the web, read databases, or call external software services. It then feeds the real-world results back into its reasoning engine.",
    points: [],
  },
  control: {
    number: "5",
    title: "Control & Feedback Loop",
    shortTitle: "Control & Feedback Loop",
    summary: "Enforces safety guardrails, coordinates teams, and recovers",
    description:
      "The control layer acts as the supervisor and safety guardrail for the entire system.",
    points: [
      <>
        <strong className="text-white">Safety &amp; Governance:</strong> It
        sets execution limits, prevents infinite loops, and ensures actions
        follow user rules and budget constraints.
      </>,
      <>
        <strong className="text-white">Multi-Agent Teamwork:</strong> When a
        job is too large for a single agent, this layer organizes a team of
        specialized agents, such as a Planner, a Worker, and a Reviewer, to
        collaborate.
      </>,
      <>
        <strong className="text-white">Error Recovery:</strong> If an action
        fails, the feedback loop notifies the planner so the agent can
        immediately adapt and try a different path rather than stopping.
      </>,
    ],
  },
};

function LayerCard({ layer, active, onSelect, onClear }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onSelect(layer)}
      onMouseLeave={onClear}
    >
      {active && (
        <div
          role="tooltip"
          className="mb-3 w-[min(22rem,calc(100vw-3rem))] rounded-xl border border-cyan-300/40 bg-slate-900 px-4 py-3 text-left text-sm leading-6 text-slate-200 shadow-2xl shadow-cyan-950/40"
        >
          <p className="font-semibold text-cyan-200">{layer.title}</p>
          <p className="mt-1">{layer.description}</p>
          {layer.points.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-4">
              {layer.points.map((point, index) => (
                <li key={`${layer.number}-tooltip-${index}`}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      <button
        type="button"
        onFocus={() => onSelect(layer)}
        onBlur={onClear}
        className="group w-full rounded-xl border border-cyan-300/30 bg-slate-950/80 px-5 py-5 text-left shadow-lg shadow-cyan-950/20 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        <span className="block text-center text-base font-semibold text-cyan-100">
          {layer.number}. {layer.shortTitle}
        </span>
        <span className="mt-2 block text-center text-sm leading-6 text-slate-300">
          {layer.summary}
        </span>
      </button>
    </div>
  );
}

function Architecture() {
  const [activeLayer, setActiveLayer] = useState(null);

  return (
    <ArticleSection
      id="architecture"
      number="03"
      title="Architecture"
      label="How an Agentic AI System Is Designed"
    >
      <div className="space-y-8 text-justify text-slate-300 leading-7">
        <p>
          Unlike a standard chatbot that simply takes a prompt and returns a
          single text response, an{" "}
          <strong className="text-white">Agentic AI system</strong> acts as an
          autonomous digital partner. It operates in a continuous loop: it
          understands a goal, checks its memory, plans out its steps, performs
          real-world actions using external tools, inspects its results, and
          adjusts its approach until the goal is achieved.
        </p>

        <p>
          To work effectively, a modern AI agent architecture is structured
          around <strong className="text-white">five core building blocks</strong>:
        </p>

        <div className="mx-auto w-full max-w-4xl space-y-4">
          <LayerCard
            layer={layers.reasoning}
            active={activeLayer?.number === layers.reasoning.number}
            onSelect={setActiveLayer}
            onClear={() => setActiveLayer(null)}
          />
          <div className="flex justify-center text-2xl text-cyan-300" aria-hidden="true">
            ↓
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <LayerCard
              layer={layers.planning}
              active={activeLayer?.number === layers.planning.number}
              onSelect={setActiveLayer}
              onClear={() => setActiveLayer(null)}
            />
            <LayerCard
              layer={layers.memory}
              active={activeLayer?.number === layers.memory.number}
              onSelect={setActiveLayer}
              onClear={() => setActiveLayer(null)}
            />
          </div>
          <div className="flex justify-center text-2xl text-cyan-300" aria-hidden="true">
            ↓
          </div>
          <LayerCard
            layer={layers.tools}
            active={activeLayer?.number === layers.tools.number}
            onSelect={setActiveLayer}
            onClear={() => setActiveLayer(null)}
          />
          <div className="flex justify-center text-2xl text-cyan-300" aria-hidden="true">
            ↓
          </div>
          <LayerCard
            layer={layers.control}
            active={activeLayer?.number === layers.control.number}
            onSelect={setActiveLayer}
            onClear={() => setActiveLayer(null)}
          />
        </div>
      </div>
    </ArticleSection>
  );
}

export default Architecture;
