"use client"
import Container from "./Core/Container";
import { useLocale } from "next-intl";
import { partnersGetAPI } from "@/api/AdminRequest";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Core/Loading";
import { HandshakeIcon } from "lucide-react";
import Link from "next/link";

const Partners = () => {
    const locale = useLocale();


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
                    <h2 className="text-2xl font-semibold" data-aos="fade-up" data-aos-delay="100" data-aos-duration="100">{"Hamkorlarimiz"}</h2>
                    {/* <Link href={`/${locale}/main_all/partners`}>
                        <button className="w-full sm:w-auto px-2 py-1 text-base text-maincolor bg-white border border-maincolor rounded-md hover:bg-maincolor hover:text-white duration-300">{"Barcha hamkorlarimiz"}</button>
                    </Link> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

                    {data?.data.partners.map((item: any, i: number) => (
                        <div key={i} className="relative bg-white  p-6 border border-gray-100 rounded-lg" >

                            <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-green-300  to-maincolor"></span>

                            <div className="my-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <HandshakeIcon size={30} className="text-maincolor" />
                                    <h2 className="text-xl font-semibold pb-2 text-black">{item.translations[`${locale}`].title}</h2>
                                </div>
                                {item.translations[`${locale}`].desc.length > 160 ? (
                                    <div
                                        className=" whitespace-pre-line text-gray-600 py-1 text-base"
                                        style={{ whiteSpace: "pre-line" }}
                                        dangerouslySetInnerHTML={{ __html: `${item.translations[`${locale}`].desc.substring(0, 160)}...` }}
                                    />
                                ) : (
                                    <div
                                        className=" whitespace-pre-line text-gray-600 py-1 text-base"
                                        style={{ whiteSpace: "pre-line" }}
                                        dangerouslySetInnerHTML={{ __html: `${item.translations[`${locale}`].desc}` }}
                                    />
                                )}

                            </div>

                            <div className=" absolute bottom-4 right-4">
                                <Link href={`/${locale}/main_all/partners/${item._id}`}>
                                    <button className="px-2 py-1 text-base  text-maincolor hover:text-white border border-maincolor font-normal rounded hover:bg-maincolor">Read more</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

        </div>

    )
}

export default Partners;