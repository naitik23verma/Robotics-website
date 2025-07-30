import { useState, useEffect } from "react";

export default function SponsorGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[#9CF185] font-montserrat text-3xl font-bold mb-3">
          Our Past Sponsors
        </h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
      </div>

      {/* Gallery Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full border border-gray-300 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous sponsors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full border border-gray-300 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next sponsors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Sponsors Grid */}
        <div className="overflow-hidden mx-12">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sponsors.map((slideSponsors, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {slideSponsors.map((sponsor, sponsorIndex) => (
                    <div
                      key={`${slideIndex}-${sponsorIndex}`}
                      className="bg-gray-200 border border-gray-300 rounded-lg p-4 h-20 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 group"
                    >
                      {/* Placeholder for sponsor logo */}
                      <div className="w-16 h-8 bg-gray-400 rounded flex items-center justify-center">
                        <span className="text-xs text-white font-bold">
                          {sponsor.name.substring(0, 3)}
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
