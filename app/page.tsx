"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import AboutUs from "@/components/AboutUs/page";
import Contact from "@/components/Contact/page";
import Events from "@/components/Events/page";
import Hero from "@/components/Hero/page";
import Members from "@/components/Members/page";
import Partners from "@/components/Partners/page";
import Projects from "@/components/Projects/page";

export default function Home() {
  useEffect(() => {
    AOS.init({ easing: "ease-in-sine", delay: 0 });
    AOS.refresh();
  }, []);
  return (
    <main className="min-h-screen">
      <Hero/>
      <AboutUs/>
      <Events/>
      <Partners/>
      <Members/>
      <Projects/>
      <Contact/>
    </main>
  );
}
