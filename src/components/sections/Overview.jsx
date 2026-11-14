import { motion, useReducedMotion } from "framer-motion";
import overviewImage from "../../assests/overview.png";

function Overview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="overview"
      className="overview-section scroll-mt-24 min-h-screen bg-slate-900 px-6 py-24"
    >
      <div className="overview-grid mx-auto max-w-7xl">
        <motion.div
          className="overview-copy"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -28 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">From answers to action</span>
          <h2 className="mt-5 text-4xl font-bold text-white">
            Understanding Agentic AI
          </h2>

          <p className="mt-6 max-w-3xl text-justify leading-8 text-slate-400">
            Artificial Intelligence is evolving beyond simply generating text,
            images, and answering questions. One of the most exciting
            developments in this journey is Agentic AI. The term agent comes
            from the Latin word agere, meaning “to do” or “to act.”
            Traditionally, AI systems mainly responded to human instructions,
            but with the advancement of Large Language Models (LLMs) and
            automation technologies, AI has started moving beyond providing
            answers to taking actions. Agentic AI can understand goals, plan
            tasks, make decisions, use external tools, and execute actions to
            achieve specific objectives with minimal human intervention.
          </p>
          <p className="mt-6 max-w-3xl text-justify leading-8 text-slate-400">
            Agentic AI is creating new opportunities across industries such as
            healthcare, finance, research, and business operations. From
            automating everyday workflows to supporting complex decision-making,
            AI agents have the potential to improve efficiency and reduce manual
            effort. However, reliability, data quality, security, and human
            oversight remain important considerations. This marks a significant
            shift towards a future where humans and intelligent AI agents work
            together to solve problems and accomplish tasks more effectively.
          </p>
        </motion.div>

        <motion.figure
          className="overview-visual"
          initial={
            shouldReduceMotion ? false : { opacity: 0, x: 28, scale: 0.96 }
          }
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : { y: -14, scale: 1.025, rotate: -1 }
          }
        >
          <div className="overview-image-glow" aria-hidden="true" />
          <img
            src={overviewImage}
            alt="Agentic AI robot understanding goals, planning, using tools, and taking action"
          />
          <figcaption>Understand. Plan. Act. Learn.</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

export default Overview;
