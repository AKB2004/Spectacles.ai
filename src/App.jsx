// import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/FooterSection';


function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-16"> {/* Adjust 'pt-16' based on Navbar height */}
        <HeroSection />
        <Footer/>
      </div>
    </div>
  );
  
}

export default App;
