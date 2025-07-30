import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-[#0F1A35] py-16 relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute right-[537px] top-9 w-[517px] h-[413px] bg-[#34643F] opacity-80 blur-[50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-68">
        <h2 className="text-[#9CF185] font-poppins text-3xl font-bold text-center mb-16">
          Contact Us
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
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
          
          {/* Map placeholder */}
          <div className="bg-gray-300 h-80 rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-gray-600 font-poppins text-base">
              MANIT Campus Location
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
