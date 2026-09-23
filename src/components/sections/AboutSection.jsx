const AboutSection = () => {
  return (
    <section
      id="about"
      className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold lowercase tracking-[0.24em] text-black/45">
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

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/10 text-center shadow-[0_12px_35px_rgba(22,22,22,0.06)] sm:grid-cols-3 lg:grid-cols-6">
          <div className="flex flex-col items-center bg-white p-6 sm:p-7">
            <p className="flex h-12 items-center justify-center text-4xl font-medium leading-none tracking-[-0.06em] text-[#161616] sm:text-5xl">
              4.6/5
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-black/45">
              Rating
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 sm:p-7">
            <p className="flex h-12 items-center justify-center text-4xl font-medium leading-none tracking-[-0.06em] text-[#161616] sm:text-5xl">
              5,000+
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-black/45">
              Students
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 sm:p-7">
            <p className="flex h-12 items-center justify-center text-4xl font-medium leading-none tracking-[-0.06em] text-[#161616] sm:text-5xl">
              11
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-black/45">
              Modules
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 sm:p-7">
            <p className="flex h-12 items-center justify-center text-4xl font-medium leading-none tracking-[-0.06em] text-[#161616] sm:text-5xl">
              79
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-black/45">
              Lessons
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 sm:p-7">
            <p className="flex h-12 items-center justify-center text-2xl font-medium leading-none tracking-[-0.04em] text-[#161616] sm:text-3xl">
              Malayalam
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-black/55">
              Language
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 sm:p-7">
            <p className="flex h-12 items-center justify-center text-2xl font-medium leading-none tracking-[-0.04em] text-[#161616] sm:text-3xl">
              Included
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-black/45">
              Certificate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
