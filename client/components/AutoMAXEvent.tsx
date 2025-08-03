import { useState } from "react";

export default function AutoMAXEvent() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = () => {
    setIsRegistering(true);

    // Simulate registration process
    setTimeout(() => {
      setIsRegistering(false);
      setRegistrationSuccess(true);

      // Reset success message after 3 seconds
      setTimeout(() => {
        setRegistrationSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <section
      id="events"
      className="bg-[#0F1B35] py-20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#9CF185] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#AC0FB8] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full px-4 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white font-poppins text-4xl md:text-5xl font-bold mb-4">
            Upcoming Event:{" "}
            <span className="bg-gradient-to-r from-[#9CF185] to-[#60BE58] bg-clip-text text-transparent">
              AutoMAX
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Event details */}
          <div className="bg-black bg-opacity-10 backdrop-blur-md rounded-lg border border-gray-200 border-opacity-80 p-8">
            <div className="mb-6">
              <span className="inline-block bg-[#60BE58] text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                New Sponsor Presents
              </span>
            </div>

            <h3 className="text-white font-poppins text-2xl font-bold mb-4">
              Annual Robotics Competition
            </h3>

            <p className="text-white font-poppins text-base mb-8 leading-relaxed">
              Join us for the biggest robotics competition in Central India.
              <br />
              Showcase your skills, compete with the best teams, and win
              <br />
              exciting prizes.
            </p>

            <button
              onClick={handleRegistration}
              disabled={isRegistering || registrationSuccess}
              className={`group bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] text-white font-poppins font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed ${
                isRegistering ? "animate-pulse" : ""
              }`}
            >
              {isRegistering ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Registering...
                </div>
              ) : registrationSuccess ? (
                <div className="flex items-center">
                  <span className="mr-2">✅</span>
                  Registration Successful!
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="mr-2">🎯</span>
                  Register Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              )}
            </button>

            {/* Sponsor logos */}
            <div className="mt-12">
              <p className="text-white font-poppins text-sm text-center mb-6 bg-gray-800 inline-block px-4 py-2 rounded-full">
                Event sponsors & partners
              </p>

              <div className="grid grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-34 h-25 bg-[#1E293F] border-4 border-[#0A485F] rounded"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-gray-300 h-80 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
