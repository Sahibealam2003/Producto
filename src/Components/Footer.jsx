import App from "../assets/app.png";
import Play from "../assets/play.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // Main footer wrapper
    <footer className="bg-gray-100 w-full mt-5 pb-5 font-gilroy">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] m-auto">
        
        {/* Top border line */}
        <hr className="border border-[rgba(2,6,12,.50)]" />

        {/* Download app section */}
        <div className="flex flex-col md:flex-row justify-between gap-5 items-center mt-10">
          <h1 className="text-[22px] sm:text-[24px] md:text-[26px] text-gray-800 font-bold leading-7 text-center md:text-left">
            For better experience download app
          </h1>

          {/* App store + Play store buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link to={"/download"}>
              <img
                src={Play}
                alt="Google Play"
                className="w-[170px] cursor-pointer transition-transform duration-200 hover:scale-105"
              />
            </Link>

            <Link to={"/download"}>
              <img
                src={App}
                alt="App Store"
                className="w-[200px] h-[80px] cursor-pointer transition-transform duration-200 hover:scale-105"
              />
            </Link>
          </div>
        </div>

        {/* Footer main links section */}
        <div className="flex flex-col md:flex-row justify-between mt-12 gap-10">
          
          {/* Left side → Logo + copyright */}
          <div className="w-full md:w-[300px]">
            <span className="text-3xl font-bold text-shimmer text-black">
              PRODUCTO.
            </span>
            <p className="text-gray-600 mt-2">© 2025 PRODUCTO. Limited</p>
          </div>

          {/* Right side → All link sections */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
              
              {/* Company links */}
              <div>
                <h2 className="font-bold mb-3 text-[17px]">Company</h2>
                <ul className="space-y-2 text-[16px] font-medium text-gray-600">
                  <li><a>About Us</a></li>
                  <li><a>PRODUCTO. Corporate</a></li>
                  <li><a>Careers</a></li>
                  <li><a>Team</a></li>
                  <li><a>PRODUCTO. Instamart</a></li>
                  <li><a>PRODUCTO. Genie</a></li>
                  <li><a>Minis</a></li>
                  <li><a>Pyng</a></li>
                </ul>
              </div>

              {/* Contact + Legal links */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="font-bold mb-3 text-[17px]">Contact us</h2>
                  <ul className="space-y-2 text-[16px] font-medium text-gray-600">
                    <li><a>Help & Support</a></li>
                    <li><a>Partner with us</a></li>
                    <li><a>Ride with us</a></li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="font-bold mb-3 text-[17px]">Legal</h2>
                  <ul className="space-y-2 text-[16px] font-medium text-gray-600">
                    <li><a>Terms & Conditions</a></li>
                    <li><a>Cookie Policy</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Investor Relations</a></li>
                  </ul>
                </div>
              </div>

              {/* Life at PRODUCTO + Social links */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="font-bold mb-3 text-[17px]">Life at PRODUCTO.</h2>
                  <ul className="space-y-2 text-[16px] font-medium text-gray-600">
                    <li><a>Explore with PRODUCTO.</a></li>
                    <li><a>PRODUCTO. News</a></li>
                  </ul>
                </div>

                {/* Social media icons */}
                <div className="mt-8">
                  <h2 className="font-bold text-[17px] mb-3">Social Links</h2>
                  <div className="flex space-x-4 text-xl text-gray-700">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200">
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
