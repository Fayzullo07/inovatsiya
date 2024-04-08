"use client"
import Image from "next/image";
import Container from "./Core/Container";
import Link from "next/link";
import { useLocale } from "next-intl";
import { partnersGetAPI } from "@/api/AdminRequest";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Core/Loading";
import { HandshakeIcon, UserIcon } from "lucide-react";

const Partners = () => {
    const locale = useLocale();
    const data_partners = [
        {
            img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80",
            name: "John Doe",
            setup: "CEO of Something",
            desc: "This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"
        },
        {
            img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80",
            name: "John Doe",
            setup: "CTO of Business",
            desc: "Thanks for creating this service. My life is so much easier. Thanks for making such a great product."
        },
        {
            img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80",
            name: "John Smith",
            setup: "Creator of Stuff",
            desc: "Packed with awesome content and exactly what I was looking for. I would highly recommend this to anyone."
        },
        {
            img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80",
            name: "John Smith",
            setup: "Creator of Stuff",
            desc: "Packed with awesome content and exactly what I was looking for. I would highly recommend this to anyone."
        },
        {
            img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80",
            name: "John Doe",
            setup: "CEO of Something",
            desc: "This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"
        },
        {
            img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80",
            name: "John Doe",
            setup: "CTO of Business",
            desc: "Thanks for creating this service. My life is so much easier. Thanks for making such a great product."
        },

    ]

    const { data, isLoading, isError } = useQuery({
        queryKey: ["partners"],
        queryFn: async () => {
            return await partnersGetAPI();
        }
    });

    if (isLoading) return <Loading />;
    if (isError) return <div>Xatolik yuz berdi...</div>;

    return (
        <div className="pb-5 sm:pb-10 bg-slate-50">
            <Container>
                <div className="flex justify-between items-center py-5 md:py-10" >
                    <h2 className="text-3xl font-bold text-maincolor" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">{"Hamkorlarimiz"}</h2>
                    {/* <Link href={`/${locale}/main_all/partners`}>
                        <button className="w-full sm:w-auto px-2 py-1 text-lg text-maincolor bg-white border border-maincolor rounded-md hover:bg-maincolor hover:text-white duration-300">{"Barcha hamkorlarimiz"}</button>
                    </Link> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

                    {data?.data.partners.map((item: any, i: number) => (
                        <div key={i} className="relative bg-white  p-6 border border-gray-100 rounded-lg" >

                            <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-green-300  to-maincolor"></span>

                            <div className="my-4">
                                <div className="flex items-center gap-4">
                                    <HandshakeIcon size={40} className="text-maincolor" />
                                    <h2 className="text-maincolor text-2xl font-bold pb-2">{item.translations[`${locale}`].title}</h2>
                                </div>
                                <div
                                    className=" whitespace-pre-line text-gray-600 py-1 text-base"
                                    style={{ whiteSpace: "pre-line" }}
                                    dangerouslySetInnerHTML={{ __html: `${item.translations[`${locale}`].desc.substring(0, 160)}...` }}
                                />
                            </div>

                            <div className="flex justify-end">
                                <button className="px-2 py-1 text-lg  text-maincolor hover:text-white border border-maincolor font-semibold rounded hover:bg-maincolor">Read more</button>
                            </div>
                        </div>
                    ))}


                </div>
            </Container>

        </div>

    )
}

export default Partners;