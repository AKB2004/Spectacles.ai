import React from 'react'
const Footer = () => {
    return (
      <footer className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Spectacles</h2>
            <p className="text-sm text-gray-600">Get the best refined image.</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#shop" className="hover:underline">Shop</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm text-gray-700">gmail.com</p>
            <p className="text-sm text-gray-700">+91 9466360316</p>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-700">
          &copy; {new Date().getFullYear()} Spectacles. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  