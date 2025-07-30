import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Autonomous Drone",
      description:
        "AI-powered surveillance drone with object detection capabilities",
      fullDescription:
        "Our autonomous drone project combines computer vision, machine learning, and advanced flight control systems. The drone can navigate autonomously, detect and track objects in real-time, and provide surveillance capabilities for security applications. Built with Python, OpenCV, and TensorFlow.",
      technologies: ["Python", "OpenCV", "TensorFlow", "ROS", "Arduino"],
      status: "Completed",
      team: "5 members",
      duration: "6 months",
    },
    {
      id: 2,
      title: "Smart Home Assistant Robot",
      description:
        "Voice-controlled home automation robot with AI capabilities",
      fullDescription:
        "An intelligent home assistant robot that can understand voice commands, control smart home devices, provide weather updates, and assist with daily tasks. Features natural language processing, computer vision for object recognition, and IoT integration.",
      technologies: [
        "Python",
        "NLP",
        "IoT",
        "Raspberry Pi",
        "Voice Recognition",
      ],
      status: "In Progress",
      team: "4 members",
      duration: "8 months",
    },
    {
      id: 3,
      title: "Medical Assistance Robot",
      description: "Healthcare robot designed to assist medical professionals",
      fullDescription:
        "A specialized robot designed for healthcare environments, capable of delivering medications, monitoring patients, and assisting medical staff. Includes contactless vital sign monitoring, autonomous navigation in hospital environments, and integration with medical databases.",
      technologies: ["C++", "ROS", "Computer Vision", "Sensors", "Database"],
      status: "Planning",
      team: "6 members",
      duration: "12 months",
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
              key={project.id}
              className={`group bg-white/10 backdrop-blur-md rounded-xl border border-gray-200/20 p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-[#9CF185]/50 ${
                index === 0 ? "-mt-7" : index === 2 ? "-mt-7" : "mt-24"
              }`}
              onClick={() => setSelectedProject(project.id)}
              style={{
                boxShadow: index === 0 ? "0 4px 43px 0 #10353F inset" : "none",
              }}
            >
              {/* Project Image/Icon */}
              <div className="bg-gradient-to-br from-[#9CF185]/20 to-[#AC0FB8]/20 h-48 rounded-lg mb-6 flex items-center justify-center group-hover:from-[#9CF185]/30 group-hover:to-[#AC0FB8]/30 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#9CF185]/30 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">
                      {index === 0 ? "🚁" : index === 1 ? "🤖" : "🏥"}
                    </span>
                  </div>
                  <p className="text-white font-poppins text-sm opacity-70">
                    Click to view details
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-poppins ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : project.status === "In Progress"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-[#9CF185] font-poppins text-xs">
                    {project.team}
                  </span>
                </div>

                <h3 className="text-white font-poppins text-xl font-bold group-hover:text-[#9CF185] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 font-poppins text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-3">
                  <span className="text-gray-400 font-poppins text-xs">
                    Duration: {project.duration}
                  </span>
                  <div className="text-[#9CF185] group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#121C37] border border-[#9CF185]/30 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-white font-poppins text-2xl font-bold">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white transition-colors text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    {/* Status and Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-gray-400 text-sm mb-1">Status</p>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-poppins ${
                            project.status === "Completed"
                              ? "bg-green-500/20 text-green-400"
                              : project.status === "In Progress"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-gray-400 text-sm mb-1">Team Size</p>
                        <p className="text-white font-semibold">
                          {project.team}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="text-[#9CF185] font-poppins text-lg font-semibold mb-3">
                        Project Overview
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-[#9CF185] font-poppins text-lg font-semibold mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-[#9CF185]/20 text-[#9CF185] px-3 py-1 rounded-full text-sm font-poppins"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="border-t border-gray-600 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Project Duration:</span>
                        <span className="text-white font-semibold">
                          {project.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
