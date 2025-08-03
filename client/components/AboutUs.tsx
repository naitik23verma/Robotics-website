import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "Innovation & Excellence",
      content:
        "The MANIT Robotics Club is a hub of innovation where students explore cutting-edge robotics technologies, develop groundbreaking projects, and push the boundaries of engineering excellence. Our club has been at the forefront of robotics education for over a decade.",
    },
    {
      title: "Learning & Growth",
      content:
        "We provide hands-on experience with the latest robotics tools and technologies. From Arduino programming to AI integration, our members gain practical skills that prepare them for successful careers in robotics and automation industries.",
    },
    {
      title: "Community & Impact",
      content:
        "Our club is more than just technology - we're a community of passionate innovators working together to solve real-world problems through robotics. We organize workshops, competitions, and outreach programs to inspire the next generation of engineers.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content on scroll
      gsap.fromTo(
        contentRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0F1B35] py-20 overflow-hidden"
    >
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1A2B4A]/50 to-[#0F1B35]/80"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#9CF185]/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#AC0FB8]/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full px-4 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image Section */}
          <div ref={imageRef} className="relative">
            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md h-80 rounded-2xl border border-white/20 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9CF185]/30 to-[#AC0FB8]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-[#9CF185]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <p className="font-poppins text-lg">Robotics Lab Preview</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#9CF185] rounded-full flex items-center justify-center animate-bounce">
              <span className="text-xl">⚡</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#AC0FB8] rounded-full flex items-center justify-center animate-bounce delay-500">
              <span className="text-xl">🔧</span>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div ref={contentRef} className="text-white">
            <h2 className="font-poppins text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
              <span className="bg-gradient-to-r from-[#9CF185] to-[#60BE58] bg-clip-text text-transparent">
                About Us
              </span>
            </h2>

            {/* Sliding content */}
            <div className="mb-8 min-h-[200px]">
              <h3 className="font-poppins text-2xl font-semibold mb-4 text-[#9CF185]">
                {slides[currentSlide].title}
              </h3>
              <p className="font-inter text-lg leading-relaxed text-gray-200">
                {slides[currentSlide].content}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-[#9CF185] scale-125"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:bg-[#9CF185]/20 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:bg-[#9CF185]/20 transition-colors"
                >
                  →
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() =>
                document
                  .getElementById("events")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] text-white font-poppins font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">🚀</span>
              Join Our Community
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
