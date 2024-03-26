"use client"
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statisticts';

import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import News from '@/components/News';
import Events from '@/components/Events';
import Partners from '@/components/Partners';
import Members from '@/components/Members';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Slider from '@/components/Slider';
import AskedQuestions from '@/components/AskedQuestions';
import Initiators from '@/components/Initiators';

export default function Index() {
  useEffect(() => {
    AOS.init({ once: true, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();

  }, []);



  return (
    <>
      <Hero />
      <Slider />
      <Projects />
      <Members />
      <h1>{"Azo bo'lish"}</h1>
      <Events />
      {/* <AboutUs /> */}
      <News />
      <Statistics />
      <Partners />
      <h1>Hamkorlik uchun aziza qoldirish</h1>
      <Initiators />
      <Services />
      <h1>Hizbatlardan foydalanish uchun aziza qoldirish</h1>

      <Contact />
      <AskedQuestions />
    </>
  );
}