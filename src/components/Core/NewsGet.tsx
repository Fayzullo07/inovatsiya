import { newsGetAPI } from "@/api/AdminRequest";
import { useQuery } from "@tanstack/react-query";
import { ClockIcon } from "lucide-react";
import moment from "moment";
import { useLocale } from "next-intl";
import Image from "next/image"
import Link from "next/link";

const NewsGet = ({ height = 60, search = "", amount = 0 }) => {
    const locale = useLocale();
    const { data } = useQuery({
        queryKey: ["news", search],
        queryFn: async () => {
            return await newsGetAPI({ search });
        }
    });
    let data_item = [];
    if (amount != 0) {
        data_item = data?.data.news.slice(0, amount);
    } else {
        data_item = data?.data.news;
    }
    return (
        <>
            {data_item.map((item: any, i: number) => (
                <div key={i} className=" bg-white border-slate-200 shadow shadow-slate-950/5 rounded overflow-hidden" >
                    <div className={`h-${height} overflow-hidden relative `}>
                        {/* <!-- Image --> */}
                        <div className="bg-gradient-to-t z-10 from-black opacity-60 w-full h-full absolute top-0 hover_scale"></div>
                        <Image
                            src={item.img}
                            className="object-cover w-full hover:scale-110 duration-300 img"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }} // optional
                            alt="Image"
                        />
                        <h2 className=" tracking-wider text-base font-extrabold leading-snug z-10 absolute bottom-2 px-2 text-white drop-shadow-2xl">
                            {item.title}
                        </h2>
                        <div className="z-10 flex justify-between items-center space-x-2 absolute top-2 px-2 w-full">
                            <Link href={`/${locale}/main_all/news/${item._id}`} className="inline-flex justify-center whitespace-nowrap rounded-lg bg-green-500 px-3 py-2 text-sm font-medium text-white hover:bg-green-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors">Read More</Link>
                            <div className="text-sm text-white flex items-center gap-2">
                                <ClockIcon size={20} />
                                <p className=" drop-shadow-2xl">{moment(item.createdAt).format("ll")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )

            )}
        </>
    )
}

export default NewsGet;