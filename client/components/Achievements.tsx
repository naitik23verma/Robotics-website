export default function Achievements() {
  const achievements = [
    "1st Place - National Robotics Championship 2023",
    "Best Innovation Award - IIT Delhi TechFest",
    "Participation in International RoboCup",
    "Winner - State Level Line Following Competition",
    "Featured in National Technology Magazine",
  ];

  return (
    <section className="bg-[#0F1B35] py-16 relative">
      {/* Decorative robot icon */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8223e8f6095a50a237f723f12f522c16f5b10b8b"
        alt=""
        className="absolute top-0 left-80 w-[90px] h-[154px]"
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <h2 className="text-[#9CF185] font-poppins text-3xl font-bold text-center mb-16">
          Participation & Achievements
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Achievement images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-300 h-60 rounded-lg"></div>
            <div className="bg-gray-300 h-60 rounded-lg"></div>
          </div>

          {/* Awards list */}
          <div>
            <h3 className="text-white font-poppins text-2xl font-bold mb-8">
              Awards & Recognition
            </h3>

            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 mr-5 flex-shrink-0"></div>
                  <span className="text-white font-poppins text-base leading-relaxed">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
