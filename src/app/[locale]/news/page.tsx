import Container from "@/components/Core/Container"
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ClockIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const News = () => {
    const locale = useLocale();

    const data_news = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},

    ]
    return (
        <div>
            <div className=" h-32 overflow-hidden relative">
                <Image
                    src="https://ngoshivam.org/images/news-event.jpg"
                    className="object-cover "
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                    alt="Image"
                />

                <h1 className=" absolute md:top-[38%] top-[20%] md:left-[48%] left-[40%] md:text-4xl text-2xl text-white font-extrabold">News</h1>
            </div>
            <Container>
                <div className="lg:px-15 md:px-10 p-5">
                    <div className="flex items-center pb-4">
                        <Link href={"/"}>

                            <Button variant={"link"} className="text-lg">Home</Button>
                        </Link>
                        <ChevronRightIcon size={16} />
                        <div className=" text-lg text-gray-400">News</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {data_news.map((item, i) => (
                            <div key={i} className=" bg-white border-slate-200 shadow shadow-slate-950/5 rounded overflow-hidden" >
                                <div className=" overflow-hidden relative ">
                                    {/* <!-- Image --> */}
                                    <div className="bg-gradient-to-t z-10 from-black opacity-60 w-full h-full absolute top-0 hover_scale"></div>
                                    <Image
                                        src="https://cruip-tutorials.vercel.app/equal-height-cards/equal-height-01.jpg"
                                        className="object-cover h-48 w-full hover:scale-110 duration-300 img"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} // optional
                                        alt="Image"
                                    />
                                    <h2 className=" tracking-wider text-base font-extrabold leading-snug z-10 absolute bottom-2 px-2 text-white drop-shadow-2xl">
                                        Unlocking the Secrets of Productivity
                                    </h2>
                                    <div className="z-10 flex justify-between items-center space-x-2 absolute top-2 px-2 w-full">
                                        <Link href={`/${locale}/news/1`} className="inline-flex justify-center whitespace-nowrap rounded-lg bg-green-500 px-3 py-2 text-sm font-medium text-white hover:bg-green-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors">Read More</Link>
                                        <div className="text-sm text-white flex items-center gap-2">
                                            <ClockIcon size={20} />
                                            <b className=" drop-shadow-2xl">03.03.2024</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default News;