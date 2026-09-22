const featureCards = [
  {
    number: "01",
    label: "Start here",
    title: "Understand AI",
    description:
      "Learn the basics in Malayalam and see where AI fits into your work, studies, and ideas.",
    accent: "bg-[#c1ff3d] text-[#161616]",
    badge: "border-black/15",
  },
  {
    number: "02",
    label: "Practice",
    title: "Use the tools",
    description:
      "Write better prompts, explore smart workflows, and create useful results without feeling overwhelmed.",
    accent: "bg-[#159dcc] text-white",
    badge: "border-white/30",
  },
  {
    number: "03",
    label: "Build",
    title: "Make it yours",
    description:
      "Finish with a personal project you can use, share, and keep improving after the course.",
    accent: "bg-[#f0a6ff] text-[#161616]",
    badge: "border-black/15",
  },
];

const learningSteps = [
  ["01", "The AI mindset", "Know what AI can actually do"],
  ["02", "Prompting that works", "Ask better questions, get better results"],
  ["03", "Your first AI workflow", "Turn one repeated task into a system"],
  ["04", "Build a useful project", "Put everything together and share it"],
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="bg-[#161616] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
      aria-labelledby="course-inside-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c1ff3d]">
              Inside the course
            </p>
            <h2
              id="course-inside-heading"
              className="mt-4 text-4xl font-medium leading-[0.98] tracking-tighter sm:text-6xl"
            >
              From curious beginner to confident creator.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-white/55">
            A simple path through the tools, habits, and real projects that make
            AI useful in everyday life.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {featureCards.map(
            ({ number, label, title, description, accent, badge }) => (
              <article
                key={number}
                className={`flex min-h-80 flex-col justify-between rounded-2xl p-7 sm:p-9 ${accent}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-[#161616] text-sm font-bold text-white`}
                  >
                    {number}
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${badge}`}
                  >
                    {label}
                  </span>
                </div>
                <div>
                  <h3 className="text-3xl font-medium tracking-tight">
                    {title}
                  </h3>
                  <p
                    className={`mt-3 max-w-xs text-sm leading-6 ${accent.includes("text-white") ? "text-white/75" : "text-black/65"}`}
                  >
                    {description}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl bg-white text-[#161616]">
          <div className="flex flex-col gap-3 border-b border-black/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <h3 className="text-xl font-medium tracking-tight">
              What you will learn
            </h3>
            <span className="text-sm text-black/45">Demo curriculum</span>
          </div>
          <div className="divide-y divide-black/10">
            {learningSteps.map(([number, title, description]) => (
              <div
                key={number}
                className="grid gap-2 px-6 py-5 sm:grid-cols-[3rem_1fr_1fr] sm:items-center sm:px-8"
              >
                <span className="text-sm font-bold text-black/35">
                  {number}
                </span>
                <p className="font-medium">{title}</p>
                <p className="text-sm text-black/50">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
