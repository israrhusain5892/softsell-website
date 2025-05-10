import React from 'react';
import ContactForm from '../components/contactForm';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItsWorks';
import Testimonials from '../components/Testimonial';
import WhyChooseUs from '../components/WhyChooseUs';
import { useRef } from 'react';

function Home({ isDark }) {

    const targetRef = useRef(null);

    const scrollToElement = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <main >
            <HeroSection isDark={isDark} scrollToElement={scrollToElement} />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials isDark={isDark} />
            <ContactForm ref={targetRef} />

        </main>
    );
}

export default Home;