function ArticleSection({ id, number, title, label, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-xl border border-white/5 bg-slate-950/40 p-4 transition duration-300 hover:border-cyan-400/20 sm:rounded-2xl sm:p-6"
    >
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {label}
        </p>
      )}
      <h2 className="mb-3 text-2xl font-semibold text-white">
        {number} {title}
      </h2>
      {children}
    </section>
  );
}

export default ArticleSection;
