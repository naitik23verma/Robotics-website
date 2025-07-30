export default function AutoMAXEvent() {
  return (
    <section className="bg-[#0F1B35] py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <h2 className="text-white font-poppins text-3xl font-normal text-center mb-12">
          Upcoming Event: AutoMAX
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Event details */}
          <div className="bg-black bg-opacity-10 backdrop-blur-md rounded-lg border border-gray-200 border-opacity-80 p-8">
            <div className="mb-6">
              <span className="inline-block bg-[#60BE58] text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                New Sponsor Presents
              </span>
            </div>
            
            <h3 className="text-white font-poppins text-2xl font-bold mb-4">
              Annual Robotics Competition
            </h3>
            
            <p className="text-white font-poppins text-base mb-8 leading-relaxed">
              Join us for the biggest robotics competition in Central India.
              <br />
              Showcase your skills, compete with the best teams, and win
              <br />
              exciting prizes.
            </p>
            
            <button className="bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] text-white font-poppins font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Register Now
            </button>
            
            {/* Sponsor logos */}
            <div className="mt-12">
              <p className="text-white font-poppins text-sm text-center mb-6 bg-gray-800 inline-block px-4 py-2 rounded-full">
                Event sponsors & partners
              </p>
              
              <div className="grid grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-34 h-25 bg-[#1E293F] border-4 border-[#0A485F] rounded"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image placeholder */}
          <div className="bg-gray-300 h-80 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
