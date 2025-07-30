export default function Testimonials() {
  return (
    <section className="bg-[#0F1A35] py-16 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute right-0 top-80 w-52 h-[426px] bg-[#376B3F] blur-[100px] rounded-full"></div>

      {/* Decorative robot image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/80a18452a4ecf699b1d02202b37519eb50ebe39f"
        alt=""
        className="absolute -left-20 -top-7 w-[277px] h-[156px] opacity-49"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-[#9CF185] font-montserrat text-3xl font-bold mb-3">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-lg border-2 border-dashed border-gray-300 p-6 relative"
            >
              {/* Speech bubble tail */}
              <div className="absolute -bottom-1 left-8 w-2 h-1 border-t-4 border-r-4 border-l-4 border-gray-300"></div>

              <div className="w-6 h-6 bg-gray-300 rounded-full mb-4"></div>

              <div className="space-y-3 mb-6">
                <div className="w-full h-3 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
                <div className="w-5/6 h-3 bg-gray-300 rounded"></div>
              </div>

              <div className="w-56 h-4 bg-gray-400 rounded mb-2"></div>
              <div className="w-40 h-3 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>

        {/* Sponsors section */}
        <SponsorGallery />
      </div>
    </section>
  );
}
