import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

function App() {
  // const [theme, setTheme] = useState(() => {
  //   // Initial load: get from localStorage or system
  //   if (localStorage.theme) return localStorage.theme;
  //   return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // });

  // // Apply theme to <html>
  // useEffect(() => {
  //   const html = document.documentElement;
  //   if (theme === 'dark') {
  //     html.classList.add('dark');
  //   } else {
  //     html.classList.remove('dark');
  //   }
  //   localStorage.theme = theme;
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark');
  // };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
