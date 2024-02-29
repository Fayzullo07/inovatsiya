"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Members from "@/components/Members";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  useEffect(() => {
    AOS.init({ easing: "ease-in-sine", delay: 0 });
    AOS.refresh();
  }, []);
  return (
    <>
      <Hero />
      <AboutUs />
      <Events />
      <Partners />
      <Members />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}
