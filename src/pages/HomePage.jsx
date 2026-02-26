import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import ProjectGrid from '../components/Projects/ProjectGrid';
import ContactForm from '../components/Contact/ContactForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <ProjectGrid />
      <ContactForm />
    </>
  );
};

export default HomePage;