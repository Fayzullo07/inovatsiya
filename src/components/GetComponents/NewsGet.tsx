"use client"
import { newsGetAPI } from "@/api/AdminRequest";
import { useQuery } from "@tanstack/react-query";
import { ClockIcon } from "lucide-react";
import moment from "moment";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link";
import { useMemo } from "react";
import Loading from "../Core/Loading";

const NewsGet = ({ search = "", amount = 0 }) => {
    const locale = useLocale();
    const t = useTranslations("AboutUs");
    const { data, isLoading, isError } = useQuery({
        queryKey: ["news", search],
        queryFn: async () => {
            return await newsGetAPI({ search });
        }
    });

    const dataItem = useMemo(() => {
        if (data && data.data && data.data.news) {
            if (amount !== 0) {
                return data.data.news.slice(0, amount);
            } else {
                return data.data.news;
            }
        }
        return [];
    }, [data, amount]);
    if (isLoading) return <Loading />;
    if (isError) return <div>Xatolik yuz berdi...</div>;

    return (
        <>
            {dataItem.map((item: any, i: number) => (
                <div key={i} className={`relative bg-white border-slate-200 shadow shadow-slate-950/5 rounded overflow-hidden`} >
                    <div className={`h-56 overflow-hidden  `}>
                        {/* <!-- Image --> */}
                        <div className="bg-gradient-to-t z-10 from-black opacity-60 w-full h-full absolute top-0 hover_scale"></div>
                        <Image
                            src={item.photo}
                            className="object-cover h-56 w-full hover:scale-110 duration-300 img"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }} // optional
                            alt="Image"
                        />
                        <h2 className=" tracking-wider text-base font-extrabold leading-snug z-10 absolute bottom-0 p-2 text-white bg-maincolor rounded-tr-3xl drop-shadow-2xl">
                            {item.translations[`${locale}`].title.substr(0, 25)}
                        </h2>

                        <Link href={`/${locale}/main_all/news/${item._id}`} className="absolute top-0 left-0 z-10 inline-flex justify-center whitespace-nowrap rounded-br-3xl bg-maincolor px-3 py-2 text-base font-medium text-white hover:px-4 hover:py-3 duration-300">{t("button")}</Link>

                        <div className=" absolute top-0 right-0 text-sm bg-maincolor p-2 rounded-bl-3xl text-white flex items-center gap-2">
                            <ClockIcon size={20} className="ml-2" />
                            <p className=" drop-shadow-2xl">{moment(item.createdAt).format("ll")}</p>
                        </div>
                    </div>
                </div>
            )

            ).reverse()}
        </>
    )
}

export default NewsGet;