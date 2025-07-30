import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Team() {
  return (
    <div className="min-h-screen bg-[#0F1B35]">
      <Navigation />
      <div className="pt-[73px] flex items-center justify-center min-h-screen">
        <div className="text-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4 font-poppins">Our Team</h1>
          <p className="text-xl font-poppins">
            This page is under construction. Please continue browsing other sections or{" "}
            <span className="text-robotics-green">let us know what you'd like to see here!</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
