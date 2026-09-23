const TestimonialsSection = ({
  testimonials,
  activeTestimonial,
  showPreviousTestimonial,
  showNextTestimonial,
}) => {
  return (
    <section
      id="testimonials"
      className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      aria-labelledby="testimonial-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/45">
            Learner stories
          </p>
          <h2
            id="testimonial-heading"
            className="mt-4 text-4xl font-medium leading-[0.98] tracking-tighter sm:text-6xl"
          >
            Real progress from people learning in their own way.
          </h2>
        </div>

        <div className="mt-14 hidden gap-4 lg:grid lg:grid-cols-4 lg:grid-rows-2">
          {testimonials.map(({ quote, name, role, image, layout }) => (
            <article
              key={name}
              className={`flex min-h-72 flex-col justify-between rounded-2xl p-7 shadow-[0_12px_35px_rgba(22,22,22,0.06)] sm:p-9 bg-white ${layout}`}
            >
              <div>
                <span className="text-4xl font-medium leading-none opacity-45">
                  “
                </span>
                <p className="mt-4 max-w-xl text-lg font-medium leading-7 tracking-tight">
                  {quote}
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <img
                  src={image}
                  alt={name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold">{name}</p>
                  <p className="text-sm opacity-55">{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          {(() => {
            const { quote, name, role, image, color } =
              testimonials[activeTestimonial];

            return (
              <article
                className={`flex min-h-80 flex-col justify-between rounded-2xl p-7 shadow-[0_12px_35px_rgba(22,22,22,0.06)] sm:p-9 ${color}`}
              >
                <div>
                  <span className="text-4xl font-medium leading-none opacity-45">
                    “
                  </span>
                  <p className="mt-4 text-lg font-medium leading-7 tracking-tight">
                    {quote}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-3">
                  <img
                    src={image}
                    alt={name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold">{name}</p>
                    <p className="text-sm opacity-55">{role}</p>
                  </div>
                </div>
              </article>
            );
          })()}

          <div className="mt-5 flex items-center justify-between">
            <p className="text-sm font-medium text-black/50">
              {activeTestimonial + 1} / {testimonials.length}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={showPreviousTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-xl transition-colors hover:bg-black hover:text-white"
                aria-label="Show previous testimonial"
              >
                <span aria-hidden="true">&larr;</span>
              </button>
              <button
                type="button"
                onClick={showNextTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#161616] text-xl text-white transition-colors hover:bg-[#159dcc]"
                aria-label="Show next testimonial"
              >
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
