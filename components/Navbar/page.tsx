"use client"
import { useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";
import Container from "../Container";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [stickyNav, setStickyNav] = useState(false);

    const handleScroll = () => {
        window.pageYOffset >= 10 ? setStickyNav(true) : setStickyNav(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    });

    const navbar = [
        { name: "Yangiliklar", slug: "/news" },
        { name: "Loyihalar", slug: "/projects" },
        { name: "Hamkorlar", slug: "/partners" },
        { name: "Tadbirlar", slug: "/events" },
        { name: "Tashabbuskorlar", slug: "/initiators" },
        { name: "Xizmatlar", slug: "/services" },
        { name: "Aql Markazi", slug: "/services" },
        { name: "Bog'lanish", slug: "/boglanish" },
        { name: "Biz haqimizda", slug: "/#about" },
    ];
    return (
        <header className="h-[75px]">
            <Container>
                <nav className={`${stickyNav ? "active" : ""} flex flex-wrap items-center justify-between w-full py-4  md:py-2 px-4 text-lg text-gray-700 bg-white z-10`}>
                    <div data-aos="fade-right" data-aos-delay="100">
                        <Link href={"/"} className="flex justify-center items-center gap-2">
                            <div className="h-12 w-1 bg-green-200 rounded-full">
                                <div className="h-8 w-1 bg-green-500 rounded-full"></div>
                            </div>
                            <div>
                                <span className=" text-green-500">New</span>
                                <br />
                                <span className="text-blue-500 font-bold">Innovatsiya</span>
                            </div>

                        </Link>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer lg:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => setNav(!nav)}
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>

                    <div className={`${nav ? "" : "hidden"}  w-full lg:flex md:items-center md:w-auto`} id="menu">
                        <ul
                            className="
                  pt-4
                  text-base text-gray-700
                  md:flex
                  md:justify-between 
                  md:pt-0"
                        >
                            {navbar.map((item, i) => (
                                <li key={item.name} data-aos="fade-left" data-aos-delay={(i + 1) * 100}>
                                    <Link href={item.slug} className="md:p-4 py-2 block hover:text-purple-400">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* <ModeToggle/> */}
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Navbar;