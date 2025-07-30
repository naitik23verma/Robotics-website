import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SponsorGallery from "./SponsorGallery";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Alumni, Software Engineer at Google",
      image: "👨���💻",
      quote: "The Robotics Club at MANIT was the foundation of my career. The hands-on experience with cutting-edge technology and the collaborative environment taught me problem-solving skills that I use every day at Google.",
      rating: 5,
      year: "Class of 2021"
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "Final Year Student, Robotics Team Lead",
      image: "👩‍🔬",
      quote: "Being part of this club has been transformational. From building my first robot to leading teams in national competitions, every moment has been a learning experience. The mentorship here is unparalleled.",
      rating: 5,
      year: "Current Student"
    },
    {
      id: 3,
      name: "Dr. Arjun Patel",
      role: "Robotics Engineer, ISRO",
      image: "🚀",
      quote: "The technical foundation I gained at MANIT's Robotics Club directly contributed to my work at ISRO. The club's emphasis on innovation and practical application prepared me for real-world challenges in space technology.",
      rating: 5,
      year: "Class of 2019"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      role: "AI Research Scientist, Microsoft",
      image: "🤖",
      quote: "The interdisciplinary approach of the club, combining robotics with AI and machine learning, gave me a unique perspective that's invaluable in my current research at Microsoft. Truly grateful for this experience.",
      rating: 5,
      year: "Class of 2020"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate testimonials on scroll
      gsap.fromTo(testimonialsRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}>
        ⭐
      </span>
    ));
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
            Hear from our amazing community of students, alumni, and professionals who've been part of our robotics journey
          </p>
        </div>

        {/* Main Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9CF185]/10 rounded-full filter blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#AC0FB8]/10 rounded-full filter blur-2xl"></div>
            
            <div className="relative z-10">
              {/* Quote icon */}
              <div className="text-6xl text-[#9CF185]/30 mb-6 font-serif">"</div>
              
              {/* Main quote */}
              <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-8 font-inter">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              {/* Author info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9CF185] to-[#60BE58] rounded-full flex items-center justify-center text-2xl">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-left">
                  <h4 className="text-white font-poppins text-lg font-bold">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#9CF185] font-poppins text-sm">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-400 font-poppins text-xs">
                    {testimonials[currentTestimonial].year}
                  </p>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:bg-[#9CF185]/20 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-[#9CF185]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Dots indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentTestimonial === index 
                          ? 'bg-[#9CF185] scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center hover:bg-[#9CF185]/20 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:text-[#9CF185]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div ref={testimonialsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.filter((_, index) => index !== currentTestimonial).slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:bg-white/15 hover:border-[#9CF185]/30 transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9CF185] to-[#60BE58] rounded-full flex items-center justify-center text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-white font-poppins text-sm font-bold group-hover:text-[#9CF185] transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 font-poppins text-xs">
                    {testimonial.role.split(',')[0]}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 font-poppins text-sm leading-relaxed mb-4 line-clamp-3">
                {testimonial.quote.substring(0, 120)}...
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating).slice(0, 5)}
                </div>
                <span className="text-[#9CF185] text-xs font-medium">Read More →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Sponsors section */}
        <SponsorGallery />
      </div>
    </section>
  );
}
