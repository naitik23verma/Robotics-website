export default function AboutUs() {
  return (
    <section className="relative bg-[#0F1B35] py-16 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/c81c95f262e00c3640ba9385ac913057c21b16dd')"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="bg-white h-56 rounded-lg"></div>
          
          {/* Content */}
          <div className="text-white">
            <h2 className="font-poppins text-4xl font-bold mb-8 text-center md:text-left">
              About Us
            </h2>
            
            <p className="font-inter text-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
            </p>
            
            {/* Dots indicator */}
            <div className="flex justify-center md:justify-start space-x-2 mt-8">
              <div className="w-4 h-6 bg-white rounded-full"></div>
              <div className="w-4 h-6 bg-white rounded-full"></div>
              <div className="w-4 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
