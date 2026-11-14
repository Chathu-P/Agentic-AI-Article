import ArticleSection from "./ArticleSection";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Brain,
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  Eye,
  GraduationCap,
  Lightbulb,
  MapPin,
  Play,
  Scale,
  ShieldCheck,
  Target,
  X,
  Zap,
} from "lucide-react";
import agentTypes from "../../data/agentTypes";
import { AnimatePresence, motion } from "framer-motion";

const agentPresentation = [
  {
    icon: Zap,
    color: "text-amber-300",
    button: "bg-amber-300",
    border: "border-amber-400/20",
    surface: "bg-amber-400/[0.06]",
  },
  {
    icon: Eye,
    color: "text-cyan-300",
    button: "bg-cyan-300",
    border: "border-cyan-400/20",
    surface: "bg-cyan-400/[0.06]",
  },
  {
    icon: Target,
    color: "text-violet-300",
    button: "bg-violet-300",
    border: "border-violet-400/20",
    surface: "bg-violet-400/[0.06]",
  },
  {
    icon: Scale,
    color: "text-fuchsia-300",
    button: "bg-fuchsia-300",
    border: "border-fuchsia-400/20",
    surface: "bg-fuchsia-400/[0.06]",
  },
  {
    icon: GraduationCap,
    color: "text-emerald-300",
    button: "bg-emerald-300",
    border: "border-emerald-400/20",
    surface: "bg-emerald-400/[0.06]",
  },
];

