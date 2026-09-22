import mentorImage from "../../assets/aflu_image.png";

const MentorSection = () => {
  return (
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
  );
};

export default MentorSection;
