import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121C37] border-b border-gray-300 border-opacity-20">
      <div className="max-w-7xl mx-auto px-16">
        <div className="flex items-center justify-between h-[73px]">
          {/* Logo and brand name */}
          <div className="flex items-center space-x-6">
            <div className="w-14 h-10 bg-gray-400 rounded"></div>
            <span className="text-white font-poppins text-xl font-bold">
              Robotics Club MANIT
            </span>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white font-poppins text-base font-medium hover:text-robotics-green transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/robomax" 
              className="text-white font-poppins text-base font-medium hover:text-robotics-green transition-colors"
            >
              RoboMAX
            </Link>
            <Link 
              to="/team" 
              className="text-white font-poppins text-base font-medium hover:text-robotics-green transition-colors"
            >
              Our Team
            </Link>
            <Link 
              to="/events" 
              className="text-white font-poppins text-base font-medium hover:text-robotics-green transition-colors"
            >
              Past Events
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
