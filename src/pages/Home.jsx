import { useState } from "react";
import Header from "../components/Header";
import mentorImage from "../assets/aflu_image.png";

const testimonials = [
  {
    quote:
      "Mazeline made AI feel simple. I now use it every week to plan my work and learn faster.",
    name: "Akhil Raj",
    role: "Product designer",
    initials: "AR",
    color: "bg-[#c1ff3d]",
    layout: "lg:col-span-2",
  },
  {
    quote:
      "The Malayalam explanations helped me stop watching from the sidelines and start experimenting.",
    name: "Fathima N",
    role: "Entrepreneur",
    initials: "FN",
    color: "bg-[#f0a6ff]",
    layout: "",
  },
  {
    quote:
      "I built my first useful AI workflow in one weekend. That changed how I look at my daily tasks.",
    name: "Nikhil S",
    role: "Engineering student",
    initials: "NS",
    color: "bg-[#159dcc] text-white",
    layout: "",
  },
  {
    quote:
      "Every lesson gives me something I can try immediately. It feels practical, clear, and made for real life.",
    name: "Meera Thomas",
    role: "Marketing lead",
    initials: "MT",
    color: "bg-[#ffbf8a]",
    layout: "lg:col-span-2",
  },
  {
    quote:
      "I joined to understand the basics and left with a project I am genuinely proud to share.",
    name: "Riyas K",
    role: "Freelance creator",
    initials: "RK",
    color: "bg-[#d8d8d2]",
    layout: "lg:col-span-2",
  },
];

