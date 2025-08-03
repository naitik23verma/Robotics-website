import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with more dramatic effect
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
      );

      // Animate subtitle
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power2.out" },
      );

      // Animate CTA buttons
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power2.out" },
      );

      // Floating animation for robot images
      gsap.to(".robot-float", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3,
      });

      // Continuous rotation for main robot
      gsap.to(".robot-rotate", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Scroll to events section
  const scrollToEvents = () => {
    const element = document.getElementById("events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-[#121C37] via-[#0F1B35] to-[#1A2B4A] overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Main large robot blueprint background */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ae0dd919350d695f0a5d9edf530ddff17252e16f"
          alt=""
          className="absolute -left-20 -bottom-80 w-[950px] h-[800px] opacity-60"
          style={{ transform: "rotate(0.186deg)" }}
        />

        {/* Robot blueprint on the right */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6e46b4cf75136dd5e44caaa903a48573b2a40909"
          alt=""
          className="robot-float absolute right-0 top-10 w-[499px] h-[696px] opacity-90"
          style={{ transform: "rotate(0.186deg)" }}
        />

        {/* Enhanced visible robot elements at top */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/cf4f1aced408cc9422d231e2950986152b9dd48a"
          alt=""
          className="robot-float absolute -left-[200px] -top-[100px] w-[400px] h-[300px] opacity-90"
          style={{ transform: "rotate(32.581deg)" }}
        />

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/dd60f8e45dbc5e9321c41ce8f864ba1faf662d51"
          alt=""
          className="robot-float absolute left-[200px] -top-[80px] w-[400px] h-[300px] opacity-90"
          style={{ transform: "rotate(32.581deg)" }}
        />

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d9bfd6da4f7ea802a85d85a40f9d6ae0eed9b4ed"
          alt=""
          className="robot-float absolute -left-[50px] top-[120px] w-[400px] h-[300px] opacity-80"
          style={{ transform: "rotate(32.581deg)" }}
        />

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/178a4ea556bce9319a97f9a14ac9077e9358a5da"
          alt=""
          className="robot-float absolute right-[200px] -top-[100px] w-[400px] h-[300px] opacity-90"
          style={{ transform: "rotate(32.395deg)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1
          ref={titleRef}
          className="text-white font-taviraj text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Welcome to Robotics Club – MANIT Bhopal
        </h1>

        <p
          ref={subtitleRef}
          className="text-gray-200 font-montserrat text-xl md:text-3xl font-semibold mb-12 max-w-3xl mx-auto"
        >
          Where Innovation Meets Engineering
        </p>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-[#9CF185] mb-2">500+</div>
            <div className="text-white font-poppins">Active Members</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-[#9CF185] mb-2">25+</div>
            <div className="text-white font-poppins">Events Organized</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-[#9CF185] mb-2">15+</div>
            <div className="text-white font-poppins">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
}
