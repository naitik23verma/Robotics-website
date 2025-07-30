import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Expanded Actions */}
      {isExpanded && (
        <div className="flex flex-col space-y-3 animate-in slide-in-from-bottom duration-300">
          {/* Contact Button */}
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group bg-[#9CF185] text-[#0F1B35] p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center"
          >
            <span className="text-xl mr-0 group-hover:mr-3 transition-all duration-300">
              📧
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium">
              Contact Us
            </span>
          </button>

          {/* Events Button */}
          <button
            onClick={() =>
              document
                .getElementById("events")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group bg-[#60BE58] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center"
          >
            <span className="text-xl mr-0 group-hover:mr-3 transition-all duration-300">
              🎯
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium">
              Join Events
            </span>
          </button>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group bg-gray-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center"
          >
            <span className="text-xl mr-0 group-hover:mr-3 transition-all duration-300">
              ↑
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium">
              Back to Top
            </span>
          </button>
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-gradient-to-r from-[#9CF185] to-[#60BE58] text-[#0F1B35] p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 ${
          isExpanded ? "rotate-45" : "rotate-0"
        }`}
      >
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  );
}
