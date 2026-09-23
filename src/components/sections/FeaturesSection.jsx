const curriculumCards = [
  {
    number: "01",
    label: "Foundation",
    title: "Build your AI foundation",
    description: "Welcome, concepts, and better prompts",
    modules: [
      "Module 1 · Welcome",
      "Module 2 · Introduction to AI",
      "Module 3 · Prompt Engineering",
      "Module 4 · Assets",
    ],
    accent: "bg-[#c1ff3d] text-[#161616]",
    badge: "border-black/15",
  },
  {
    number: "02",
    label: "Everyday AI",
    title: "Use AI in everyday situations",
    description: "Chatbots and real-life applications",
    modules: [
      "Module 5 · Different Chatbots and Uses",
      "Module 6 · Potential of AI with Real Life Examples",
    ],
    accent: "bg-[#159dcc] text-white",
    badge: "border-white/30",
  },
  {
    number: "03",
    label: "Creative tools",
    title: "Explore your creative side",
    description: "Social media and generative tools",
    modules: [
      "Module 7 · AI For Social Media",
      "Module 8 · Generative AI Tools",
    ],
    accent: "bg-[#f0a6ff] text-[#161616]",
    badge: "border-black/15",
  },
  {
    number: "04",
    label: "Final project",
    title: "Put your learning together",
    description: "Your final project and continued learning",
    modules: [
      "Module 9 · Final Project",
      "Module 10 · New Updates",
      "Module 11 · Conclusion",
    ],
    accent: "bg-[#ffb86b] text-[#161616]",
    badge: "border-black/15",
  },
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
            <h2
              id="course-inside-heading"
              className="mt-4 text-4xl font-medium leading-[0.98] tracking-tighter sm:text-6xl"
            >
              Your curriculum, from first prompt to final project.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-white/55">
            Four focused chapters to help you understand AI, use it in daily
            life, and build with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {curriculumCards.map(
            ({ number, label, title, description, modules, accent, badge }) => (
              <article
                key={number}
                className={`flex min-h-80 flex-col rounded-2xl p-7 sm:p-9 ${accent}`}
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
                <div className="mt-10">
                  <h3 className="max-w-lg text-3xl font-medium tracking-tight">
                    {title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-6 ${accent.includes("text-white") ? "text-white/75" : "text-black/65"}`}
                  >
                    {description}
                  </p>
                  <ol className="mt-6 space-y-2 border-t border-current/15 pt-5">
                    {modules.map((module) => (
                      <li
                        key={module}
                        className={`text-sm leading-6 ${accent.includes("text-white") ? "text-white/90" : "text-black/75"}`}
                      >
                        {module}
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
