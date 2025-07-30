import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Prizes() {
  const [selectedPrize, setSelectedPrize] = useState<number | null>(null);

  const prizes = [
    {
      id: 1,
      title: "1st Place - RoboMAX 2023",
      category: "Competition Winner",
      description: "Gold medal and certificate for first place in annual robotics competition",
      image: "/placeholder-trophy.jpg",
      date: "December 2023",
      status: "Available",
    },
    {
      id: 2,
      title: "Best Innovation Award",
      category: "Innovation",
      description: "Recognition for outstanding innovative project in IIT Delhi TechFest",
      image: "/placeholder-medal.jpg",
      date: "October 2023",
      status: "Collected",
    },
    {
      id: 3,
      title: "Line Following Champion",
      category: "Technical Challenge",
      description: "State level line following robot competition winner",
      image: "/placeholder-certificate.jpg",
      date: "September 2023",
      status: "Available",
    },
    {
      id: 4,
      title: "Participation Certificate",
      category: "Participation",
      description: "International RoboCup participation certificate",
      image: "/placeholder-certificate.jpg",
      date: "August 2023",
      status: "Available",
    },
    {
      id: 5,
      title: "Team Achievement Award",
      category: "Team Excellence",
      description: "Outstanding team performance in regional robotics championship",
      image: "/placeholder-trophy.jpg",
      date: "July 2023",
      status: "Collected",
    },
    {
      id: 6,
      title: "Technical Publication",
      category: "Research",
      description: "Featured article in National Technology Magazine",
      image: "/placeholder-magazine.jpg",
      date: "June 2023",
      status: "Available",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F1B35]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[73px] pb-16 bg-[#121C37] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/ae0dd919350d695f0a5d9edf530ddff17252e16f"
            alt=""
            className="absolute -right-64 -top-32 w-[800px] h-[800px]"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-20 text-center">
          <h1 className="text-white font-taviraj text-4xl md:text-5xl font-bold mb-6">
            Prize Collection Center
          </h1>
          <p className="text-white font-montserrat text-xl md:text-2xl font-semibold mb-8">
            Celebrate Your Achievements
          </p>
          <div className="bg-[#9CF185]/20 backdrop-blur-md rounded-lg border border-[#9CF185]/30 p-6 max-w-2xl mx-auto">
            <p className="text-white font-poppins text-base">
              Welcome to the MANIT Robotics Club Prize Collection Center. Here you can view and collect your earned prizes, certificates, and awards.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Stats */}
      <section className="bg-[#0F1B35] py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-gray-200/20 p-6 text-center">
              <h3 className="text-[#9CF185] font-poppins text-2xl font-bold">
                {prizes.filter(p => p.status === "Available").length}
              </h3>
              <p className="text-white font-poppins text-sm">Available Prizes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-gray-200/20 p-6 text-center">
              <h3 className="text-[#9CF185] font-poppins text-2xl font-bold">
                {prizes.filter(p => p.status === "Collected").length}
              </h3>
              <p className="text-white font-poppins text-sm">Collected Prizes</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-gray-200/20 p-6 text-center">
              <h3 className="text-[#9CF185] font-poppins text-2xl font-bold">
                {prizes.length}
              </h3>
              <p className="text-white font-poppins text-sm">Total Achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Grid */}
      <section className="bg-[#0F1B35] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <h2 className="text-[#9CF185] font-poppins text-3xl font-bold text-center mb-12">
            Your Prize Collection
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prizes.map((prize) => (
              <div
                key={prize.id}
                className={`bg-white/10 backdrop-blur-md rounded-lg border border-gray-200/20 p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedPrize === prize.id ? 'ring-2 ring-[#9CF185]' : ''
                } ${
                  prize.status === 'Collected' ? 'opacity-60' : ''
                }`}
                onClick={() => setSelectedPrize(selectedPrize === prize.id ? null : prize.id)}
              >
                {/* Prize Image */}
                <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#9CF185]/30 rounded-full mx-auto mb-2 flex items-center justify-center">
                      🏆
                    </div>
                    <p className="text-gray-600 text-sm">Prize Image</p>
                  </div>
                </div>

                {/* Prize Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-poppins ${
                      prize.status === 'Available' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {prize.status}
                    </span>
                    <span className="text-[#9CF185] font-poppins text-xs">
                      {prize.category}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-poppins text-lg font-bold">
                    {prize.title}
                  </h3>
                  
                  <p className="text-gray-300 font-poppins text-sm">
                    {prize.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 font-poppins">
                      {prize.date}
                    </span>
                    {prize.status === 'Available' && (
                      <button className="bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] text-white font-poppins font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-xs">
                        Collect Prize
                      </button>
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedPrize === prize.id && (
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <div className="space-y-2">
                      <p className="text-white font-poppins text-sm font-bold">
                        Collection Instructions:
                      </p>
                      <p className="text-gray-300 font-poppins text-xs">
                        Visit the Robotics Club office during office hours (Mon-Fri 9:00 AM - 5:00 PM) 
                        with your student ID to collect this prize.
                      </p>
                      <p className="text-gray-300 font-poppins text-xs">
                        Location: Tech Block, Room 101, MANIT Bhopal
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#121C37] py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-20 text-center">
          <h2 className="text-white font-poppins text-3xl font-bold mb-6">
            Ready to Collect Your Prizes?
          </h2>
          <p className="text-gray-300 font-poppins text-lg mb-8">
            Contact us to schedule your prize collection or get more information about upcoming competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] text-white font-poppins font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Contact Club Office
            </button>
            <button className="border border-[#9CF185] text-[#9CF185] font-poppins font-medium px-8 py-3 rounded-lg hover:bg-[#9CF185]/10 transition-colors">
              View Competition Calendar
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
