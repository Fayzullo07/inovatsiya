"use client"
import { usePathname } from "next/navigation";
import Container from "./Core/Container";
import { Twitter } from "lucide-react";

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className={`${pathname.split("/")[1] == "dashboard" ? "hidden" : ""}`}>
            <div id="about" className="footer-2 bg-gray-800 pt-6 md:pt-12">
                <Container>
                    <section className="bg-gray-800 -mt-12 py-16">
                        <div className="flex flex-col md:flex-row text-white text-center">
                            <div className="p-6 md:w-1/3">
                                <h1 className="uppercase text-2xl font-bold leading-none tracking-normal pb-5">Location</h1>
                                <p>Metropolitan City of Bari,<br />
                                    70121, Italy</p>
                            </div>
                            <div className="p-6 md:w-1/3">
                                <h1 className="uppercase text-2xl font-bold  leading-none tracking-normal">Around the web</h1>
                                <div className="flex justify-center py-5 ">
                                    <span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
                                        <Twitter className="fill-current w-5 h-5 hover:text-blue-900" />
                                    </span>
                                    <span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
                                        <Twitter className="fill-current w-5 h-5 hover:text-blue-900" />
                                    </span>
                                    <span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
                                        <Twitter className="fill-current w-5 h-5 hover:text-blue-900" />
                                    </span>
                                    <span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
                                        <Twitter className="fill-current w-5 h-5 hover:text-blue-900" />
                                    </span>
                                </div>

                            </div>
                            <div className="p-6 md:w-1/3">
                                <h1 className="uppercase text-2xl font-bold leading-none tracking-normal pb-5">About freelancer</h1>
                                <p className="text-xl break-normal">Freelance is a free to use, MIT licensed Tailwindcss theme created by
                                    <a className="text-green-500" href="https://twitter.com/framansi">Francesco Mansi</a>
                                </p>
                            </div>
                        </div>
                    </section>

                </Container>
                <footer className="bg-gray-900 h-16">
                    <p className="pt-5 text-center text-white">Copyright © Your Website 2024</p>
                </footer>
            </div >
        </footer>
    )
}

export default Footer;