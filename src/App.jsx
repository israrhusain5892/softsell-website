
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
import ChatBot from './components/ChatBot';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
function App() {
    const[chat,setChat]=useState(false)
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
   
    
     <div
        className={` fixed bottom-15 right-5   z-1000 b-0 r-0 transition-all duration-300  transform ${
          chat
            ? 'opacity-100 scale-100 translate-y-1'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        } mt-2`}
      >
         <ChatBot  />
        
      </div>
     
   
     
      <IoChatbubbleEllipsesSharp onClick={()=>setChat(!chat)} className='position-absolute bottom-2 right-5 fixed w-10 h-10 z-15 text-blue-600 cursor-pointer' />
       
    </div>
  )
}

export default App
