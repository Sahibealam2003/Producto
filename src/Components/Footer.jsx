import React from 'react'
import { Link } from 'react-router-dom'
import App from "../assets/app.png"
import Play from "../assets/play.png"

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F5] w-full mt-5 pb-5 font-gilroy">
      <div className="w-[80%] m-auto">
        <hr className="border border-[rgba(2,6,12,.50)]" />

        <div className="flex justify-between gap-7 items-center mt-10">
          <h1 className="text-[26px] text-gray-800 font-bold leading-7">
            For better experience download app
          </h1>
          <div className="flex items-center">
            <a href="" target="_blank">
              <img
                src={Play}
                className="w-[170px] transition-transform duration-200 hover:scale-105"
              />
            </a>
            <a href="" target="_blank">
              <img
                src={App}
                className="w-[200px] h-[82px] transition-transform duration-200 hover:scale-105"
              />
            </a>
          </div>
        </div>

        <div
          
          className="flex justify-between mt-15"
        >
          <div className='w-[300px]'>
            <span className="text-3xl font-bold text-[#f94e30]">PRODUCTO.</span>
            <p className="text-gray-600">© 2025 PRODUCTO. Limited</p>
          </div>



         <div className="w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 text-sm">
    
    {/* Company */}
    <div>
      <h2 className="font-bold mb-3 text-[17px]">Company</h2>
      <ul className="space-y-2 text-[16px] font-medium text-gray-600">
        <li><a>About Us</a></li>
        <li><a>PRODUCTO. Corporate</a></li>
        <li><a>Careers</a></li>
        <li><a>Team</a></li>
        <li><a>PRODUCTO. One</a></li>
        <li><a>PRODUCTO. Instamart</a></li>
        <li><a>PRODUCTO. Dineout</a></li>
        <li><a>PRODUCTO. Genie</a></li>
        <li><a>Minis</a></li>
        <li><a>Pyng</a></li>
      </ul>
    </div>

    {/* Contact Us + Legal */}
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

    {/* Life at PRODUCTO. + Social Links */}
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="font-bold mb-3 text-[17px]">Life at PRODUCTO.</h2>
        <ul className="space-y-2 text-[16px] font-medium text-gray-600">
          <li><a>Explore with PRODUCTO.</a></li>
          <li><a>PRODUCTO. News</a></li>
          <li><a>Snackables</a></li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="font-bold text-[17px] mb-3">Social Links</h2>
        <div className="flex space-x-4 text-xl text-gray-700">
          <i className="fab fa-linkedin hover:scale-125 transition-transform duration-200"></i>
          <i className="fab fa-instagram hover:scale-125 transition-transform duration-200"></i>
          <i className="fab fa-facebook hover:scale-125 transition-transform duration-200"></i>
          <i className="fab fa-pinterest hover:scale-125 transition-transform duration-200"></i>
          <i className="fab fa-twitter hover:scale-125 transition-transform duration-200"></i>
        </div>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
