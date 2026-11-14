import ArticleSection from "./ArticleSection";

function SecurityEthicsAndGovernance() {
  return (
    <ArticleSection
      id="security-ethics-and-governance"
      number="10"
      title="Security, Ethics and Governance"
    >
      <p className="text-slate-300 leading-7">
        As agents gain more autonomy, the need for governance becomes critical.
        Security risks include prompt injection, unauthorized access to tools,
        unsafe API calls, and privacy leakage. Ethical guardrails, approval
        flows, accountability frameworks, and human oversight help ensure these
        systems act responsibly and safely.
      </p>
    </ArticleSection>
  );
}

export default SecurityEthicsAndGovernance;
