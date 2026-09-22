const AboutSection = () => {
  return (
    <section
      id="about"
      className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/45">
            Build trust
          </p>
          <h2
            id="trust-heading"
            className="mt-4 text-4xl font-medium leading-[0.98] tracking-tighter sm:text-6xl"
          >
            Learn with a community that is moving forward.
          </h2>
          <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
            Practical lessons, friendly support, and visible progress from your
            first prompt to your next big idea.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.08fr_1fr_0.92fr] lg:grid-rows-[1fr_auto]">
          <article className="relative min-h-72 overflow-hidden rounded-2xl bg-[#159dcc] p-7 text-white shadow-[0_18px_45px_rgba(21,157,204,0.2)] sm:p-9 lg:row-span-2">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                  Learners growing together
                </p>
                <p className="mt-8 text-7xl font-medium leading-none tracking-[-0.08em] sm:text-8xl">
                  4.9/5
                </p>
              </div>
              <div className="mt-12 max-w-xs">
                <p className="text-lg font-medium leading-6">
                  “I finally understand how to use AI in my daily work.”
                </p>
                <p className="mt-4 text-sm text-white/70">
                  Demo feedback from a Malayalam learner
                </p>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full border-28 border-white/15"
            />
          </article>

          <article className="min-h-52 rounded-2xl bg-white p-7 shadow-[0_12px_35px_rgba(22,22,22,0.06)] sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
              Course completion
            </p>
            <p className="mt-8 text-6xl font-medium leading-none tracking-[-0.08em] text-[#161616] sm:text-7xl">
              86%
            </p>
            <p className="mt-5 max-w-xs text-sm leading-5 text-black/55">
              Learners are building a steady habit with short, focused lessons.
            </p>
          </article>

          <article className="min-h-52 rounded-2xl bg-[#c1ff3d] p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/55">
              Active learners
            </p>
            <p className="mt-8 text-6xl font-medium leading-none tracking-[-0.08em] text-[#161616] sm:text-7xl">
              2,500+
            </p>
            <p className="mt-5 max-w-xs text-sm leading-5 text-black/65">
              Curious people learning and sharing progress every month.
            </p>
          </article>

          <div className="flex min-h-20 items-center justify-between rounded-2xl bg-[#161616] px-7 py-5 text-white sm:px-9 lg:col-span-2">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-white/55">
              Lessons made for real life
            </span>
            <span className="text-3xl font-medium tracking-tighter sm:text-4xl">
              20+ modules
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
