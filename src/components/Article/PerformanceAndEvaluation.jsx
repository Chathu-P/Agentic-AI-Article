import ArticleSection from "./ArticleSection";

function PerformanceAndEvaluation() {
  return (
    <ArticleSection
      id="performance-and-evaluation"
      number="11"
      title="Performance and Evaluation"
    >
      <p className="text-slate-300 leading-7">
        Evaluating agent performance is more complex than measuring single
        prompt quality. Teams assess success based on task completion, latency,
        cost efficiency, tool accuracy, safety behavior, and the ability to
        recover from errors. Strong evaluation harnesses and benchmark datasets
        are essential for designing dependable agents.
      </p>
    </ArticleSection>
  );
}

export default PerformanceAndEvaluation;
