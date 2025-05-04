import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// if (
//   localStorage.theme === 'dark' || 
//   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
// ) {
//   document.documentElement.classList.add('dark'); // Add 'dark' class on <html>
// } else {
//   document.documentElement.classList.remove('dark'); // Remove 'dark' class if not dark mode
// }
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
