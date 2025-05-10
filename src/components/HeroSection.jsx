import { motion } from 'framer-motion';
// passing scrollToElement fun as props 
const HeroSection = ({isDark,scrollToElement }) => {
   
  return (
    <motion.section 
      className={` text-white text-center py-20 ${isDark===false && "hero"}`}
      
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}>
      
      <h1 className="text-4xl font-bold">Welcome to SoftSell</h1>
      <p className="mt-4 text-lg">Sell your licenses quickly and securely. Get the best value with our trusted platform.</p>
      
      <button onClick={scrollToElement } className="mt-6 hover:scale-105 transition delay-150 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 dark:bg-yellow-400 dark:text-black hover:dark:bg-yellow-300 hover:cursor-pointer">
        Sell My Licenses
      </button>
    </motion.section>
  );
};

export default HeroSection;
