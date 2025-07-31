import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Track mouse position for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      // Determine active section
      const sections = [
        "home",
        "about",
        "events",
        "achievements",
        "projects",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-morphism shadow-glow-md border-b border-[#9CF185]/30 backdrop-blur-xl"
          : "bg-[#121C37]/80 border-b border-gray-300/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between h-[73px]">
          {/* Enhanced Logo and brand name */}
          <div
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative w-12 h-12 bg-gradient-to-br from-[#9CF185] to-[#60BE58] rounded-xl flex items-center justify-center magnetic-hover ultra-smooth overflow-hidden">
              <span className="text-[#0F1B35] font-orbitron font-bold text-lg relative z-10">RC</span>
              <div className="absolute inset-0 bg-gradient-to-br from-[#60BE58] to-[#9CF185] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 animate-glow-pulse bg-[#9CF185]/20 rounded-xl"></div>
            </div>
            <div className="relative overflow-hidden">
              <span className="text-white font-space text-lg lg:text-xl font-bold group-hover:text-transparent bg-gradient-to-r from-[#9CF185] to-[#60BE58] bg-clip-text transition-all duration-500">
                Robotics Club MANIT
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9CF185] to-[#60BE58] group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Enhanced Navigation links */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "events", label: "Events" },
              { id: "achievements", label: "Achievements" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-base font-medium font-space transition-all duration-300 rounded-xl group overflow-hidden ${
                  activeSection === item.id
                    ? "text-[#9CF185] bg-[#9CF185]/10"
                    : "text-white hover:text-[#9CF185]"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#9CF185]/20 to-[#60BE58]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#9CF185] to-[#60BE58] rounded-full"></div>
                    <div className="absolute inset-0 animate-glow-pulse bg-[#9CF185]/5 rounded-xl"></div>
                  </>
                )}
                
                {/* Magnetic glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9CF185]/10 to-[#60BE58]/10 filter blur-md rounded-xl"></div>
                </div>
              </button>
            ))}
            
            {/* Enhanced Prize button */}
            <Link
              to="/prizes"
              className="relative ml-4 text-base font-medium font-space transition-all duration-500 hover:scale-105 bg-gradient-to-r from-[#9CF185] to-[#60BE58] text-[#0F1B35] px-6 py-3 rounded-2xl hover:shadow-glow-lg group overflow-hidden magnetic-hover"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span className="text-xl animate-bounce">🏆</span>
                <span className="font-bold">Prizes</span>
              </span>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#60BE58] to-[#9CF185] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button className="relative text-white p-3 hover:text-[#9CF185] transition-all duration-300 rounded-xl group magnetic-hover">
              <svg
                className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              
              {/* Glow effect for mobile button */}
              <div className="absolute inset-0 bg-[#9CF185]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow-pulse"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Ambient line effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9CF185]/50 to-transparent"></div>
    </nav>
  );
}
