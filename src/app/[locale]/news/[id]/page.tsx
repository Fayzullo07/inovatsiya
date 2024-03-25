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
                                    <NewsGet />
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
                                <div className="p-2 text-gray-600 text-lg">
                                    <p>Lorem ipsum dolor sit amet consectetur  elit. Doloribus nisi vitae mollitia voluptatibus, unde a quidem provident maiores sunt eum quo sapiente minima vel deleniti ipsum aut explicabo cupiditate porro optio neque molestiae. Voluptate, obcaecati sequi harum adipisci, repellat minima tempora quos alias quaerat voluptates fugiat. Animi incidunt ad sint eum blanditiis similique maiores doloremque. A mollitia ducimus vel iure cupiditate ratione tempore temporibus hic ad numquam! Sed pariatur odit ipsam veniam velit molestiae minus modi inventore facilis. Asperiores obcaecati deleniti blanditiis libero exercitationem accusantium impedit qui culpa suscipit iure! Quas necessitatibus, fugiat repellendus nihil neque dolor quidem delectus quos saepe explicabo eligendi quo eius porro velit voluptatem nam corrupti dolorum similique non provident! Sunt maiores, mollitia, debitis voluptas velit, eos error inventore earum ex dolores natus officia fugit nemo? Corrupti voluptate nemo, totam eius accusantium provident ipsa nulla voluptatem ducimus nam. Ad corporis perferendis ex reprehenderit ut commodi nisi dolore facilis, pariatur blanditiis aliquam molestias dolores architecto laboriosam quos a? Aliquid doloribus, necessitatibus facere impedit nam numquam sit, voluptatem voluptates, ut accusantium minima dignissimos aperiam! Voluptatum explicabo provident incidunt fuga, iusto ea excepturi ad dignissimos consequuntur quia, recusandae possimus porro sit, nisi quos libero. Ipsa quidem sit odit non voluptatum laudantium tempora perspiciatis incidunt omnis aut, nostrum reprehenderit officiis unde corrupti voluptas itaque expedita ad ab atque asperiores, culpa illo ex commodi quo? Ipsam consectetur, aperiam accusamus fuga nobis quibusdam esse earum impedit quo fugit ullam libero velit deleniti iure laboriosam molestias obcaecati a dolore unde ipsa! Sunt voluptatum at culpa dolore alias dolores voluptatem ea. Dolores tempora blanditiis et, totam libero fugit at deleniti numquam impedit obcaecati consequuntur optio non adipisci necessitatibus eaque iusto saepe sapiente iste aliquid. Illo quo dignissimos nobis repudiandae, dolores, aut debitis minima vel esse sed doloremque assumenda earum soluta at reprehenderit tenetur praesentium voluptas molestiae facere? Ex sit assumenda possimus quos accusantium ad asperiores facilis omnis. Dolorum, odit? Rerum quos unde explicabo nostrum voluptatibus temporibus facilis velit error voluptatum animi accusamus quibusdam doloremque, sunt dolor amet in ut odit. Necessitatibus eligendi eos est ipsum possimus delectus neque a fugiat aut architecto sequi, magni veritatis natus beatae doloremque amet voluptatum! Enim laboriosam, labore molestias nemo nesciunt debitis perferendis est vitae numquam corporis harum possimus similique nulla. Cum sequi ea voluptas voluptatum delectus, necessitatibus molestias debitis maxime sunt at quod nihil corporis voluptatem libero. Culpa dignissimos sequi quia, accusamus dolorem minima voluptatibus. Praesentium nihil mollitia est. Cupiditate, minus. Consequatur laboriosam quo dolorum earum officia ipsam obcaecati aliquid animi architecto voluptas dicta ea, quae est, iure non maiores neque labore cum vel placeat reprehenderit amet numquam. Eum, nesciunt reiciendis eveniet voluptates eius cumque beatae qui modi vero earum doloribus repudiandae aut voluptate, aliquid ut! Repudiandae perferendis nam accusamus, vero tenetur natus dolorum maxime sapiente nostrum hic quibusdam! Aliquam quod sequi fugit et maiores accusantium, amet sunt hic vel ab quisquam repudiandae consequatur, porro labore autem natus deleniti molestias nihil nesciunt! Consequatur ducimus nemo dolore nostrum facilis inventore saepe esse cumque, eaque iure cum, amet nobis quibusdam!</p>
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