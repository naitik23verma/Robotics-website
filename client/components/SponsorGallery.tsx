import { useState, useEffect } from "react";

export default function SponsorGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Sample sponsor data - you can replace with actual sponsor logos
  const sponsors = [
    // Slide 1
    [
      { name: "Tech Corp", logo: "/sponsor1.png" },
      { name: "Innovation Labs", logo: "/sponsor2.png" },
      { name: "Future Systems", logo: "/sponsor3.png" },
      { name: "Digital Solutions", logo: "/sponsor4.png" },
      { name: "Robo Tech", logo: "/sponsor5.png" },
      { name: "AI Dynamics", logo: "/sponsor6.png" },
    ],
    // Slide 2
    [
      { name: "Smart Industries", logo: "/sponsor7.png" },
      { name: "Automation Plus", logo: "/sponsor8.png" },
      { name: "Cyber Systems", logo: "/sponsor9.png" },
      { name: "Next Gen Tech", logo: "/sponsor10.png" },
      { name: "Quantum Labs", logo: "/sponsor11.png" },
      { name: "Nano Tech", logo: "/sponsor12.png" },
    ],
    // Slide 3
    [
      { name: "Mega Corp", logo: "/sponsor13.png" },
      { name: "Elite Systems", logo: "/sponsor14.png" },
      { name: "Advanced Tech", logo: "/sponsor15.png" },
      { name: "Prime Solutions", logo: "/sponsor16.png" },
      { name: "Ultra Dynamics", logo: "/sponsor17.png" },
      { name: "Pro Tech", logo: "/sponsor18.png" },
    ],
  ];

  const totalSlides = sponsors.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Enhanced auto-slide functionality with pause on hover
  useEffect(() => {
    if (isHovered) return; // Don't auto-slide when hovered

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="w-full">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#9CF185] to-[#60BE58] bg-clip-text text-transparent font-montserrat">
            Our Past Sponsors
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] mx-auto rounded-full mb-4"></div>
        <p className="text-gray-300 font-poppins text-lg max-w-2xl mx-auto">
          Proud to be supported by leading technology companies and organizations
        </p>
      </div>

      {/* Enhanced Gallery Container */}
      <div
        className="relative max-w-6xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl flex items-center justify-center hover:bg-[#9CF185]/20 hover:border-[#9CF185]/40 transition-all duration-300 group"
          aria-label="Previous sponsors"
        >
          <svg className="w-6 h-6 text-white group-hover:text-[#9CF185] transition-colors" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl flex items-center justify-center hover:bg-[#9CF185]/20 hover:border-[#9CF185]/40 transition-all duration-300 group"
          aria-label="Next sponsors"
        >
          <svg className="w-6 h-6 text-white group-hover:text-[#9CF185] transition-colors" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Enhanced Sponsors Grid */}
        <div className="overflow-hidden mx-12">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sponsors.map((slideSponsors, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {slideSponsors.map((sponsor, sponsorIndex) => (
                    <div
                      key={`${slideIndex}-${sponsorIndex}`}
                      className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 h-24 flex items-center justify-center hover:bg-white/15 hover:border-[#9CF185]/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      {/* Enhanced placeholder for sponsor logo */}
                      <div className="w-full h-full bg-gradient-to-br from-[#9CF185]/20 to-[#AC0FB8]/20 rounded-lg flex items-center justify-center group-hover:from-[#9CF185]/30 group-hover:to-[#AC0FB8]/30 transition-all duration-300">
                        <span className="text-sm text-white font-bold group-hover:text-[#9CF185] transition-colors">
                          {sponsor.name.substring(0, 4)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {sponsors.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#9CF185] ring-2 ring-[#9CF185]/30"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-gray-400 font-poppins text-sm">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>
      </div>
    </div>
  );
}
