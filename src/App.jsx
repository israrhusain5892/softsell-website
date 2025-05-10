
import { useState } from 'react';
import './App.css';
import ContactForm from './components/contactForm';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItsWorks';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonial';
import WhyChooseUs from './components/WhyChooseUs';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
    // initialize isDark either by true or false
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDark")) || false);
    // if isDark found then store isDark boolean in localstorage else remove from local storage
  if (isDark) {
    localStorage.setItem("isDark", isDark);
  }
  else {
    localStorage.removeItem("isDark");
  }

  // this will make toggle funtion
   const toggleTheme = () => {
      setIsDark(!isDark)

  }


  return (
    <div className={`${isDark === true && "dark"}`}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Home isDark={isDark} />
      <Footer />

    </div>
  )
}

export default App
