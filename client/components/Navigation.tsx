import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121C37]/95 backdrop-blur-md shadow-lg border-b border-[#9CF185]/20"
          : "bg-[#121C37] border-b border-gray-300/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between h-[73px]">
          {/* Logo and brand name */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#9CF185] to-[#60BE58] rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <span className="text-[#0F1B35] font-bold text-lg">RC</span>
            </div>
            <span className="text-white font-poppins text-lg lg:text-xl font-bold hover:text-[#9CF185] transition-colors">
              Robotics Club MANIT
            </span>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-base font-medium font-poppins transition-all duration-200 hover:text-[#9CF185] ${
                activeSection === "home"
                  ? "text-[#9CF185] border-b-2 border-[#9CF185]"
                  : "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-base font-medium font-poppins transition-all duration-200 hover:text-[#9CF185] ${
                activeSection === "about"
                  ? "text-[#9CF185] border-b-2 border-[#9CF185]"
                  : "text-white"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className={`text-base font-medium font-poppins transition-all duration-200 hover:text-[#9CF185] ${
                activeSection === "events"
                  ? "text-[#9CF185] border-b-2 border-[#9CF185]"
                  : "text-white"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("achievements")}
              className={`text-base font-medium font-poppins transition-all duration-200 hover:text-[#9CF185] ${
                activeSection === "achievements"
                  ? "text-[#9CF185] border-b-2 border-[#9CF185]"
                  : "text-white"
              }`}
            >
              Achievements
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-base font-medium font-poppins transition-all duration-200 hover:text-[#9CF185] ${
                activeSection === "projects"
                  ? "text-[#9CF185] border-b-2 border-[#9CF185]"
                  : "text-white"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-base font-medium font-poppins transition-all duration-200 hover:text-[#9CF185] ${
                activeSection === "contact"
                  ? "text-[#9CF185] border-b-2 border-[#9CF185]"
                  : "text-white"
              }`}
            >
              Contact
            </button>
            <Link
              to="/prizes"
              className="text-base font-medium font-poppins transition-all duration-200 hover:scale-105 bg-gradient-to-r from-[#9CF185] to-[#60BE58] text-[#0F1B35] px-4 py-2 rounded-full hover:shadow-lg hover:shadow-[#9CF185]/25"
            >
              🏆 Prizes
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white p-2 hover:text-[#9CF185] transition-colors">
              <svg
                className="w-6 h-6"
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
