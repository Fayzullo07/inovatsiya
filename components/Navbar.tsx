"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [stickyNav, setStickyNav] = useState(false);

    const pathname = usePathname();

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
        { name: "Dashboard", slug: "/dashboard" },
    ];
    return (
        <header className={`${pathname.split("/")[1] == "dashboard" ? "hidden" : ""}`}>
            <nav className={`${stickyNav ? "active" : ""}  flex flex-wrap items-center justify-between w-full py-4  md:py-2 px-4 text-lg text-gray-700 bg-white z-10`}>
                <div data-aos="fade-left" data-aos-delay="100">
                    <Link href={"/"} className="flex justify-center items-center gap-2">
                        <div className=" h-12 w-1 bg-green-200 rounded-full">
                            <div className="h-8 w-1 bg-blue rounded-full"></div>
                        </div>
                        <div>
                            <span className="text-green-500">New</span>
                            <br />
                            <span className="text-blue-500 font-bold">Innovatsiya</span>
                        </div>

                    </Link>
                </div>

                <div className="h-6 w-6 cursor-pointer lg:hidden block" onClick={() => setNav(!nav)}>

                    <MenuIcon />
                </div>

                <div className={`${nav ? "" : "hidden"} w-full lg:flex md:items-center lg:w-auto overflow-auto bg-white z-10`} id="menu">
                    <ul
                        className="pt-2 text-lg text-gray-700 lg:flex lg:justify-between lg:pt-0">
                        {navbar.map((item, i) => (
                            <li key={item.name} data-aos="fade-right" data-aos-delay={(i + 1) * 100}>
                                <Link href={item.slug} className="md:p-4 py-2 block hover:text-purple-400">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;