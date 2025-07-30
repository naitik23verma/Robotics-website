import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCounter from "./AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  const achievements = [
    "🥇 1st Place - National Robotics Championship 2023",
    "🏆 Best Innovation Award - IIT Delhi TechFest",
    "🌍 Participation in International RoboCup",
    "🎯 Winner - State Level Line Following Competition",
    "📰 Featured in National Technology Magazine",
  ];

  const stats = [
    { number: 25, suffix: "+", label: "Awards Won", icon: "🏆" },
    { number: 500, suffix: "+", label: "Participants Trained", icon: "👥" },
    { number: 15, suffix: "+", label: "Competitions Won", icon: "🥇" },
    { number: 100, suffix: "%", label: "Success Rate", icon: "📈" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Trigger animations when section comes into view
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => setIsVisible(true),
        once: true,
      });

      // Animate stats cards
      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Animate achievements list
      gsap.fromTo(
        achievementsRef.current?.children || [],
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0F1B35] py-20 relative overflow-hidden"
    >
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#9CF185]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#AC0FB8]/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Decorative elements */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8223e8f6095a50a237f723f12f522c16f5b10b8b"
        alt=""
        className="absolute top-10 left-80 w-[90px] h-[154px] opacity-60"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#9CF185] to-[#60BE58] bg-clip-text text-transparent font-poppins">
              Achievements & Recognition
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-[#9CF185] mb-2">
                <AnimatedCounter
                  end={stat.number}
                  duration={2}
                  suffix={stat.suffix}
                  trigger={isVisible}
                />
              </div>
              <div className="text-white font-poppins text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Achievement Images */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#9CF185]/20 to-[#AC0FB8]/20 h-60 rounded-xl border border-white/20 flex items-center justify-center group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9CF185]/30 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="text-white font-poppins text-sm">
                  Competition Moments
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#AC0FB8]/20 to-[#578FD9]/20 h-60 rounded-xl border border-white/20 flex items-center justify-center group hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#AC0FB8]/30 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <p className="text-white font-poppins text-sm">
                  Award Ceremonies
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Awards List */}
          <div>
            <h3 className="text-white font-poppins text-3xl font-bold mb-8">
              Major <span className="text-[#9CF185]">Accomplishments</span>
            </h3>

            <div ref={achievementsRef} className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 hover:bg-white/10 hover:border-[#9CF185]/30 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#9CF185]/20 rounded-full mr-4 flex items-center justify-center group-hover:bg-[#9CF185]/30 transition-colors duration-300">
                      <span className="text-lg">
                        {achievement.split(" ")[0]}
                      </span>
                    </div>
                    <span className="text-white font-poppins text-base leading-relaxed group-hover:text-[#9CF185] transition-colors duration-300">
                      {achievement.substring(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] text-white font-poppins font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">🚀</span>
                Join Our Success Story
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
