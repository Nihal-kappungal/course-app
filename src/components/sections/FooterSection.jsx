import logo from "../../assets/logo.avif";

const FooterSection = () => {
  return (
    <footer className="bg-[#161616] px-5 py-12 text-white sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.5fr_0.75fr_0.75fr_1fr]">
          <div className="max-w-sm">
            <a
              href="/"
              className="inline-flex items-center"
              aria-label="AI Malayalam home"
            >
              <img
                src={logo}
                alt="AI Malayalam logo"
                className="h-12 w-auto rounded-full object-cover"
              />
              Edvube
            </a>
            <p className="mt-5 text-base leading-7 text-white/55">
              Learn artificial intelligence in Malayalam through simple lessons,
              practical projects, and a community that keeps you moving forward.
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
          <p>© 2026 edvube. All rights reserved.</p>
          <p>Learn clearly. Build confidently.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
