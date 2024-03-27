"use client"
import { newGetOneAPI } from "@/api/AdminRequest";
import NewsGet from "@/components/Core/NewsGet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { ChevronRightIcon, ClockIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const New = ({ params }: { params: any }) => {
    const { id } = params;
    const locale = useLocale();
    const { data } = useQuery({
        queryKey: ["new", id],
        queryFn: async () => {
            return await newGetOneAPI({ id });
        }
    });

    return (
        <div>
            <div className="">
                <div className="flex items-center mb-4">
                    <Link href={"/"}>
                        <Button variant={"link"} className="text-lg pl-0">Bosh sahifa</Button>
                    </Link>
                    <ChevronRightIcon size={16} />
                    <div className=" text-lg text-gray-400">Yangiliklar</div>
                    <ChevronRightIcon size={16} />
                    <div className=" text-lg text-gray-400">Title</div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

                    <div className="">
                        <div className="sticky top-24">

                            <ScrollArea className="h-[85vh]">
                                <div className="grid grid-cols-1 gap-4 md:gap-8">
                                    <NewsGet height={"36"} />
                                </div>
                            </ScrollArea>
                        </div>
                    </div>
                    <div className=" col-span-2 bg-white border-slate-200 shadow shadow-slate-950/5 rounded overflow-hidden" >
                        {data?.data.news && (

                            <div className=" overflow-hidden ">


                                {/* <!-- Image --> */}
                                <div className="w-full h-auto mx-auto flex justify-center border p-2">
                                    <Image
                                        src={data.data.news.img}
                                        width={0}
                                        height={0}
                                        className="object-cover"
                                        sizes="100vw"
                                        style={{ width: 'auto', height: 'auto' }} // optional
                                        alt="Image"
                                    />
                                </div>
                                {/* <Image
                                    src={data.data.news.img}
                                    className="object-cover h-48 w-full"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt="Image"
                                /> */}

                                <div className="z-10 flex justify-between items-center space-x-2 text-green-500 w-full p-2">
                                    <h2 className=" tracking-wider text-xl font-extrabold  ">
                                        Unlocking the Secrets of Productivity
                                    </h2>
                                    <div className="text-sm text-black flex items-center gap-2">
                                        <ClockIcon size={20} />
                                        <b className=" drop-shadow-2xl">03.03.2024</b>
                                    </div>
                                </div>
                                <div className="p-4 text-gray-600 text-lg">
                                    <div
                                        className=" whitespace-pre-line "
                                        style={{ whiteSpace: "pre-line" }}
                                        dangerouslySetInnerHTML={{ __html: data.data.news.desc }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>




                </div>
            </div>
        </div>
    )
}

export default New;