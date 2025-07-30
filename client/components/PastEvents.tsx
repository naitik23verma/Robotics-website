export default function PastEvents() {
  const events = [
    {
      title: "RoboMAX 2023",
      description: "Annual robotics competition with 200+ participants",
    },
    {
      title: "RoboMAX 2022",
      description: "Annual robotics competition with 200+ participants",
    },
    {
      title: "RoboMAX 2021",
      description: "Annual robotics competition with 200+ participants",
    },
  ];

  return (
    <section className="bg-[#0F1B35] py-16 relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute left-14 top-72 w-[980px] h-64 bg-[#8AD67B] opacity-39 blur-[50px]"></div>

      {/* Decorative robot image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/dc954d80bb382046a768c17e994fc2185e53642a"
        alt=""
        className="absolute right-0 bottom-0 w-[612px] h-[408px] opacity-40"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-20">
        <h2 className="text-[#9CF185] font-poppins text-3xl font-bold text-center mb-16">
          Past Events & Competitions
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-900/10 via-teal-900/10 to-green-900/10 backdrop-blur-md rounded-lg border border-gray-200 p-6"
            >
              <div className="bg-gray-300 h-40 rounded mb-6"></div>

              <h3 className="text-white font-poppins text-base font-bold mb-2">
                {event.title}
              </h3>

              <p className="text-white font-poppins text-sm">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics card */}
        <div className="flex justify-end">
          <div className="bg-white rounded-lg p-6 w-80">
            <h3 className="text-gray-800 font-poppins text-lg font-bold mb-4">
              Club Statistics
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-poppins">
                  Total Participants
                </span>
                <span className="text-gray-800 font-poppins font-bold">
                  500+
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-poppins">
                  Events Organized
                </span>
                <span className="text-gray-800 font-poppins font-bold">
                  25+
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-poppins">Prizes Won</span>
                <span className="text-gray-800 font-poppins font-bold">
                  15+
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-poppins">
                  Active Members
                </span>
                <span className="text-gray-800 font-poppins font-bold">
                  80+
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white rounded-lg p-6">
            <div className="w-12 h-12 bg-gray-400 rounded-full mb-4"></div>

            <p className="text-gray-600 font-poppins text-base mb-4">
              "The robotics club helped me develop practical skills that I use
              in my career today. Amazing experience!"
            </p>

            <p className="text-gray-800 font-poppins text-base font-medium">
              - Rahul Sharma, Alumni
            </p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="w-12 h-12 bg-gray-400 rounded-full mb-4"></div>

            <p className="text-gray-600 font-poppins text-base mb-4">
              "Best platform to learn robotics and automation. The mentorship is
              excellent."
            </p>

            <p className="text-gray-800 font-poppins text-base font-medium">
              - Priya Singh, Student
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
