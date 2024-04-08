"use client"
import { aboutGetOneAPI } from "@/api/AdminRequest";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Image from "next/image";

const AboutUs = () => {
    const id = "660ce53d9982414aa6f44ded"
    const locale = useLocale();

    const { data, isError, isLoading } = useQuery({
        queryKey: ["aboutid"],
        queryFn: async () => {
            return await aboutGetOneAPI({ id });
        },

    });

    if (isLoading) {

        return (
            <div className="flex items-center justify-center h-screen">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
                    </div>
                </div>
            </div>
        );
    }
    if (isError) return <div>Xatolik yuz berdi...</div>;
    return (
        <div>
            <div className=" col-span-2 bg-white border-slate-200 shadow shadow-slate-950/5 rounded overflow-hidden" >
                {data?.data.about && (

                    <div className=" overflow-hidden ">

                        {/* <!-- Image --> */}
                        <div className="w-full h-auto mx-auto flex justify-center border p-2">
                            <Image
                                src={data.data.about.photo}
                                width={0}
                                height={0}
                                className="object-cover"
                                sizes="100vw"
                                style={{ width: 'auto', height: 'auto' }} // optional
                                alt="Image"
                            />
                        </div>


                        <div className="p-4 text-gray-600 text-lg">
                            <div
                                className=" whitespace-pre-line tiptap"
                                style={{ whiteSpace: "pre-line" }}
                                dangerouslySetInnerHTML={{ __html: data.data.about.translations[`${locale}`].desc }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AboutUs;