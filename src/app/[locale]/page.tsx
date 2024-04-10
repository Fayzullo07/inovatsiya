"use client"
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';

import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import News from '@/components/News';
import Events from '@/components/Events';
import Partners from '@/components/Partners';
import Members from '@/components/Members';
import Services from '@/components/Services';
import Slider from '@/components/Slider';
import AskedQuestions from '@/components/AskedQuestions';
import Initiators from '@/components/Initiators';
import Projects from '@/components/Projects';
import RegMembers from '@/components/RegMembers';
import InitiatorsApplication from '@/components/InitiatorsApplication';

export default function Index() {
  useEffect(() => {
    AOS.init({ once: true, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();

  }, []);



  return (
    <>
      <Hero />
      <Slider />
      <AboutUs />
      <Projects />
      <Members />
      <RegMembers />
      <Events />
      <News />
      {/* <Statistics /> */}
      <Partners />
      <InitiatorsApplication />
      <Initiators />
      <Services />
      <Contact />
      <AskedQuestions />
    </>
  );
}