import ArticleSection from "./ArticleSection";

const topicClassName =
  "group rounded-xl border border-white/10 bg-slate-950/30 px-5 transition open:border-cyan-400/30 open:bg-slate-900/40";
const summaryClassName =
  "flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden";

function MultiAgentSystems() {
  return (
    <ArticleSection
      id="multi-agent-systems"
      number="08"
      title="Multi-Agent Systems"
      label="Collaborative Intelligence"
    >
      <div className="space-y-6 text-justify text-slate-300 leading-7">
        <p>
          While a single AI agent can handle straightforward workflows, complex
          enterprise projects often exceed what a single model can manage in one
          context window.{" "}
          <strong className="text-white">Multi-Agent Systems (MAS)</strong>{" "}
          solve this by distributing workloads across a team of specialized AI
          agents that collaborate toward a shared objective.
        </p>
        <p>
          Rather than relying on one agent to research, code, analyze, and audit
          all at once, a multi-agent system assigns distinct roles to different
          agents. This division of labor improves scalability, reduces cognitive
          bottlenecks, and mimics human team structures in real-world
          organizations.
        </p>

        <div className="rounded-2xl border border-cyan-300/20 bg-slate-950/40 p-5">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Multi-Agent Orchestration Workflow
          </p>
          <div className="mx-auto max-w-4xl space-y-4">
            <div className="mx-auto max-w-md rounded-xl border border-violet-300/50 bg-violet-300/10 px-5 py-4 text-center">
              <p className="font-semibold text-violet-100">
                User Objective / Orchestrator Agent
              </p>
              <p className="mt-1 text-sm text-violet-200">(Task Assignment)</p>
            </div>
            <div
              className="text-center text-2xl text-cyan-300"
              aria-hidden="true"
            >
              ↓
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Research Agent", "Gathers Data"],
                ["Writer / Coder", "Drafts Solution"],
                ["Reviewer / Safety Auditor Agent", "Checks Quality"],
              ].map(([title, summary]) => (
                <div
                  key={title}
                  className="rounded-xl border border-cyan-300/40 bg-cyan-300/10 px-4 py-4 text-center"
                >
                  <p className="font-semibold text-cyan-100">{title}</p>
                  <p className="mt-1 text-sm text-cyan-200">({summary})</p>
                </div>
              ))}
            </div>
            <div
              className="text-center text-2xl text-cyan-300"
              aria-hidden="true"
            >
              ↓
            </div>
            <div className="mx-auto max-w-md rounded-xl border border-emerald-300/50 bg-emerald-300/10 px-5 py-4 text-center">
              <p className="font-semibold text-emerald-100">
                Final Output Delivery
              </p>
              <p className="mt-1 text-sm text-emerald-200">
                (Message-Passing &amp; Verification)
              </p>
            </div>
          </div>
        </div>

        <details className={topicClassName}>
          <summary className={summaryClassName}>
            <span>8.1 Core Principles of Multi-Agent Collaboration</span>
            <span className="text-cyan-300 transition group-open:rotate-180">
              ⌄
            </span>
          </summary>
          <div className="border-t border-white/10 pb-5 pt-4">
            <p>
              Multi-agent architectures rely on three foundational mechanisms:
            </p>
            <ol className="mt-4 list-decimal space-y-4 pl-6">
              <li>
                <strong className="text-white">Role Specialization:</strong>{" "}
                Individual agents are prompted with specific roles, such as
                Planner, Data Collector, Software Engineer, or Compliance
                Auditor—ensuring clear separation of responsibilities without
                capability overlap.
              </li>
              <li>
                <strong className="text-white">
                  Network Topologies &amp; Message-Passing:
                </strong>{" "}
                Agents communicate through structured message-passing networks.
                Communication can be centralized (a leader agent orchestrates
                all sub-agents) or decentralized across graph topologies
                (peer-to-peer networks where agents coordinate locally).
              </li>
              <li>
                <strong className="text-white">
                  Consensus &amp; Coordination:
                </strong>{" "}
                To avoid conflicting actions, agent networks use distributed
                coordination protocols to elect leaders, assign non-overlapping
                subtasks, and reach consensus on shared outcomes.
              </li>
            </ol>
          </div>
        </details>

        <details className={topicClassName}>
          <summary className={summaryClassName}>
            <span>
              8.2 How It Works in Practice: A Real-World ChatGPT-Style Workflow
            </span>
            <span className="text-cyan-300 transition group-open:rotate-180">
              ⌄
            </span>
          </summary>
          <div className="space-y-5 border-t border-white/10 pb-5 pt-4">
            <p>
              To understand multi-agent collaboration, consider an enterprise
              request:{" "}
              <strong className="text-white">
                &quot;Generate a comprehensive market analysis report on AI
                trends with verified source citations.&quot;
              </strong>
            </p>
            <p>
              Instead of a single prompt-response turn, a multi-agent framework
              (such as CrewAI, AutoGen, or MetaGPT) executes the request through
              team collaboration:
            </p>
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <strong className="text-white">
                  The Leader / Planner Agent:
                </strong>{" "}
                Receives the user objective, breaks the task into structured
                sub-goals, and delegates responsibilities to team members.
              </li>
              <li>
                <strong className="text-white">
                  The Research Agent (Data Specialist):
                </strong>{" "}
                Invokes web search APIs and database tools to retrieve
                up-to-date market stats. It logs structured facts into shared
                memory so other agents can access the verified data.
              </li>
              <li>
                <strong className="text-white">
                  The Writer / Analyst Agent:
                </strong>{" "}
                Pulls the gathered data from memory and drafts the core analysis
                sections of the report.
              </li>
              <li>
                <strong className="text-white">
                  The Reviewer / Safety Auditor Agent:
                </strong>{" "}
                Performs{" "}
                <strong className="text-white">
                  pre-action checks (intra-reflection)
                </strong>{" "}
                and quality auditing. It inspects the draft for factual
                accuracy, checks for hallucinations or safety risks, and ensures
                key constraints are met. If issues are found, it sends feedback
                to the Writer for revision.
              </li>
              <li>
                <strong className="text-white">Final Synthesis:</strong> Once
                all sub-tasks pass verification, the Planner Agent compiles the
                final, approved document and presents it to the user.
              </li>
            </ol>
          </div>
        </details>

        <details className={topicClassName}>
          <summary className={summaryClassName}>
            <span>8.3 Benefits &amp; Framework Approaches</span>
            <span className="text-cyan-300 transition group-open:rotate-180">
              ⌄
            </span>
          </summary>
          <div className="overflow-x-auto border-t border-white/10 pb-5 pt-4">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-cyan-300/10 text-white">
                  <th className="border-b border-r border-white/10 px-4 py-3">
                    Feature / Aspect
                  </th>
                  <th className="border-b border-r border-white/10 px-4 py-3">
                    Single-Agent Setup
                  </th>
                  <th className="border-b border-r border-white/10 px-4 py-3">
                    Multi-Agent System (MAS)
                  </th>
                  <th className="border-b border-white/10 px-4 py-3">
                    Production Examples
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Workload Handling",
                    "Single context window; prone to context overflow",
                    "Distributed across specialized sub-agents",
                    "CrewAI, AutoGen, LangGraph",
                  ],
                  [
                    "Error Checking",
                    "Self-correction in a single linear thread",
                    "Peer review, pre-action verification, & cross-agent audits",
                    "MIRROR framework",
                  ],
                  [
                    "Role Structure",
                    "One general prompt trying to handle all steps",
                    "Role-playing personas (e.g., Planner, Coder, Tester)",
                    "ChatDev, MetaGPT",
                  ],
                ].map(([feature, single, multi, examples]) => (
                  <tr key={feature} className="align-top even:bg-white/[0.03]">
                    <th className="border-b border-r border-white/10 px-4 py-4 font-semibold text-cyan-100">
                      {feature}
                    </th>
                    <td className="border-b border-r border-white/10 px-4 py-4">
                      {single}
                    </td>
                    <td className="border-b border-r border-white/10 px-4 py-4">
                      {multi}
                    </td>
                    <td className="border-b border-white/10 px-4 py-4">
                      {examples}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </ArticleSection>
  );
}

export default MultiAgentSystems;
