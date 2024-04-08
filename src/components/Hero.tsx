'use client'
import Image from "next/image";
import Container from "./Core/Container";
import { ArrowRightIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useTypewriter } from 'nextjs-simple-typewriter'
import { useQuery } from "@tanstack/react-query";
import { heroGetOneAPI } from "@/api/AdminRequest";
import Loading from "./Core/Loading";

const Hero = () => {
    const t = useTranslations("Hero");
    const locale = useLocale();

    const id = "660cd8c79982414aa6f44d17"


    const { data, isError, isLoading } = useQuery({
        queryKey: ["heroid"],
        queryFn: async () => {
            return await heroGetOneAPI({ id });
        },

    });

    const [text] = useTypewriter({
        words: [data?.data.hero.translations[`${locale}`].desc],
        typeSpeed: 40
    });
    if (isLoading) {

        return (
            <Loading />
        );
    }
    if (isError) return <div>Xatolik yuz berdi...</div>;

    return (
        <div className="py-10 sm:py-5">

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="grid items-center justify-between gap-4" data-aos="fade-up" data-aos-delay="300">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl">
                            <span className="text-maincolor">{data?.data.hero.translations[`${locale}`].title.split(" ").slice(0, 2).join(" ")} </span>
                            <span >{data?.data.hero.translations[`${locale}`].title.split(" ").slice(2).join(" ")}</span>
                        </h1>
                        <p className="mx-auto w-full min-h-20 text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                            {data?.data.hero.translations[`${locale}`].desc}
                        </p>
                        <div className="flex flex-wrap gap-2 md-gap-4 ">
                            <a href="#contact" className="flex w-full sm:w-auto items-center px-5 py-2 text-lg text-white bg-maincolor rounded-md hover:scale-105 duration-300">
                                {t("contact")}
                                <ArrowRightIcon className="w-5 h-5 ml-1" />
                            </a>
                            <a href="#about" className="w-full sm:w-auto px-5 py-2 text-lg text-maincolor bg-white border border-maincolor rounded-md hover:bg-maincolor hover:text-white duration-300">
                                {t("about")}
                            </a>

                        </div>
                    </div>

                    <div className="w-full h-auto overflow-hidden rounded-md sm:rounded-xl" data-aos="fade-down" data-aos-delay="600">
                        <Image
                            src={data?.data.hero.photo}
                            width={0}
                            height={0}
                            className="transition hover:scale-110 duration-300 shadow-xl"
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }} // optional
                            alt="Image"
                        />
                    </div>

                </div>
            </Container>

        </div>
    )
}

export default Hero;