import ArticleSection from "./ArticleSection";

function HowAIAgentsWork() {
  return (
    <ArticleSection
      id="how-ai-agents-work"
      number="05"
      title="How AI Agents Work"
    >
      <p className="text-slate-300 leading-7">
        An AI agent typically follows a loop of perception, reasoning, planning,
        action, and reflection. It receives an objective, decomposes the problem
        into subtasks, invokes relevant tools or data sources, evaluates the
        outcome, and repeats the cycle until a satisfactory result is achieved.
        This workflow is what gives agentic systems their autonomy.
      </p>
    </ArticleSection>
  );
}

export default HowAIAgentsWork;