function TypesOfAIAgents() {
  const [selectedAgent, setSelectedAgent] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [detailAgent, setDetailAgent] = useState(null);
  const agent = agentTypes[selectedAgent];
  const {
    icon: AgentIcon,
    color,
    button,
    border,
    surface,
  } = agentPresentation[selectedAgent];

  const runSimulation = () => {
    setIsRunning(false);
    requestAnimationFrame(() => setIsRunning(true));
  };

  const renderAgentLinks = () =>
    agentTypes.map((agentType, index) => {
      const { color } = agentPresentation[index];

      return (
        <span key={agentType.name}>
          <button
            type="button"
            onClick={() => setDetailAgent(index)}
            className={`border-b border-dashed ${color} transition hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-2 focus:ring-offset-slate-950`}
            aria-label={`Open details about ${agentType.name} Agents`}
          >
            {agentType.name} Agents
          </button>
        </span>
      );
    });

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setDetailAgent(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <ArticleSection
      id="types-of-ai-agents"
      number="05"
      title="Types of AI Agents"
    >
      <p className="text-slate-300 leading-7">
        The classical AI agent taxonomy describes five increasingly capable
        approaches to intelligent behavior. Agents progress from reacting to the
        current observation, to maintaining a world model, pursuing goals,
        balancing competing outcomes, and learning from experience. There are
        five main types of AI agents: {renderAgentLinks()[0]},{" "}
        {renderAgentLinks()[1]}, {renderAgentLinks()[2]},{" "}
        {renderAgentLinks()[3]} and {renderAgentLinks()[4]}.
      </p>

      {detailAgent !== null && (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setDetailAgent(null)}
        >
          {(() => {
            const details = agentTypes[detailAgent];
            const presentation = agentPresentation[detailAgent];
            const Icon = presentation.icon;

            return (
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="agent-details-title"
                onClick={(event) => event.stopPropagation()}
                className={`max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl border ${presentation.border} bg-slate-950 p-6 text-justify shadow-2xl sm:p-8`}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] ${presentation.color}`}
                    >
                      <Icon size={22} aria-hidden="true" />
                      {details.eyebrow}
                    </p>
                    <h3
                      id="agent-details-title"
                      className="text-2xl font-bold text-white sm:text-4xl"
                    >
                      {details.name} Agent
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDetailAgent(null)}
                    aria-label="Close agent details"
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <X size={22} aria-hidden="true" />
                  </button>
                </div>

                <p className="text-base leading-7 text-slate-200 sm:text-lg">
                  {details.description}
                </p>

                {details.detailedDescription && (
                  <div className="mt-6 space-y-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Detailed explanation
                      </p>
                      <p className="text-sm leading-7 text-slate-300 sm:text-base">
                        {details.detailedDescription}
                      </p>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                        How it works
                      </p>
                      <p className="text-sm leading-7 text-slate-300 sm:text-base">
                        {details.process}
                      </p>
                    </div>
                  </div>
                )}

                {details.suitability && (
                  <>
                    <div className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                        Best suited for
                      </p>
                      <p className="text-sm leading-7 text-slate-300 sm:text-base">
                        {details.suitability}
                      </p>
                    </div>

                    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Working mechanism
                      </p>
                      <div className="space-y-3">
                        {details.workingMechanism.map(
                          ([step, explanation], index) => (
                            <div key={step} className="flex gap-3">
                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${presentation.surface} font-mono text-xs font-bold ${presentation.color}`}
                              >
                                {index + 1}
                              </span>
                              <p className="text-sm leading-6 text-slate-300">
                                <span className="font-semibold text-white">
                                  {step}:
                                </span>{" "}
                                {explanation}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-300">
                          Advantages
                        </p>
                        <ul className="space-y-2">
                          {details.advantages.map((advantage) => (
                            <li
                              key={advantage}
                              className="flex gap-2 text-sm leading-6 text-slate-300"
                            >
                              <CheckCircle2
                                className="mt-1 shrink-0 text-emerald-300"
                                size={14}
                                aria-hidden="true"
                              />
                              {advantage}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
                        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-rose-300">
                          Limitations
                        </p>
                        <ul className="space-y-2">
                          {details.limitations.map((limitation) => (
                            <li
                              key={limitation}
                              className="flex gap-2 text-sm leading-6 text-slate-300"
                            >
                              <span
                                className="mt-1 shrink-0 text-rose-300"
                                aria-hidden="true"
                              >
                                ×
                              </span>
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {details.additionalContent && (
                  <div className="mt-6 space-y-6 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
                      <div className="space-y-4">
                      <p className="text-sm leading-7 text-slate-300 sm:text-base">
                        {details.additionalContent.overview}
                      </p>
                      <p className="text-sm leading-7 text-slate-300 sm:text-base">
                        {details.additionalContent.centralIdea}
                      </p>
                      <p className="text-sm leading-7 text-slate-300 sm:text-base">
                        {details.additionalContent.example}
                      </p>
                      <p className="text-sm leading-7 text-slate-300 sm:text-base">
                        {details.additionalContent.distinction}
                      </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
                      <h4
                        className={`mb-3 text-base font-semibold uppercase tracking-wide ${presentation.color}`}
                      >
                        Architecture and Key Components
                      </h4>
                      <p className="mb-4 text-sm leading-7 text-slate-300 sm:text-base">
                        {details.additionalContent.architectureIntro}
                      </p>
                      <div className="space-y-3">
                        {details.additionalContent.architectureComponents.map(
                          ([component, explanation], index) => (
                            <div
                              key={component}
                              className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base"
                            >
                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${presentation.surface} font-mono text-xs font-bold ${presentation.color}`}
                              >
                                {index + 1}
                              </span>
                              <p>
                              <span className="font-semibold text-white">
                                {component}:
                              </span>{" "}
                              {explanation}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
                      <h4
                        className={`mb-3 text-base font-semibold uppercase tracking-wide ${presentation.color}`}
                      >
                        {details.additionalContent.planningTitle ||
                          "Goal Representation and Planning"}
                      </h4>
                      {details.additionalContent.goalIntro && (
                        <p className="mb-4 text-sm leading-7 text-slate-300 sm:text-base">
                          {details.additionalContent.goalIntro}
                        </p>
                      )}
                      {details.additionalContent.goalRepresentation && (
                        <p className="mb-4 text-sm leading-7 text-slate-300 sm:text-base">
                          {details.additionalContent.goalRepresentation}
                        </p>
                      )}
                      {details.additionalContent.goalExampleIntro && (
                        <p className="mb-3 text-sm leading-7 text-slate-300 sm:text-base">
                          {details.additionalContent.goalExampleIntro}
                        </p>
                      )}
                      {details.additionalContent.goalConditions.length > 0 && (
                        <ol className="mb-4 space-y-2 text-sm leading-7 text-slate-300 sm:text-base">
                          {details.additionalContent.goalConditions.map(
                            (condition, index) => (
                              <li
                                key={condition}
                                className="flex gap-3 items-start"
                              >
                                <span
                                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${presentation.surface} font-mono text-xs font-bold ${presentation.color}`}
                                >
                                  {index + 1}
                                </span>
                                <span>{condition}</span>
                              </li>
                            ),
                          )}
                        </ol>
                      )}
                      {details.additionalContent.planning && (
                        <p className="mb-4 text-sm leading-7 text-slate-300 sm:text-base">
                          {details.additionalContent.planning}
                        </p>
                      )}
                      {details.additionalContent.search && (
                        <p className="mb-4 text-sm leading-7 text-slate-300 sm:text-base">
                          {details.additionalContent.search}
                        </p>
                      )}
                      {details.additionalContent.optimization && (
                        <p className="text-sm leading-7 text-slate-300 sm:text-base">
                          {details.additionalContent.optimization}
                        </p>
                      )}
                    </div>

                    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
                      <h4
                        className={`mb-3 text-base font-semibold uppercase tracking-wide ${presentation.color}`}
                      >
                        Working Mechanism
                      </h4>
                      <ol className="space-y-3">
                        {details.additionalContent.workingStages.map(
                          ([stage, explanation], index) => (
                            <li
                              key={stage}
                              className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base"
                            >
                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${presentation.surface} font-mono text-xs font-bold ${presentation.color}`}
                              >
                                {index + 1}
                              </span>
                              <span>
                                <span className="font-semibold text-white">
                                  {stage}:
                                </span>{" "}
                                {explanation}
                              </span>
                            </li>
                          ),
                        )}
                      </ol>
                    </div>

                    {details.additionalContent.learningApproaches && (
                      <div className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
                        <h4
                          className={`mb-3 text-base font-semibold uppercase tracking-wide ${presentation.color}`}
                        >
                          Learning Approaches Used by Learning Agents
                        </h4>
                        <div className="space-y-4">
                          {details.additionalContent.learningApproaches.map(
                            ([approach, explanation], index) => (
                              <div
                                key={approach}
                                className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base"
                              >
                                <span
                                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${presentation.surface} font-mono text-xs font-bold ${presentation.color}`}
                                >
                                  {index + 1}
                                </span>
                                <p>
                                  <span className="font-semibold text-white">
                                    {approach}:
                                  </span>{" "}
                                  {explanation}
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                          {details.additionalContent.learningApproachesIntro}
                        </p>
                      </div>
                    )}

                    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
                      <h4
                        className={`mb-3 text-base font-semibold uppercase tracking-wide ${presentation.color}`}
                      >
                        Practical Applications
                      </h4>
                      <ol className="space-y-3">
                        {details.additionalContent.applications.map(
                          ([application, explanation], index) => (
                            <li
                              key={application}
                              className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base"
                            >
                              <span
                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${presentation.surface} font-mono text-xs font-bold ${presentation.color}`}
                              >
                                {index + 1}
                              </span>
                              <span>
                                <span className="font-semibold text-white">
                                  {application}:
                                </span>{" "}
                                {explanation}
                              </span>
                            </li>
                          ),
                        )}
                      </ol>
                      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                        {details.additionalContent.applicationsIntro}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
                        <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text-emerald-300">
                          Advantages
                        </h4>
                        <ul className="space-y-2">
                          {details.additionalContent.advantages.map(
                            (advantage) => (
                              <li
                                key={advantage}
                                className="flex gap-2 text-sm leading-6 text-slate-300"
                              >
                                <CheckCircle2
                                  className="mt-1 shrink-0 text-emerald-300"
                                  size={14}
                                  aria-hidden="true"
                                />
                                {advantage}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                      <div className="rounded-xl border border-rose-300/20 bg-rose-300/[0.05] p-5">
                        <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text-rose-300">
                          Limitations
                        </h4>
                        <ul className="space-y-2">
                          {details.additionalContent.limitations.map(
                            (limitation) => (
                              <li
                                key={limitation}
                                className="flex gap-2 text-sm leading-6 text-slate-300"
                              >
                                <span
                                  className="mt-1 shrink-0 text-rose-300"
                                  aria-hidden="true"
                                >
                                  ×
                                </span>
                                {limitation}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                      How it decides
                    </p>
                    <p
                      className={`text-lg font-semibold ${presentation.color}`}
                    >
                      {details.signal}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {details.response}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Example
                    </p>
                    <p className="text-sm leading-6 text-slate-300">
                      {details.example}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    In the delivery robot scenario
                  </p>
                  <p className="text-sm leading-6 text-slate-300">
                    {details.outcome}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
                  <p className="mr-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Capabilities
                  </p>
                  {details.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className={`rounded-full border ${presentation.border} ${presentation.surface} px-3 py-1 text-xs font-medium text-slate-200`}
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/70 p-5 sm:p-7">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              <Brain size={14} aria-hidden="true" />
              Inside the agent’s mind
            </p>
            <h3 className="max-w-xl text-xl font-semibold text-white sm:text-2xl">
              Same world. Different decisions.
            </h3>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-400 sm:text-right">
            Select an agent to see how its reasoning changes the outcome.
          </p>
        </div>

        <div className="mb-8 grid gap-2 sm:grid-cols-5">
          {agentTypes.map(({ number, name }, index) => {
            const { icon: Icon } = agentPresentation[index];
            const isSelected = selectedAgent === index;

            return (
              <button
                key={name}
                type="button"
                onClick={() => {
                  setSelectedAgent(index);
                  setIsRunning(false);
                }}
                aria-pressed={isSelected}
                className={`group flex items-center gap-3 rounded-xl border p-3 text-left transition sm:block sm:p-4 ${
                  isSelected
                    ? `${agentPresentation[index].border} ${agentPresentation[index].surface}`
                    : "border-white/10 bg-slate-950/30 hover:border-white/20"
                }`}
              >
                <Icon
                  size={18}
                  className={`${isSelected ? agentPresentation[index].color : "text-slate-500"} transition`}
                  aria-hidden="true"
                />
                <span className="mt-0 text-xs font-semibold text-slate-300 sm:mt-3 sm:block">
                  <span className="mr-2 font-mono text-slate-500">
                    {number}
                  </span>
                  {name}
                </span>
              </button>
            );
          })}
        </div>

        <div className={`rounded-2xl border ${border} ${surface} p-5 sm:p-7`}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 flex items-center gap-3">
                <div className={`rounded-xl bg-slate-950/70 p-3 ${color}`}>
                  <AgentIcon size={24} aria-hidden="true" />
                </div>
                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.18em] ${color}`}
                  >
                    {agent.eyebrow}
                  </p>
                  <h4 className="text-xl font-semibold text-white">
                    {agent.name} Agent
                  </h4>
                </div>
              </div>
              <p className="leading-7 text-slate-300">{agent.description}</p>
            </div>
            <div className="rounded-xl border border-cyan-300/25 bg-cyan-300/[0.08] p-5 shadow-[0_0_30px_rgba(34,211,238,0.08)] lg:max-w-sm">
              <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                Shared scenario
              </p>
              <p className="text-xl font-bold leading-8 tracking-tight text-white sm:text-2xl">
                A delivery robot reaches a{" "}
                <span className="text-cyan-200">blocked intersection.</span>
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-300">
                How does each agent respond?
              </p>
            </div>
          </div>

          <div className="my-7 grid gap-2 sm:grid-cols-4">
            {["Environment", "Perception", "Decision", "Action"].map(
              (step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <motion.div
                    initial={false}
                    animate={
                      isRunning
                        ? { scale: [1, 1.08, 1], opacity: [0.55, 1, 0.8] }
                        : {}
                    }
                    transition={{ delay: index * 0.35, duration: 0.45 }}
                    className="flex min-h-14 flex-1 items-center gap-2 rounded-lg border border-white/10 bg-slate-950/50 px-3"
                  >
                    <CircleDot size={14} className={color} aria-hidden="true" />
                    <span className="text-xs font-medium text-slate-300">
                      {step}
                    </span>
                  </motion.div>
                  {index < 3 && (
                    <ArrowRight
                      size={14}
                      className="hidden text-slate-600 sm:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ),
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-xl border border-white/10 bg-slate-950/60 p-4"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <Lightbulb size={14} className={color} aria-hidden="true" />
                    Agent response
                  </p>
                  <p className="text-base font-medium text-white">
                    {agent.response}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={runSimulation}
                  className={`flex shrink-0 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110 ${button}`}
                >
                  <Play size={15} fill="currentColor" aria-hidden="true" />
                  Run simulation
                </button>
              </div>
              {isRunning && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-5 border-t border-white/10 pt-5"
                >
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                      <ShieldCheck size={15} aria-hidden="true" />
                      Mission complete
                    </p>
                    <span
                      className={`rounded-full border ${border} ${surface} px-3 py-1 text-xs font-semibold ${color}`}
                    >
                      {agent.metric}
                    </span>
                  </div>
                  <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 p-4">
                    <motion.div
                      initial={{ left: "0%" }}
                      animate={{ left: "100%" }}
                      transition={{ duration: 1.4, ease: "easeInOut" }}
                      className={`absolute top-0 h-0.5 w-1/4 ${button}`}
                    />
                    <div className="flex items-center justify-between gap-1">
                      {agent.route.map((routeStep, index) => (
                        <div
                          key={routeStep}
                          className="flex min-w-0 flex-1 items-center"
                        >
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.18 }}
                            className={`relative z-10 flex min-h-11 w-full items-center justify-center rounded-lg border ${index === agent.route.length - 1 ? "border-emerald-300/30 bg-emerald-300/10" : `${border} ${surface}`} px-1 text-center`}
                          >
                            {index === 0 || index === agent.route.length - 1 ? (
                              <MapPin
                                size={13}
                                className={
                                  index === agent.route.length - 1
                                    ? "text-emerald-300"
                                    : color
                                }
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                className={`font-mono text-[9px] font-bold ${color}`}
                              >
                                {String(index).padStart(2, "0")}
                              </span>
                            )}
                            <span className="ml-1 hidden text-[9px] font-semibold text-slate-300 sm:inline">
                              {routeStep}
                            </span>
                          </motion.div>
                          {index < agent.route.length - 1 && (
                            <ArrowRight
                              size={13}
                              className="mx-1 shrink-0 text-slate-600"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">
                    <span className={`font-semibold ${color}`}>
                      Decision trace:
                    </span>{" "}
                    {agent.outcome}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Capability progression
            </p>
            <div className="grid gap-2 sm:grid-cols-5">
              {[
                "Current input",
                "Memory",
                "Goals",
                "Trade-offs",
                "Feedback",
              ].map((capability, index) => {
                const isActive = agent.capabilities.includes(capability);
                return (
                  <div
                    key={capability}
                    className={`rounded-lg border p-3 text-center text-xs transition ${
                      isActive
                        ? `${border} ${surface} text-slate-200`
                        : "border-white/5 text-slate-600"
                    }`}
                  >
                    {isActive && (
                      <CheckCircle2
                        size={14}
                        className={`mx-auto mb-2 ${color}`}
                        aria-hidden="true"
                      />
                    )}
                    <span>{capability}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] p-4">
            <p className="max-w-xs text-sm leading-6 text-slate-400">
              <span className="font-semibold text-cyan-200">Key idea:</span>{" "}
              each type adds a richer answer to “What should I do next?”
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex items-start gap-3">
            <BrainCircuit
              className="mt-0.5 shrink-0 text-cyan-300"
              size={20}
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-white">
                Modern agents are hybrids
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                A production agent can remember context, plan toward goals,
                compare outcomes, and learn from feedback in one loop.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-xs font-semibold text-cyan-200">
            <CheckCircle2 size={15} aria-hidden="true" />
            Sense <ArrowRight size={13} aria-hidden="true" /> Decide{" "}
            <ArrowRight size={13} aria-hidden="true" /> Improve
          </div>
        </div>
      </div>
    </ArticleSection>
  );
}

export default TypesOfAIAgents;