const faqs = [
  {
    question: "What is included in the AI course?",
    answer:
      "You get Malayalam lessons, practical AI workflows, prompt examples, and a guided project that helps you apply what you learn.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes. The course starts with the basics and gradually moves into useful tools and projects, so you do not need a technical background.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "No coding experience is required. You will learn how to use AI clearly and confidently for work, study, and creative projects.",
  },
  {
    question: "Is the course taught in Malayalam?",
    answer:
      "Yes. The lessons are designed in Malayalam with familiar examples and simple explanations of important AI concepts.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Yes. The lessons are short and focused, so you can learn when it suits you and return to the material whenever you need it.",
  },
  {
    question: "What will I build by the end?",
    answer:
      "You will finish with a practical AI workflow or personal project that you can use, improve, and share.",
  },
];

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(-1);

  const showPreviousTestimonial = () => {
    setActiveTestimonial((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    );
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#f8f8f6] text-[#161616]">
      <Header />
      {/* hero-section */}
      <section className="hero-section px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="hero-badge mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm">
            <span
              aria-hidden="true"
              className="text-base leading-none text-[#ff8b86]"
            >
              ♥
            </span>
            Loved by 10,000+ people
          </div>

          <h1 className="max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[5.4rem]">
            AI course in malayalam
            <br />
            learn Artificial Intelligence
          </h1>

          <p className="mt-7 max-w-2xl text-base text-black/60 sm:text-lg">
            discover how AI can help you build, create, and grow in the future.
          </p>

          <button className="mt-5 min-h-11 rounded-full bg-[#9cff57] px-7 text-sm font-bold text-black">
            Join Now
          </button>

          <div className="hero-video-wrap mt-12 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-[#243237] shadow-[0_24px_70px_rgba(31,44,50,0.18)]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/O6tFjcdR7As?rel=0"
              title="AI course in Malayalam"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      {/* about sections */}
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
              Practical lessons, friendly support, and visible progress from
              your first prompt to your next big idea.
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
                Learners are building a steady habit with short, focused
                lessons.
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
      {/* feature */}
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
              A simple path through the tools, habits, and real projects that
              make AI useful in everyday life.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            <article className="flex min-h-80 flex-col justify-between rounded-2xl bg-[#c1ff3d] p-7 text-[#161616] sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#161616] text-sm font-bold text-white">
                  01
                </span>
                <span className="rounded-full border border-black/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                  Start here
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-medium tracking-tight">
                  Understand AI
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-black/65">
                  Learn the basics in Malayalam and see where AI fits into your
                  work, studies, and ideas.
                </p>
              </div>
            </article>

            <article className="flex min-h-80 flex-col justify-between rounded-2xl bg-[#159dcc] p-7 text-white sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#159dcc]">
                  02
                </span>
                <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                  Practice
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-medium tracking-tight">
                  Use the tools
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
                  Write better prompts, explore smart workflows, and create
                  useful results without feeling overwhelmed.
                </p>
              </div>
            </article>

            <article className="flex min-h-80 flex-col justify-between rounded-2xl bg-[#f0a6ff] p-7 text-[#161616] sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#161616] text-sm font-bold text-white">
                  03
                </span>
                <span className="rounded-full border border-black/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                  Build
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-medium tracking-tight">
                  Make it yours
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-black/65">
                  Finish with a personal project you can use, share, and keep
                  improving after the course.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl bg-white text-[#161616]">
            <div className="flex flex-col gap-3 border-b border-black/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <h3 className="text-xl font-medium tracking-tight">
                What you will learn
              </h3>
              <span className="text-sm text-black/45">Demo curriculum</span>
            </div>
            <div className="divide-y divide-black/10">
              {[
                ["01", "The AI mindset", "Know what AI can actually do"],
                [
                  "02",
                  "Prompting that works",
                  "Ask better questions, get better results",
                ],
                [
                  "03",
                  "Your first AI workflow",
                  "Turn one repeated task into a system",
                ],
                [
                  "04",
                  "Build a useful project",
                  "Put everything together and share it",
                ],
              ].map(([number, title, description]) => (
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

      {/* testimonial section */}
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
            {testimonials.map(
              ({ quote, name, role, initials, color, layout }) => (
                <article
                  key={name}
                  className={`flex min-h-72 flex-col justify-between rounded-2xl p-7 shadow-[0_12px_35px_rgba(22,22,22,0.06)] sm:p-9 ${color} ${layout}`}
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
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/75 text-xs font-bold text-[#161616]"
                    >
                      {initials}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{name}</p>
                      <p className="text-sm opacity-55">{role}</p>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>

          <div className="mt-10 lg:hidden">
            {(() => {
              const { quote, name, role, initials, color } =
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
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/75 text-xs font-bold text-[#161616]"
                    >
                      {initials}
                    </span>
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
      {/*mentor section */}
      <section
        id="mentor"
        className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        aria-labelledby="mentor-heading"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-20">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="aspect-4/5 overflow-hidden rounded-2xl bg-[#243237] shadow-[0_24px_55px_rgba(22,22,22,0.14)]">
              <img
                src={mentorImage}
                alt="Your AI course mentor"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <p
            id="mentor-heading"
            className="font-medium leading-none tracking-tight text-2xl md:text-4xl"
          >
            We make artificial intelligence easier to understand, easier to use,
            and more useful in everyday life. Learn in Malayalam through clear
            explanations, practical projects, and guidance that helps you move
            from curiosity to confidence.
          </p>
        </div>
      </section>
      {/* faq section */}
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
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-2xl font-light transition-colors ${
                        isOpen
                          ? "bg-[#161616] text-white"
                          : "bg-[#e5e5e5] text-[#161616]"
                      }`}
                    >
                      {isOpen ? "-" : "+"}
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
      {/* footer  */}
      <footer className="bg-[#161616] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16 rounded-t-[64px]">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.5fr_0.75fr_0.75fr_1fr]">
            <div className="max-w-sm">
              <a
                href="/"
                className="text-2xl font-bold tracking-tight text-white"
              >
                AI Malayalam
              </a>
              <p className="mt-5 text-base leading-7 text-white/55">
                Learn artificial intelligence in Malayalam through simple
                lessons, practical projects, and a community that keeps you
                moving forward.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c1ff3d]">
                Explore
              </p>
              <nav
                className="mt-5 flex flex-col items-start gap-3"
                aria-label="Footer navigation"
              >
                <a
                  className="text-sm text-white/65 transition-colors hover:text-white"
                  href="#about"
                >
                  About
                </a>
                <a
                  className="text-sm text-white/65 transition-colors hover:text-white"
                  href="#features"
                >
                  Course
                </a>
                <a
                  className="text-sm text-white/65 transition-colors hover:text-white"
                  href="#testimonials"
                >
                  Stories
                </a>
              </nav>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c1ff3d]">
                Learn more
              </p>
              <nav
                className="mt-5 flex flex-col items-start gap-3"
                aria-label="Footer information"
              >
                <a
                  className="text-sm text-white/65 transition-colors hover:text-white"
                  href="#mentor"
                >
                  Mentor
                </a>
                <a
                  className="text-sm text-white/65 transition-colors hover:text-white"
                  href="#faq"
                >
                  FAQ
                </a>
                <a
                  className="text-sm text-white/65 transition-colors hover:text-white"
                  href="mailto:hello@aimalayalam.com"
                >
                  Contact
                </a>
              </nav>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c1ff3d]">
                Start learning
              </p>
              <p className="mt-5 text-sm leading-6 text-white/55">
                Your first practical AI lesson is waiting.
              </p>
              <a
                href="#join"
                className="mt-5 inline-flex rounded-full bg-[#c1ff3d] px-5 py-3 text-sm font-bold text-[#161616] transition-colors hover:bg-white"
              >
                Join the course
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 AI Malayalam. All rights reserved.</p>
            <p>Learn clearly. Build confidently.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
