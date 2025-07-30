import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations will be added here later
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-[600px] bg-[#121C37] overflow-hidden flex items-center justify-center"
      style={{ marginTop: '73px' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Main large robot blueprint background */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/ae0dd919350d695f0a5d9edf530ddff17252e16f"
          alt=""
          className="absolute -left-5 -top-48 w-[1368px] h-[1368px] opacity-78"
          style={{ transform: 'rotate(0.186deg)' }}
        />
        
        {/* Robot blueprint on the right */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/6e46b4cf75136dd5e44caaa903a48573b2a40909"
          alt=""
          className="absolute right-0 -top-72 w-[499px] h-[696px] opacity-90"
          style={{ transform: 'rotate(0.186deg)' }}
        />

        {/* Smaller decorative robot elements */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/cf4f1aced408cc9422d231e2950986152b9dd48a"
          alt=""
          className="absolute -left-[458px] -top-[370px] w-[612px] h-[408px] opacity-60"
          style={{ transform: 'rotate(32.581deg)' }}
        />
        
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/dd60f8e45dbc5e9321c41ce8f864ba1faf662d51"
          alt=""
          className="absolute left-22 -top-60 w-[612px] h-[408px] opacity-60"
          style={{ transform: 'rotate(32.581deg)' }}
        />
        
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d9bfd6da4f7ea802a85d85a40f9d6ae0eed9b4ed"
          alt=""
          className="absolute -left-24 top-32 w-[612px] h-[408px] opacity-60"
          style={{ transform: 'rotate(32.581deg)' }}
        />
        
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/178a4ea556bce9319a97f9a14ac9077e9358a5da"
          alt=""
          className="absolute left-[506px] -top-[297px] w-[612px] h-[408px] opacity-60"
          style={{ transform: 'rotate(32.395deg)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-white font-taviraj text-4xl md:text-5xl font-bold leading-tight mb-6">
          Welcome to Robotics Club – MANIT Bhopal
        </h1>
        
        <p className="text-white font-montserrat text-xl md:text-2xl font-semibold">
          Where Innovation Meets Engineering
        </p>
      </div>
    </section>
  );
}
