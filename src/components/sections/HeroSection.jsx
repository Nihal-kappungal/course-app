import { useEffect, useState } from "react";
import { testimonials } from "../../data/homeData";

const OFFER_DURATION = 2 * 24 * 60 * 60;

const HeroSection = () => {
  const [secondsLeft, setSecondsLeft] = useState(OFFER_DURATION);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((currentSeconds) => Math.max(currentSeconds - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const days = Math.floor(secondsLeft / 86400);
  const hours = Math.floor((secondsLeft % 86400) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <section className="hero-section px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pt-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-left">
          <div
            className="flex items-center"
            aria-label="Students from our community"
          >
            {testimonials.map((testimonial, index) => (
              <img
                key={testimonial.name}
                src={testimonial.image}
                alt=""
                className={`h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm sm:h-11 sm:w-11 ${
                  index > 0 ? "-ml-2" : ""
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <strong className="text-sm font-bold leading-none sm:text-base">
              +5,000 students worldwide
            </strong>
            <div className="flex items-center gap-2 text-xs text-black/60 sm:text-sm">
              <span className="font-medium">Excellent</span>
              <span
                className="tracking-[0.12em] text-lg leading-none text-[#f7bd24]"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </span>
              <span>4.6 / 5</span>
            </div>
          </div>
        </div>

        <h1 className="max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-[5.4rem]">
          AI course in malayalam
          <br />
          learn Artificial Intelligence
        </h1>

        <p className="mt-7 max-w-2xl text-base text-black/60 sm:text-lg">
          discover how AI can help you build, create, and grow in the future.
        </p>

        <button
          type="button"
          className="mt-7 flex min-h-16 items-center gap-5 rounded-full bg-[#9cff57] px-6 py-3 text-left text-black shadow-[0_18px_45px_rgba(114,170,43,0.2)] transition-transform hover:-translate-y-0.5 sm:gap-7 sm:px-8"
          aria-label={`Limited-time offer: course price 1,999 rupees. ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining`}
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/60">
              Limited-time offer
            </p>
            <p className="mt-0.5 text-2xl font-bold tracking-tight">₹1,999</p>
          </div>
          <div className="h-9 w-px bg-black/20" />
          <div className="pr-1">
            <p className="text-[10px] uppercase tracking-[0.14em] text-black/55">
              Offer ends in
            </p>
            <p
              className="mt-0.5 text-base font-bold tabular-nums sm:text-lg"
              aria-label={`${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining`}
            >
              {String(days).padStart(2, "0")}:{String(hours).padStart(2, "0")}:
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </p>
          </div>
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
  );
};

export default HeroSection;
