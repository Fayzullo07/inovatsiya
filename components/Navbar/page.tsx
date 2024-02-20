"use client"
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";

const Navbar = () => {
    const [nav, setNav] = useState(false);

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
        <header>
            <nav className="flex flex-wrap items-center justify-between w-full py-4  md:py-2 px-4 text-lg text-gray-700 bg-white fixed z-10">
                <div>
                    <Link href={"/"} className="flex justify-center items-center gap-2">
                        <div className=" h-12 w-1 bg-green-200 rounded-full">
                            <div className="h-8 w-1 bg-blue rounded-full"></div>
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
                        {navbar.map(item => (
                            <li key={item.name}>
                                <Link href={item.slug} className="md:p-4 py-2 block hover:text-purple-400">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* <ModeToggle/> */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;