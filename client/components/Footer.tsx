import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0F1A35] border-2 border-white border-opacity-70 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute right-0 top-[614px] w-40 h-[641px] bg-[#29503B] opacity-91 blur-[100px] rounded-full"></div>
      <div className="absolute -left-34 top-[3685px] w-48 h-[408px] bg-[#4A9244] opacity-59 blur-[100px] rounded-full"></div>
      <div className="absolute -left-10 top-[786px] w-40 h-[641px] bg-[#1E3939] opacity-40 blur-[100px] rounded-full"></div>
      <div className="absolute -left-35 top-[4277px] w-52 h-[426px] bg-[#376B3F] blur-[100px] rounded-full"></div>
      <div className="absolute left-0 top-[852px] w-[90px] h-[437px] bg-[#29503B] opacity-91 blur-[100px] rounded-full"></div>

      {/* Decorative robot images */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/f14959dd131549e409467ab8a03c4fd0436e4d72"
        alt=""
        className="absolute right-0 top-[1166px] w-[612px] h-[408px]"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4b9574484a3b56f17db1373b3267af0814b0c59b"
        alt=""
        className="absolute -left-[533px] top-[1320px] w-[612px] h-[408px]"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/84366b6c6f3ca33deccc2841234afc3e374289ab"
        alt=""
        className="absolute -left-[466px] top-[758px] w-[612px] h-[408px]"
      />

      <div className="relative z-10 w-full px-4 lg:px-20 py-12">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Logo section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-48 h-50 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-black text-opacity-33 font-inter text-5xl">
                  Logo
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-poppins text-lg font-bold mb-5">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white font-poppins text-base hover:text-robotics-green transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/robomax"
                  className="text-white font-poppins text-base hover:text-robotics-green transition-colors"
                >
                  RoboMAX
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-white font-poppins text-base hover:text-robotics-green transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-white font-poppins text-base hover:text-robotics-green transition-colors"
                >
                  Past Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-poppins text-lg font-bold mb-5">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 22 24"
                >
                  <path d="M19.5312 1.5H1.52656C0.701562 1.5 0.03125 2.17969 0.03125 3.01406V20.9859C0.03125 21.8203 0.701562 22.5 1.52656 22.5H19.5312C20.3563 22.5 21.0312 21.8203 21.0312 20.9859V3.01406C21.0312 2.17969 20.3563 1.5 19.5312 1.5ZM6.37812 19.5H3.26562V9.47812H6.38281V19.5H6.37812ZM4.82187 8.10938C3.82344 8.10938 3.01719 7.29844 3.01719 6.30469C3.01719 5.31094 3.82344 4.5 4.82187 4.5C5.81562 4.5 6.62656 5.31094 6.62656 6.30469C6.62656 7.30312 5.82031 8.10938 4.82187 8.10938ZM18.0453 19.5H14.9328V14.625C14.9328 13.4625 14.9094 11.9672 13.3156 11.9672C11.6937 11.9672 11.4453 13.2328 11.4453 14.5406V19.5H8.33281V9.47812H11.3188V10.8469H11.3609C11.7781 10.0594 12.7953 9.22969 14.3094 9.22969C17.4594 9.22969 18.0453 11.3062 18.0453 14.0062V19.5Z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 22 24"
                >
                  <path d="M10.536 6.60928C7.55479 6.60928 5.1501 9.01396 5.1501 11.9952C5.1501 14.9765 7.55479 17.3812 10.536 17.3812C13.5173 17.3812 15.922 14.9765 15.922 11.9952C15.922 9.01396 13.5173 6.60928 10.536 6.60928ZM10.536 15.4968C8.60947 15.4968 7.03447 13.9265 7.03447 11.9952C7.03447 10.064 8.60478 8.49365 10.536 8.49365C12.4673 8.49365 14.0376 10.064 14.0376 11.9952C14.0376 13.9265 12.4626 15.4968 10.536 15.4968ZM17.3985 6.38896C17.3985 7.0874 16.836 7.64522 16.1423 7.64522C15.4438 7.64522 14.886 7.08271 14.886 6.38896C14.886 5.69521 15.4485 5.13271 16.1423 5.13271C16.836 5.13271 17.3985 5.69521 17.3985 6.38896ZM20.9657 7.66397C20.886 5.98115 20.5017 4.49053 19.2688 3.2624C18.0407 2.03428 16.5501 1.6499 14.8673 1.56553C13.1329 1.46709 7.93447 1.46709 6.2001 1.56553C4.52197 1.64521 3.03135 2.02959 1.79854 3.25771C0.565723 4.48584 0.186035 5.97646 0.10166 7.65928C0.00322266 9.39365 0.00322266 14.5921 0.10166 16.3265C0.181348 18.0093 0.565723 19.4999 1.79854 20.728C3.03135 21.9562 4.51729 22.3405 6.2001 22.4249C7.93447 22.5233 13.1329 22.5233 14.8673 22.4249C16.5501 22.3452 18.0407 21.9608 19.2688 20.728C20.497 19.4999 20.8813 18.0093 20.9657 16.3265C21.0642 14.5921 21.0642 9.39834 20.9657 7.66397ZM18.7251 18.1874C18.3595 19.1062 17.6517 19.814 16.7282 20.1843C15.3454 20.7327 12.0642 20.6062 10.536 20.6062C9.00791 20.6062 5.72197 20.728 4.34385 20.1843C3.4251 19.8187 2.71729 19.1108 2.34697 18.1874C1.79854 16.8046 1.9251 13.5233 1.9251 11.9952C1.9251 10.4671 1.80322 7.18115 2.34697 5.80303C2.7126 4.88428 3.42041 4.17646 4.34385 3.80615C5.72666 3.25771 9.00791 3.38428 10.536 3.38428C12.0642 3.38428 15.3501 3.2624 16.7282 3.80615C17.647 4.17178 18.3548 4.87959 18.7251 5.80303C19.2735 7.18584 19.147 10.4671 19.147 11.9952C19.147 13.5233 19.2735 16.8093 18.7251 18.1874Z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.80781 18.6281C7.80781 18.7219 7.7 18.7969 7.56406 18.7969C7.40937 18.8109 7.30156 18.7359 7.30156 18.6281C7.30156 18.5344 7.40938 18.4594 7.54531 18.4594C7.68594 18.4453 7.80781 18.5203 7.80781 18.6281ZM6.35 18.4172C6.31719 18.5109 6.41094 18.6187 6.55156 18.6469C6.67344 18.6937 6.81406 18.6469 6.84219 18.5531C6.87031 18.4594 6.78125 18.3516 6.64062 18.3094C6.51875 18.2766 6.38281 18.3234 6.35 18.4172ZM8.42188 18.3375C8.28594 18.3703 8.19219 18.4594 8.20625 18.5672C8.22031 18.6609 8.34219 18.7219 8.48281 18.6891C8.61875 18.6562 8.7125 18.5672 8.69844 18.4734C8.68437 18.3844 8.55781 18.3234 8.42188 18.3375ZM11.5063 0.375C5.00469 0.375 0.03125 5.31094 0.03125 11.8125C0.03125 17.0109 3.30313 21.4594 7.97656 23.025C8.57656 23.1328 8.7875 22.7625 8.7875 22.4578C8.7875 22.1672 8.77344 20.5641 8.77344 19.5797C8.77344 19.5797 5.49219 20.2828 4.80313 18.1828C4.80313 18.1828 4.26875 16.8187 3.5 16.4672C3.5 16.4672 2.42656 15.7312 3.575 15.7453C3.575 15.7453 4.74219 15.8391 5.38437 16.9547C6.41094 18.7641 8.13125 18.2437 8.80156 17.9344C8.90938 17.1844 9.21406 16.6641 9.55156 16.3547C6.93125 16.0641 4.2875 15.6844 4.2875 11.175C4.2875 9.88594 4.64375 9.23906 5.39375 8.41406C5.27187 8.10938 4.87344 6.85312 5.51562 5.23125C6.49531 4.92656 8.75 6.49688 8.75 6.49688C9.6875 6.23438 10.6953 6.09844 11.6938 6.09844C12.6922 6.09844 13.7 6.23438 14.6375 6.49688C14.6375 6.49688 16.8922 4.92188 17.8719 5.23125C18.5141 6.85781 18.1156 8.10938 17.9938 8.41406C18.7438 9.24375 19.2031 9.89062 19.2031 11.175C19.2031 15.6984 16.4422 16.0594 13.8219 16.3547C14.2531 16.725 14.6188 17.4281 14.6188 18.5297C14.6188 20.1094 14.6047 22.0641 14.6047 22.4484C14.6047 22.7531 14.8203 23.1234 15.4156 23.0156C20.1031 21.4594 23.2812 17.0109 23.2812 11.8125C23.2812 5.31094 18.0078 0.375 11.5063 0.375ZM4.5875 16.5422C4.52656 16.5891 4.54063 16.6969 4.62031 16.7859C4.69531 16.8609 4.80312 16.8938 4.86406 16.8328C4.925 16.7859 4.91094 16.6781 4.83125 16.5891C4.75625 16.5141 4.64844 16.4812 4.5875 16.5422ZM4.08125 16.1625C4.04844 16.2234 4.09531 16.2984 4.18906 16.3453C4.26406 16.3922 4.35781 16.3781 4.39062 16.3125C4.42344 16.2516 4.37656 16.1766 4.28281 16.1297C4.18906 16.1016 4.11406 16.1156 4.08125 16.1625ZM5.6 17.8312C5.525 17.8922 5.55312 18.0328 5.66094 18.1219C5.76875 18.2297 5.90469 18.2437 5.96562 18.1688C6.02656 18.1078 5.99844 17.9672 5.90469 17.8781C5.80156 17.7703 5.66094 17.7563 5.6 17.8312ZM5.06563 17.1422C4.99062 17.1891 4.99062 17.3109 5.06563 17.4188C5.14062 17.5266 5.26719 17.5734 5.32812 17.5266C5.40312 17.4656 5.40312 17.3438 5.32812 17.2359C5.2625 17.1281 5.14062 17.0813 5.06563 17.1422Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-poppins text-lg font-bold mb-5">
              Contact Info
            </h3>
            <div className="space-y-2">
              <p className="text-white font-poppins text-base">
                Phone: +91 12345 67890
              </p>
              <p className="text-white font-poppins text-base">
                Email: robotics@manit.ac.in
              </p>
              <p className="text-white font-poppins text-base">
                Room: Tech Block, MANIT
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="bg-[#2A3D57] bg-opacity-65 h-36 flex items-center justify-center">
          <p className="text-white font-kanit text-3xl text-center">
            © 2025 Robotics Club, NIT Bhopal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
