import React, { useEffect, useState } from 'react';

function Navbar() {
  const [theme, setTheme] = useState(() => {
    // Initial load: get from localStorage or system
    if (localStorage.theme) return localStorage.theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      className={`w-full flex items-center justify-between px-6 py-4 
      ${theme === 'dark' ? 'bg-black shadow-lg' : 'bg-white shadow-md'} 
      shadow-gray-500 dark:shadow-gray-900 transition-colors duration-300`}
    >
      <div className="text-blue-600 dark:text-blue-400 font-bold text-xl">Spectacles.ai</div>

      <div className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
        <a href="#how-it-works" className='hover:text-blue-700 dark:hover:text-blue-400'>How It Works</a>
        <a href="#features" className='hover:text-blue-700 dark:hover:text-blue-400'>Features</a>
        <a href="#contact" className='hover:text-blue-700 dark:hover:text-blue-400'>Contact</a>
      </div>

      <div className="flex gap-4 items-center">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-blue-500 dark:text-yellow-400 hover:text-blue-700"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <button className="text-gray-700 dark:text-gray-200 hover:text-blue-500">Login</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
