import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import Loading from "../Core/Loading";
import { eventsWaitdGetAPI } from "@/api/AdminRequest";
import moment from "moment";

const EventWaitGet = ({ search = "", amount = 0 }) => {
    const locale = useLocale();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["eventWait"],
        queryFn: async () => {
            return await eventsWaitdGetAPI({ search });
        }
    });

    const dataItem = useMemo(() => {
        if (data && data.data && data.data.eventsWait) {
            if (amount !== 0) {
                return data.data.eventsWait.slice(0, amount);
            } else {
                return data.data.eventsWait;
            }
        }
        return [];
    }, [data, amount]);

    if (isLoading) return <Loading />;
    if (isError) return <div>Xatolik yuz berdi...</div>;

    return (
        <>
            {dataItem.map((item: any, i: number) => (
                <div key={i} data-aos="fade-up" data-aos-delay={(i + 1) * 100} data-aos-duration={(i + 1) * 100}
                    className="relative cursor-pointer hover:shadow-2xl transition duration-300 rounded overflow-hidden shadow-lg">
                    <Link href={`/${locale}/main_all/events/wait/${item._id}`}>
                        <div className="py-4 px-8">
                            <h4 className="text-xl tracking-wide mb-3 font-semibold text-maincolor capitalize">{item.translations[`${locale}`].name}</h4>
                            <p className="text-sm">Tadbirdan kutilayotgan natigalar</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {item.translations[`${locale}`].result}
                            </p>
                            <p className="text-sm">Tadbir maqsadi</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {item.translations[`${locale}`].target}
                            </p>
                            <p className="text-sm">Tadbir shakli</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {item.translations[`${locale}`].form}
                                {"Lorem Ipsum is simply dummy text of the printing and typesetting since the 1500s"}
                            </p>
                            <p className="text-sm">{"Tadbir bo'lib o'tadigan joyi"}</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {item.place}
                            </p>
                            <div className=" overflow-hidden">
                                {/* <ImagesCarusel images={images} /> */}
                                <Image
                                    src={item.photo}
                                    width={0}
                                    height={0}
                                    className="transition hover:scale-110 duration-300 shadow-xl"
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt="Image"
                                />
                            </div>

                            <hr className="mt-4" />
                            <p className="text-sm">Hamkorlar</p>
                            <div>
                                {item.partners.map((item: any, i: number) => (
                                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 m-1">{item}</span>
                                ))}
                            </div>
                            <span className="text-xs text-green-500">{moment(item.date).format("L")} {moment(item.date).format("LT")}</span>
                            <button className="absolute bottom-0 right-0 inline-flex justify-center border border-maincolor hover:border-white hover:text-white rounded-tl-3xl hover:bg-maincolor px-3 py-2 text-base font-medium hover:px-4 hover:py-2 duration-300">{"Ro'yhatdan o'tish"}</button>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default EventWaitGet;