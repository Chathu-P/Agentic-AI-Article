import componentsImage from "../../assests/components.png";
import ArticleSection from "./ArticleSection";

const topicClassName =
  "group rounded-xl border border-white/10 bg-slate-950/30 px-5 transition open:border-cyan-400/30 open:bg-slate-900/40";
const summaryClassName =
  "flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden";

function CoreComponents() {
  return (
    <ArticleSection
      id="core-components"
      number="04"
      title="Core Components"
      label="What an Agent Is Made Of"
    >
      <div className="space-y-6 text-justify text-slate-300 leading-7">
        <p>
          While an agent&apos;s architecture defines how its system layers
          interact, its <strong className="text-white">core components</strong>{" "}
          represent the foundational technologies and functional building blocks
          that enable autonomy. By integrating language reasoning, data
          management, strategic planning, external tools, and safety guardrails,
          an AI agent transforms from a simple text generator into an adaptive
          system capable of solving complex tasks.
        </p>

        <figure className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-cyan-400/20 bg-slate-900/60">
          <img
            src={componentsImage}
            alt="Diagram showing the six core components of an Agentic AI system"
            className="h-auto w-full object-contain"
          />
          <figcaption className="px-4 py-3 text-center text-sm text-slate-400">
            The six essential building blocks of a modern Agentic AI system.
          </figcaption>
        </figure>

        <p>
          Modern Agentic AI architectures commonly rely on{" "}
          <strong className="text-white">six essential building blocks</strong>:
        </p>

        <div className="space-y-3">
          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>1. Large Language Models (LLMs) — The Cognitive Engine</span>
              <span className="text-cyan-300 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="border-t border-white/10 pb-5 pt-4">
              <p>
                The{" "}
                <strong className="text-white">
                  Large Language Model (LLM)
                </strong>{" "}
                serves as the central executive &quot;brain&quot; and decision
                policy of the agent. It processes natural language
                instructions, analyzes user context, and translates open-ended
                goals into structured execution steps. By leveraging vast
                pre-trained knowledge, the LLM evaluates environment feedback,
                generates logical reasoning traces, and selects appropriate
                actions.
              </p>
            </div>
          </details>

          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>2. Memory Systems — Retaining Context &amp; State</span>
              <span className="text-cyan-300 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="space-y-4 border-t border-white/10 pb-5 pt-4">
              <p>
                Without memory, an LLM operates as a stateless model that resets
                after every prompt. The{" "}
                <strong className="text-white">
                  memory subsystem
                </strong>{" "}
                implements a continuous{" "}
                <strong className="text-white">write–manage–read cycle</strong>
                , storing context across four primary tiers:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-white">Working Memory:</strong> The
                  active context buffer holding immediate prompts, scratchpads,
                  and current conversation turns.
                </li>
                <li>
                  <strong className="text-white">Episodic Memory:</strong>{" "}
                  Timestamped logs recording past interaction histories, tool
                  outputs, and execution results.
                </li>
                <li>
                  <strong className="text-white">Semantic Memory:</strong>{" "}
                  Consolidated facts, user preferences, and domain rules
                  extracted from past experiences.
                </li>
                <li>
                  <strong className="text-white">Procedural Memory:</strong>{" "}
                  Repositories of reusable code routines, action templates, and
                  verified skills (e.g., Voyager skill libraries).
                </li>
              </ul>
              <p>
                Development frameworks like{" "}
                <strong className="text-white">
                  LangGraph, CrewAI, AutoGen, and WebATLAS
                </strong>{" "}
                manage memory through customized graph stores, relational
                databases (SQLite3), message lists, or operating-system-inspired
                virtual paging (MemGPT).
              </p>
            </div>
          </details>

          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>3. Planning Modules — Task Breakdown &amp; Strategy</span>
              <span className="text-cyan-300 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="space-y-4 border-t border-white/10 pb-5 pt-4">
              <p>
                Complex, multi-step goals cannot be solved in a single step.
                The <strong className="text-white">planning module</strong>{" "}
                structures execution through two main mechanisms:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-white">Task Decomposition:</strong>{" "}
                  Splitting broad objectives into structured directed acyclic
                  graphs (DAGs) or step-by-step subtasks.
                </li>
                <li>
                  <strong className="text-white">Lookahead Planning:</strong>{" "}
                  Rather than relying purely on next-step greedy reasoning,
                  advanced planners like FLARE and WebATLAS simulate potential
                  future outcomes using tree search (such as Monte Carlo Tree
                  Search) and backward value estimation to avoid dead ends and
                  adjust plans dynamically.
                </li>
              </ul>
            </div>
          </details>

          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>4. Tools &amp; APIs — External Action &amp; Environment Grounding</span>
              <span className="text-cyan-300 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="space-y-4 border-t border-white/10 pb-5 pt-4">
              <p>
                Tools allow the agent to interact with digital and physical
                environments rather than just generating text responses.
                Through <strong className="text-white">tool interfaces</strong>
                , agents call web APIs, run code in sandboxes, execute database
                queries, or control browser applications. The{" "}
                <strong className="text-white">ReAct framework</strong>{" "}
                synergizes this layer by interleaving reasoning
                (&quot;thoughts&quot;) with action calls (&quot;acts&quot;) and
                environment outputs (&quot;observations&quot;), grounding
                language models in real-world facts.
              </p>
            </div>
          </details>

          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>5. Retrieval-Augmented Generation (RAG) — Grounded Knowledge Lookup</span>
              <span className="text-cyan-300 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="space-y-4 border-t border-white/10 pb-5 pt-4">
              <p>
                <strong className="text-white">
                  Retrieval-Augmented Generation (RAG)
                </strong>{" "}
                pairs the LLM with an external vector database or information
                index. At query time, the retriever fetches relevant
                document chunks or memory vectors and injects them into the
                prompt. This approach:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Prevents factual hallucinations by grounding outputs in
                  verifiable source text.
                </li>
                <li>
                  Provides up-to-date, domain-specific information without
                  expensive model retraining.
                </li>
                <li>
                  Powers agentic RAG and structured memory retrieval within
                  multi-agent frameworks.
                </li>
              </ul>
            </div>
          </details>

          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>6. Guardrails &amp; Safety Mechanisms — Control &amp; Verification</span>
              <span className="text-cyan-300 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="border-t border-white/10 pb-5 pt-4">
              <p>
                To prevent runaway execution, security breaches, or harmful
                actions, agents integrate{" "}
                <strong className="text-white">
                  guardrails and reflection mechanisms
                </strong>
                . Systems like AgentAuditor and Reflection-Driven Control
                inspect tool parameters and proposed trajectories before
                execution (intra-reflection) to catch errors, enforce security
                policies, and maintain auditable evidence trails.
              </p>
            </div>
          </details>
        </div>
      </div>
    </ArticleSection>
  );
}

export default CoreComponents;
