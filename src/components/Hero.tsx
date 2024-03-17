'use client'
import Image from "next/image";
import Container from "./Core/Container";
import { ArrowRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { useTypewriter } from 'nextjs-simple-typewriter'

const Hero = () => {
    const t = useTranslations("Hero");

    const [text] = useTypewriter({
        words: [t('desc')],
        typeSpeed: 40
    });
    /* Hook helper */
    // const { isType, isDelete, isDelay, isDone } = helper;
    return (
        <div>
            <Container>
                <section className="py-20 md:px-0 background">
                    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                        <div className="flex flex-wrap items-center sm:-mx-3">
                            <div className="w-full md:w-1/2 md:px-3" data-aos="fade-up" data-aos-delay="300">
                                <div className="w-full pb-4 space-y-4 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl">
                                        <span className="block text-green-500 xl:inline">{t("title").split(" ").slice(0, 2).join(" ")} </span>
                                        <span className="block xl:inline">{t("title").split(" ").slice(2).join(" ")}</span>
                                    </h1>
                                    <p className="mx-auto min-h-20 text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                                        {text}
                                    </p>
                                    <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                        <a href="#contact" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-green-500 rounded-md sm:mb-0 hover:bg-green-700 sm:w-auto">
                                            {t("contact")}
                                            <ArrowRightIcon className="w-5 h-5 ml-1" />
                                        </a>
                                        <a href="#about" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-green-500 bg-white-500 border border-green-500 rounded-md sm:mb-0 hover:bg-green-500 hover:text-white sm:w-auto">
                                            {t("about")}
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 sticky t-0" data-aos="fade-down" data-aos-delay="600">
                                <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                    <Image
                                        src="https://etimg.etb2bimg.com/photo/99614008.cms"
                                        width={0}
                                        height={0}
                                        className=" transition hover:scale-110 duration-300"
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} // optional
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>

        </div>
    )
}

export default Hero;