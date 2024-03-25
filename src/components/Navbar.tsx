"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignRightIcon } from "lucide-react";
import LocalSwitcher from "./Core/local-switcher";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navbar } from "../../data/data";



const Navbar = () => {
    const [stickyNav, setStickyNav] = useState(false);

    const pathname = usePathname();

    const handleScroll = () => {
        window.pageYOffset >= 10 ? setStickyNav(true) : setStickyNav(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    });

    const t = useTranslations('Navbar');

    return (
        <header className={`${pathname.split("/")[2] == "admin" ? "hidden" : ""}`}>
            <nav className={`${stickyNav ? "active" : ""} flex flex-wrap items-center justify-between w-full py-3  md:py-1 px-4 text-lg text-gray-700 bg-white z-[100] shadow`}>

                <div>
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
                <div className={`hidden w-full lg:flex md:items-center lg:w-auto overflow-auto bg-white z-10`}>
                    <ul
                        className="text-xl text-gray-500 lg:flex lg:justify-between">
                        {navbar.map((item, i) => (
                            <li key={item.name}>
                                <Link href={item.slug} className="*:hover:w-full p-2 font-normal block hover:text-green-500 duration-300" >
                                    {t(`${i}`)}
                                    <div className="w-0 duration-1000 h-0.5 bg-green-500"></div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center gap-2">

                    <div className="flex items-center gap-2">
                        <LocalSwitcher />

                        <div className="h-6 w-6 cursor-pointer lg:hidden block" >
                            <Sheet>
                                <SheetTrigger>
                                    <AlignRightIcon />
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetDescription>
                                            <ul
                                                className="text-xl text-gray-700 flex flex-col justify-start items-start">
                                                {navbar.map((item, i) => (
                                                    <li key={item.name} data-aos="fade-left" data-aos-delay={(i + 1) * 100} data-aos-duration={(i + 1) * 100} >
                                                        <SheetClose asChild>
                                                            <Link href={item.slug} className="md:p-3 py-2 flex gap-2 items-center hover:text-green-500 duration-300">
                                                                {item.icon}
                                                                <p>
                                                                    {t(`${i}`)}
                                                                </p>

                                                            </Link>
                                                        </SheetClose>
                                                    </li>
                                                ))}
                                                <Button className="w-full" data-aos="fade-left" data-aos-delay={8 * 100} data-aos-duration={8 * 100} variant="default">{"Bog'lanish"}</Button>
                                            </ul>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>

                        </div>
                    </div>
                    <div className={`hidden lg:flex md:items-center gap-2 lg:w-auto overflow-auto bg-white z-10`}>
                        <Link href={"/#contact"}>
                            <Button variant="default" className="uppercase tracking-wider">{"Bog'lanish"}</Button>
                        </Link>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navbar;