import Link from "next/link";
import Container from "./Core/Container";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";

const Events = () => {
    const locale = useLocale();
    const [isYuridik, setIsYuridik] = useState(false);
    const data_events = [
        {},
        {},
        {}
    ]
    return (
        <div className="pb-5 sm:pb-10">
            <Container>
                <div className="flex justify-between items-center py-5 md:py-10" >
                    <h2 className="text-3xl font-bold text-maincolor" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">{"Tadbirlar"}</h2>
                    <div className="flex  items-center gap-2">

                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <button className="w-full sm:w-auto px-2 py-1 text-lg text-maincolor bg-white border border-maincolor rounded-md hover:bg-maincolor hover:text-white duration-300">{isYuridik ? "Jismoniy shaxs" : "Yuridik shaxs"}</button>

                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem className=" text-base">
                                    <Link href={`/${locale}/main_all/news`}>
                                        {"Barcha a'zolar"}
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className=" text-base" onClick={() => setIsYuridik(false)}>Yuridik shaxslar</DropdownMenuItem>
                                <DropdownMenuItem className=" text-base" onClick={() => setIsYuridik(true)}>Jismoniy shaxslar</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {data_events.map((item, i) => (

                        <div key={i}
                            className="relative hover:bg-maincolor hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
                            <div className="py-4 px-8">
                                <h4 className="text-lg mb-3 font-semibold">How to be effective at working remotely?</h4>
                                <p className="mb-2 text-sm">
                                    {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                                </p>
                                <div className=" overflow-hidden">

                                    <Image
                                        src={'https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'}
                                        width={0}
                                        height={0}
                                        className="transition hover:scale-110 duration-300 shadow-xl"
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }} // optional
                                        alt="Image"
                                    />
                                </div>

                                <hr className="mt-4" />

                                <span className="text-xs">07-07-2001</span>
                                <button className="absolute bottom-0 right-0 inline-flex justify-center border border-maincolor hover:border-white rounded-tl-3xl hover:bg-maincolor px-3 py-2 text-base font-medium hover:px-4 hover:py-2 duration-300">Read more</button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Events;