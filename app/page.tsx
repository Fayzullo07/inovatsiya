"use client";

import Contact from "@/components/Contact/page";
import Partners from "@/components/Partners/page";
import Projects from "@/components/Projects/page";

export default function Home() {



  return (
    <main className="min-h-screen">
      <Partners/>
      <Projects/>
      <Contact/>
    </main>
  );
}
