import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SponsorGallery from "./SponsorGallery";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer",
      company: "Google",
      image: "👨‍💻",
      quote: "The Robotics Club at MANIT was the foundation of my career. The hands-on experience with cutting-edge technology and the collaborative environment taught me problem-solving skills that I use every day at Google.",
      rating: 5,
      year: "Class of 2021",
      category: "Alumni"
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "Team Lead",
      company: "Current Student",
      image: "👩‍🔬",
      quote: "Being part of this club has been transformational. From building my first robot to leading teams in national competitions, every moment has been a learning experience.",
      rating: 5,
      year: "Final Year",
      category: "Current Student"
    },
    {
      id: 3,
      name: "Dr. Arjun Patel",
      role: "Robotics Engineer",
      company: "ISRO",
      image: "🚀",
      quote: "The technical foundation I gained at MANIT's Robotics Club directly contributed to my work at ISRO. The club's emphasis on innovation prepared me for real-world challenges.",
      rating: 5,
      year: "Class of 2019",
      category: "Alumni"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "AI Research Scientist",
      company: "Microsoft",
      image: "🤖",
      quote: "The interdisciplinary approach of the club, combining robotics with AI and machine learning, gave me a unique perspective that's invaluable in my current research.",
      rating: 5,
      year: "Class of 2020",
      category: "Alumni"
    },
    {
      id: 5,
      name: "Amit Kumar",
      role: "Mechanical Engineer",
      company: "Tesla",
      image: "⚡",
      quote: "Working on autonomous vehicle projects in the club directly led to my career in automotive innovation. The practical experience was unmatched.",
      rating: 5,
      year: "Class of 2022",
      category: "Alumni"
    },
    {
      id: 6,
      name: "Riya Mehta",
      role: "IoT Developer",
      company: "Amazon",
      image: "🌐",
      quote: "The club taught me to think beyond textbooks. Building real IoT solutions and competing nationally boosted my confidence and technical skills tremendously.",
      rating: 5,
      year: "Class of 2021",
      category: "Alumni"
    },
    {
      id: 7,
      name: "Vikash Yadav",
      role: "Project Coordinator",
      company: "Current Student",
      image: "🎯",
      quote: "Coordinating club projects has enhanced my leadership and technical management skills. The mentorship from seniors is exceptional.",
      rating: 5,
      year: "Third Year",
      category: "Current Student"
    },
    {
      id: 8,
      name: "Prof. Deepak Singh",
      role: "Faculty Advisor",
      company: "MANIT",
      image: "👨‍🏫",
      quote: "It's amazing to see students evolve from curious beginners to confident engineers. The club provides the perfect platform for practical learning.",
      rating: 5,
      year: "Faculty",
      category: "Faculty"
    },
    {
      id: 9,
      name: "Anjali Sharma",
      role: "Embedded Systems Engineer",
      company: "Bosch",
      image: "🔧",
      quote: "From microcontroller programming to system design, everything I learned in the club is what I use daily in my job at Bosch.",
      rating: 5,
      year: "Class of 2020",
      category: "Alumni"
    },
    {
      id: 10,
      name: "Karan Joshi",
      role: "Startup Founder",
      company: "TechBot Solutions",
      image: "💡",
      quote: "The entrepreneurial spirit and innovation mindset I developed in the club helped me start my own robotics company after graduation.",
      rating: 5,
      year: "Class of 2019",
      category: "Alumni"
    },
    {
      id: 11,
      name: "Neha Patel",
      role: "Research Assistant",
      company: "Current Student",
      image: "🔬",
      quote: "Working on cutting-edge research projects with club members has opened doors to national conferences and publications.",
      rating: 5,
      year: "Second Year",
      category: "Current Student"
    },
    {
      id: 12,
      name: "Rohit Agarwal",
      role: "Controls Engineer",
      company: "SpaceX",
      image: "🛰️",
      quote: "The control systems and automation projects in the club gave me the foundation to work on rocket guidance systems at SpaceX.",
      rating: 5,
      year: "Class of 2021",
      category: "Alumni"
    }
  ];

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo(cardsRef.current?.children || [],
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-500'}`}>
        ⭐
      </span>
    ));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Alumni':
        return 'from-[#9CF185] to-[#60BE58]';
      case 'Current Student':
        return 'from-[#578FD9] to-[#AC0FB8]';
      case 'Faculty':
        return 'from-[#AC0FB8] to-[#578FD9]';
      default:
        return 'from-[#9CF185] to-[#60BE58]';
    }
  };

  return (
    <section ref={sectionRef} className="bg-[#0F1A35] py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#9CF185]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#AC0FB8]/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#578FD9]/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Decorative elements */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/80a18452a4ecf699b1d02202b37519eb50ebe39f"
        alt=""
        className="absolute -left-20 -top-7 w-[277px] h-[156px] opacity-30"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-20">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#9CF185] to-[#60BE58] bg-clip-text text-transparent font-montserrat">
              What People Say
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 font-poppins text-lg max-w-2xl mx-auto">
            Hear from our amazing community of students, alumni, faculty, and professionals who've been part of our robotics journey
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-[#9CF185] mb-2">500+</div>
            <div className="text-gray-300 text-sm">Happy Members</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-[#578FD9] mb-2">50+</div>
            <div className="text-gray-300 text-sm">Successful Projects</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-[#AC0FB8] mb-2">25+</div>
            <div className="text-gray-300 text-sm">Awards Won</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-[#9CF185] mb-2">4.9/5</div>
            <div className="text-gray-300 text-sm">Average Rating</div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 hover:from-white/15 hover:to-white/10 hover:border-[#9CF185]/30 hover:shadow-2xl hover:shadow-[#9CF185]/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#9CF185]/5 to-transparent rounded-full filter blur-xl"></div>
              
              {/* Category badge */}
              <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(testimonial.category)} text-white`}>
                {testimonial.category}
              </div>

              <div className="relative z-10">
                {/* Avatar and basic info */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${getCategoryColor(testimonial.category)} rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-poppins text-sm font-bold group-hover:text-[#9CF185] transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#9CF185] font-poppins text-xs font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-400 font-poppins text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                {/* Quote */}
                <div className="mb-4">
                  <div className="text-2xl text-[#9CF185]/30 mb-2">"</div>
                  <p className="text-gray-300 font-poppins text-sm leading-relaxed line-clamp-4 group-hover:text-white transition-colors">
                    {testimonial.quote}
                  </p>
                </div>
                
                {/* Rating and year */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-gray-500 text-xs font-medium">
                    {testimonial.year}
                  </span>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#9CF185]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mb-20">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
              Ready to Join Our Community?
            </h3>
            <p className="text-gray-300 mb-6 font-poppins">
              Become part of MANIT's most innovative club and start your journey in robotics and technology.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-[#9CF185] to-[#60BE58] text-[#0F1A35] px-8 py-3 rounded-full font-bold hover:shadow-2xl hover:shadow-[#9CF185]/25 hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>

        {/* Enhanced Sponsors section */}
        <SponsorGallery />
      </div>
    </section>
  );
}
