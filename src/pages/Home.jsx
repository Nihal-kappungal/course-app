import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import MentorSection from "../components/sections/MentorSection";
import FaqSection from "../components/sections/FaqSection";
import FooterSection from "../components/sections/FooterSection";
import { testimonials, faqs } from "../data/homeData";

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
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        showPreviousTestimonial={showPreviousTestimonial}
        showNextTestimonial={showNextTestimonial}
      />
      <MentorSection />
      <FaqSection
        faqs={faqs}
        activeFaq={activeFaq}
        setActiveFaq={setActiveFaq}
      />
      <FooterSection />
    </main>
  );
};

export default Home;
