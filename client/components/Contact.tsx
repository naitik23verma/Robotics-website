import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    username: "",
    password: "",
    isMANITStudent: false,
  });

  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login logic
    if (formData.username && formData.password) {
      setIsLoggedIn(true);
      setShowLogin(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <section className="bg-[#0F1A35] py-16 relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute right-[537px] top-9 w-[517px] h-[413px] bg-[#34643F] opacity-80 blur-[50px]"></div>

      <div className="relative z-10 w-full px-4 lg:px-20">
        <h2 className="text-[#9CF185] font-poppins text-3xl font-bold text-center mb-16">
          Contact Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form and Login */}
          <div className="space-y-8">
            {/* Login Section */}
            {!isLoggedIn && (
              <div className="bg-white/10 backdrop-blur-md rounded-lg border border-gray-200/20 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-poppins text-xl font-bold">
                    Member Login
                  </h3>
                  <button
                    onClick={() => setShowLogin(!showLogin)}
                    className="text-[#9CF185] font-poppins text-sm hover:underline"
                  >
                    {showLogin ? "Hide Login" : "Show Login"}
                  </button>
                </div>

                {showLogin && (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-[#B8BCC2] font-poppins text-sm font-medium mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#B8BCC2] font-poppins text-sm font-medium mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-sm"
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="isMANITStudent"
                        checked={formData.isMANITStudent}
                        onChange={handleChange}
                        className="rounded"
                      />
                      <label className="text-[#B8BCC2] font-poppins text-sm">
                        MANIT Student (Free Registration)
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] text-white font-poppins font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm"
                    >
                      Login
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Welcome message for logged in users */}
            {isLoggedIn && (
              <div className="bg-green-500/20 backdrop-blur-md rounded-lg border border-green-400/30 p-6">
                <h3 className="text-green-400 font-poppins text-lg font-bold mb-2">
                  Welcome {formData.isMANITStudent ? "MANIT Student" : "Member"}
                  !
                </h3>
                <p className="text-white font-poppins text-sm mb-4">
                  {formData.isMANITStudent
                    ? "Free registration available for MANIT students"
                    : "Thank you for being a member"}
                </p>

                {/* Prizes Access Button */}
                <Link
                  to="/prizes"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#9CF185] to-[#60BE58] text-[#0F1B35] px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <span className="text-xl animate-bounce">🏆</span>
                  <span>View Prizes & Competitions</span>
                </Link>
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#B8BCC2] font-poppins text-base font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-[#BABFC6] font-poppins text-base font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-[#A3A8B0] font-poppins text-base font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#AC0FB8] to-[#578FD9] text-white font-poppins font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Side - Location and Payment */}
          <div className="space-y-8">
            {/* Map placeholder */}
            <div className="bg-gray-300 h-64 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-gray-600 font-poppins text-base">
                MANIT Campus Location
              </span>
            </div>

            {/* Payment QR Section - Only for non-MANIT users */}
            {!formData.isMANITStudent && (
              <div className="bg-white/10 backdrop-blur-md rounded-lg border border-gray-200/20 p-6">
                <h3 className="text-white font-poppins text-xl font-bold mb-4">
                  Support Our Club
                </h3>

                <div className="text-center">
                  <div className="bg-white p-4 rounded-lg inline-block mb-4">
                    {/* QR Code placeholder */}
                    <div className="w-48 h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-black/10 rounded mb-2 mx-auto"></div>
                        <p className="text-gray-600 text-sm font-poppins">
                          QR Code
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-white font-poppins text-sm mb-2">
                    Scan to donate for club activities
                  </p>
                  <p className="text-[#9CF185] font-poppins text-xs">
                    For non-MANIT members only
                  </p>
                  <p className="text-white font-poppins text-xs mt-2">
                    UPI ID: roboticsclub@manit
                  </p>
                </div>
              </div>
            )}

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-gray-200/20 p-6">
              <h3 className="text-white font-poppins text-lg font-bold mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <p className="text-white font-poppins text-sm">
                  📞 Phone: +91 12345 67890
                </p>
                <p className="text-white font-poppins text-sm">
                  ✉️ Email: robotics@manit.ac.in
                </p>
                <p className="text-white font-poppins text-sm">
                  📍 Room: Tech Block, MANIT Bhopal
                </p>
                <p className="text-white font-poppins text-sm">
                  🕒 Office Hours: Mon-Fri 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
