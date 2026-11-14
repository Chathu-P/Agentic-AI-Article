import ArticleSection from "./ArticleSection";

function TechnologiesAndFrameworks() {
  return (
    <ArticleSection
      id="technologies-and-frameworks"
      number="09"
      title="Technologies and Frameworks"
    >
      <p className="text-slate-300 leading-7">
        Building agentic systems requires a stack of technologies: LLMs, vector
        databases, retrieval systems, orchestration frameworks, APIs, and
        observability tools. Frameworks such as LangChain, AutoGen, Semantic
        Kernel, and CrewAI simplify orchestration, while tool calling, memory
        layers, and RAG pipelines enable agents to work with both structured and
        unstructured information.
      </p>
    </ArticleSection>
  );
}

export default TechnologiesAndFrameworks;
