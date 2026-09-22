import Header from "../components/Header";

const Home = () => {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#f8f8f6] text-[#161616]">
      <Header />

      <section className="hero-section px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          {/* <div className="hero-badge mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm">
            <span
              aria-hidden="true"
              className="text-base leading-none text-[#ff8b86]"
            >
              ♥
            </span>
            Loved by 10,000+ people
          </div> */}

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
    </main>
  );
};

export default Home;
