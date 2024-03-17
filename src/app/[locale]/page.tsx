"use client"
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import OurTeam from '@/components/OurTeam';
import Statistics from '@/components/Statisticts';

import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";
import News from '@/components/News';
import WhatWeOffer from '@/components/WhatWeOffer';
import OurCompany from '@/components/OurCompany';
import Test from '@/components/Test';
import Container from '@/components/Core/Container';
import Image from 'next/image';
import Events from '@/components/Events';
import Partners from '@/components/Partners';
import Members from '@/components/Members';
import Services from '@/components/Services';
import Projects from '@/components/Projects';

export default function Index() {
  useEffect(() => {
    AOS.init({ once: true, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();

    const userToken = localStorage.getItem("token");

    if (userToken) {
      console.log("Token mavjud:", userToken);
    } else {
      console.log("Token mavjud emas");
    }
  }, []);



  return (
    <>
      {/* <div>
        <Container>
          <div className="overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <Image
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              width={0}
              height={0}
              className=" transition hover:scale-110 duration-300"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} // optional
              alt="Image"
            />
          </div>
        </Container>
      </div> */}
      {/* <Test /> */}
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <Statistics />
      {/* <OurCompany /> */}
      <News />
      {/* <OurTeam /> */}
      {/* <Events /> */}
      <Partners />
      {/* <Members /> */}
      {/* <Services /> */}
      <Projects />
      <Contact />
    </>
  );
}