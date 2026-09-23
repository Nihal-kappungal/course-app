import { Minus, Plus } from "lucide-react";

const FaqSection = ({ faqs, activeFaq, setActiveFaq }) => {
  return (
    <section
      id="faq"
      className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-black/45">
            Frequently asked
          </p>
          <h2
            id="faq-heading"
            className="mt-4 text-4xl font-medium leading-[0.98] tracking-tighter sm:text-6xl"
          >
            Everything you need to know before you begin.
          </h2>
          <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
            Clear answers about the lessons, language, pace, and practical
            projects inside the course.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl space-y-2">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = activeFaq === index;

            return (
              <div
                key={question}
                className={`overflow-hidden rounded-2xl transition-colors ${
                  isOpen
                    ? "bg-white shadow-[0_12px_35px_rgba(22,22,22,0.06)]"
                    : "bg-white/70"
                }`}
              >
                <button
                  type="button"
                  className="flex min-h-24 w-full items-center justify-between gap-6 px-7 py-6 text-left sm:px-8"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setActiveFaq(isOpen ? -1 : index)}
                >
                  <span className="text-lg font-medium tracking-tight sm:text-xl">
                    {question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-[#161616] text-white"
                        : "bg-[#e5e5e5] text-[#161616]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={18} strokeWidth={1.75} />
                    ) : (
                      <Plus size={18} strokeWidth={1.75} />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p
                    id={`faq-answer-${index}`}
                    className="max-w-3xl px-7 pb-7 text-base leading-7 text-black/60 sm:px-8"
                  >
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
