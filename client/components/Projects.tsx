export default function Projects() {
  const projects = [
    {
      title: "Autonomous Drone",
      description:
        "AI-powered surveillance drone with object detection capabilities",
    },
    {
      title: "Smart Robot",
      description:
        "AI-powered surveillance drone with object detection capabilities",
    },
    {
      title: "Line Following Bot",
      description:
        "AI-powered surveillance drone with object detection capabilities",
    },
  ];

  return (
    <section className="bg-[#0F1B35] py-16 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute right-0 top-0 w-52 h-[426px] bg-[#4A9244] opacity-53 blur-[100px] rounded-full"></div>

      <div className="absolute left-84 bottom-20 w-[594px] h-36 bg-gradient-radial from-[#9CF185] to-[#5A8B4D] opacity-35 blur-[100px] rounded-full"></div>

      {/* Decorative robot image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/494adaa18d29a7b38394519ef3afb10ede2ddaa0"
        alt=""
        className="absolute -left-24 -top-10 w-[1325px] h-[735px] opacity-60"
      />

      {/* Decorative robot icon */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/be3d56e4868fe021516169bdb957e5c9be275127"
        alt=""
        className="absolute top-0 left-96 w-[89px] h-[151px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-20">
        <h2 className="text-[#9CF185] font-poppins text-3xl font-bold text-center mb-16">
          Projects by Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-lg border border-gray-200 p-6 ${
                index === 0 ? "-mt-7" : index === 2 ? "-mt-7" : "mt-24"
              }`}
              style={{
                boxShadow: index === 0 ? "0 4px 43px 0 #10353F inset" : "none",
              }}
            >
              <div className="bg-gray-300 h-48 rounded mb-6"></div>

              <h3 className="text-white font-poppins text-base font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-white font-poppins text-base">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
