import ArticleSection from "./ArticleSection";

function FutureOfAgenticAI() {
  return (
    <ArticleSection
      id="future-of-agentic-ai"
      number="10"
      title="Future of Agentic AI"
    >
      <p className="text-justify text-slate-300 leading-7">
        The future of <strong className="text-white">Agentic AI</strong> is
        shifting from simple conversational assistants toward autonomous,
        goal-driven systems capable of planning, executing multi-step workflows,
        and using external tools with minimal human intervention. Rather than
        relying on isolated prompts, enterprise operations are moving toward{" "}
        <strong className="text-white">bounded autonomy</strong>, where
        specialized agent networks communicate through open protocols such as
        the Model Context Protocol (MCP) and Agent2Agent (A2A). As these systems
        take on greater operational responsibility, their adoption will be
        anchored by{" "}
        <strong className="text-white">
          formal governance frameworks and safety guardrails
        </strong>{" "}
        such as Singapore&apos;s Model AI Governance Framework (MGF), which
        enforce policy boundaries, auditable decision logs, and human oversight
        for high-risk actions.
      </p>
    </ArticleSection>
  );
}

export default FutureOfAgenticAI;
