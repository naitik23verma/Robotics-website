import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create particles
      if (particlesRef.current) {
        for (let i = 0; i < 50; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle absolute w-1 h-1 bg-[#9CF185] rounded-full opacity-70';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 10 + 's';
          particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
          particlesRef.current.appendChild(particle);
        }
      }

      // Enhanced title animation
      gsap.fromTo(
        titleRef.current,
        { 
          opacity: 0, 
          y: 100, 
          scale: 0.8,
          rotationX: 45
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          rotationX: 0,
          duration: 1.5, 
          ease: "power3.out",
          onComplete: () => {
            // Add typewriter effect to specific words
            const words = titleRef.current?.querySelectorAll('.word');
            if (words) {
              gsap.fromTo(words, 
                { opacity: 0, x: -20 },
                { 
                  opacity: 1, 
                  x: 0, 
                  duration: 0.8, 
                  stagger: 0.1, 
                  ease: "power2.out" 
                }
              );
            }
          }
        }
      );

      // Sophisticated subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { 
          opacity: 0, 
          y: 50,
          filter: "blur(10px)"
        },
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          duration: 1.2, 
          delay: 0.6, 
          ease: "power2.out" 
        }
      );

      // Advanced stats animation
      gsap.fromTo(
        statsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 60, 
          scale: 0.8,
          rotationY: 180
        },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          rotationY: 0,
          duration: 1,
          delay: 1.2,
          stagger: 0.2,
          ease: "back.out(1.7)"
        }
      );

      // Complex floating animation for robot images
      gsap.to(".robot-float", {
        y: -30,
        rotation: 5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5,
      });

      // Advanced rotation for main robot
      gsap.to(".robot-rotate", {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // Parallax effect for background elements
      gsap.to(".parallax-slow", {
        y: -50,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".parallax-fast", {
        y: -100,
        x: 30,
        rotation: 10,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
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
      className="relative min-h-screen morphing-bg overflow-hidden flex items-center justify-center"
      style={{ marginTop: "73px" }}
    >
      {/* Particle System */}
      <div ref={particlesRef} className="particles absolute inset-0 pointer-events-none" />

      {/* Matrix Rain Effect */}
      <div className="matrix-rain" />

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Main large robot blueprint background */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ae0dd919350d695f0a5d9edf530ddff17252e16f"
          alt=""
          className="parallax-slow absolute -left-5 -top-48 w-[1368px] h-[1368px] opacity-20 robot-rotate"
          style={{ transform: "rotate(0.186deg)" }}
        />

        {/* Robot blueprint on the right */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6e46b4cf75136dd5e44caaa903a48573b2a40909"
          alt=""
          className="robot-float parallax-fast absolute right-0 top-10 w-[499px] h-[696px] opacity-30 glow-advanced"
          style={{ transform: "rotate(0.186deg)" }}
        />

        {/* Smaller decorative robot elements */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/cf4f1aced408cc9422d231e2950986152b9dd48a"
          alt=""
          className="robot-float parallax-slow absolute -left-[200px] top-10 w-[400px] h-[300px] opacity-20 circuit-animation"
          style={{ transform: "rotate(32.581deg)" }}
        />

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/dd60f8e45dbc5e9321c41ce8f864ba1faf662d51"
          alt=""
          className="robot-float parallax-fast absolute left-10 top-20 w-[400px] h-[300px] opacity-15"
          style={{ transform: "rotate(32.581deg)" }}
        />

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d9bfd6da4f7ea802a85d85a40f9d6ae0eed9b4ed"
          alt=""
          className="robot-float parallax-slow absolute -left-10 bottom-32 w-[400px] h-[300px] opacity-15"
          style={{ transform: "rotate(32.581deg)" }}
        />

        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/178a4ea556bce9319a97f9a14ac9077e9358a5da"
          alt=""
          className="robot-float parallax-fast absolute right-[100px] top-20 w-[400px] h-[300px] opacity-15 pulse-advanced"
          style={{ transform: "rotate(32.395deg)" }}
        />
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1
          ref={titleRef}
          className="text-white font-orbitron text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8 gradient-text-animated perspective-1000"
        >
          <span className="word inline-block">Welcome</span>{" "}
          <span className="word inline-block">to</span>{" "}
          <span className="word inline-block neon-text">Robotics</span>{" "}
          <span className="word inline-block">Club</span>{" "}
          <span className="word inline-block">–</span>{" "}
          <span className="word inline-block text-[#9CF185]">MANIT</span>{" "}
          <span className="word inline-block">Bhopal</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-gray-200 font-space text-xl md:text-3xl lg:text-4xl font-semibold mb-12 max-w-4xl mx-auto glass-morphism p-4 rounded-2xl backdrop-blur-xl"
        >
          <span className="gradient-text-animated">Where Innovation Meets Engineering</span>
        </p>

        {/* Enhanced Floating Stats */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="glass-morphism rounded-4xl border border-white/30 p-8 magnetic-hover ultra-smooth group">
            <div className="text-5xl font-bold gradient-text-animated mb-3 font-orbitron">500+</div>
            <div className="text-white font-space text-lg group-hover:text-[#9CF185] transition-colors duration-300">Active Members</div>
            <div className="w-full h-1 bg-gradient-to-r from-[#9CF185] to-[#60BE58] rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          
          <div className="glass-morphism rounded-4xl border border-white/30 p-8 magnetic-hover ultra-smooth group glow-advanced">
            <div className="text-5xl font-bold gradient-text-animated mb-3 font-orbitron">25+</div>
            <div className="text-white font-space text-lg group-hover:text-[#9CF185] transition-colors duration-300">Events Organized</div>
            <div className="w-full h-1 bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          
          <div className="glass-morphism rounded-4xl border border-white/30 p-8 magnetic-hover ultra-smooth group float-complex">
            <div className="text-5xl font-bold gradient-text-animated mb-3 font-orbitron">15+</div>
            <div className="text-white font-space text-lg group-hover:text-[#9CF185] transition-colors duration-300">Awards Won</div>
            <div className="w-full h-1 bg-gradient-to-r from-[#578FD9] to-[#9CF185] rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToEvents}
              className="group relative overflow-hidden bg-gradient-to-r from-[#9CF185] to-[#60BE58] text-[#0F1B35] font-space font-bold text-lg px-10 py-4 rounded-2xl hover:shadow-glow-xl transition-all duration-500 transform hover:scale-105 glow-advanced"
            >
              <span className="relative z-10">Explore Our Universe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#60BE58] to-[#9CF185] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden border-2 border-[#9CF185] text-[#9CF185] font-space font-bold text-lg px-10 py-4 rounded-2xl hover:bg-[#9CF185] hover:text-[#0F1B35] transition-all duration-500 transform hover:scale-105 glass-morphism"
            >
              <span className="relative z-10">Discover Innovation</span>
              <div className="absolute inset-0 bg-[#9CF185] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 font-jetbrains text-sm tracking-wider animate-pulse">
              // Initializing the future of technology...
            </p>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9CF185]/10 rounded-full filter blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#AC0FB8]/10 rounded-full filter blur-3xl animate-glow-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#578FD9]/5 rounded-full filter blur-3xl animate-glow-pulse animation-delay-2000"></div>
    </section>
  );
}
