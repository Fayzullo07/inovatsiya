"use client"
import { membersGetAPI } from "@/api/AdminRequest";
import { useQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link";
import { useMemo } from "react";
import Loading from "../Core/Loading";
import Modal from "../Core/Modal";
import { ScrollArea } from "../ui/scroll-area";

const PhysicalUsersGet = ({ amount = 0 }) => {
    const locale = useLocale();
    const t = useTranslations("Members");
    const { data, isLoading, isError } = useQuery({
        queryKey: ["phsicalUsers"],
        queryFn: async () => {
            return await membersGetAPI({ legal: false });
        }
    });

    const dataItem = useMemo(() => {
        if (data && data.data && data.data.membersPhysical) {
            if (amount !== 0) {
                return data.data.membersPhysical.slice(0, amount);
            } else {
                return data.data.membersPhysical;
            }
        }
        return [];
    }, [data, amount]);
    if (isLoading) return <Loading />;
    if (isError) return <div>Xatolik yuz berdi...</div>;

    return (
        <>
            {dataItem.map((item: any, i: number) => (
                <div key={i} className="flex items-start flex-col gap-2 p-5 w-full bg-slate-50 shadow hover:shadow-xl duration-300  rounded-2xl relative">
                    <div className="grid grid-cols-3 gap-4 ">
                        <div className=" col-span-1 overflow-hidden rounded-full">
                            <Image
                                src={item.photo}
                                className=" object-cover transition duration-200 hover:scale-105"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100px', height: '100px' }} // optional
                                alt="Image"
                            />
                        </div>
                        <div className="col-span-2 grid">
                            <h1 className="text-maincolor text-base md:text-xl font-[500] tracking-wide capitalize">{item.firstname}{" "}{item.lastname}</h1>
                            <p className="text-base">{t('position')}: <span className="text-maincolor text-xl">{item.translations[`${locale}`].workPosition}</span> </p>
                            <p className="text-base">{t('work')}: <span className="text-maincolor text-xl">{item.translations[`${locale}`].workAddress}</span> </p>
                        </div>
                    </div>

                    <div
                        className=" whitespace-pre-line text-base mb-6 text-left"
                        style={{ whiteSpace: "pre-line" }}
                        dangerouslySetInnerHTML={{ __html: `${item.translations[`${locale}`].desc.substring(0, 160)}` }}
                    />
                    <div className="flex justify-between items-center absolute bottom-0 right-0">
                        <Modal button={<button className="absolute bottom-0 right-0 z-10 inline-flex justify-center whitespace-nowrap rounded-tl-3xl bg-maincolor px-3 py-2 text-base font-medium text-white hover:px-4 hover:py-3 duration-300">{t('more')}</button>}>
                            <ScrollArea className="h-[60vh] py-4">

                                <div className="grid grid-cols-3 gap-4 items-center max-w-xl mx-auto ">
                                    <div className=" col-span-1 overflow-hidden rounded-full">
                                        <Image
                                            src={item.photo}
                                            className=" object-cover transition duration-200 hover:scale-105 rounded-full"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '150px', height: '150px' }} // optional
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <h1 className="text-maincolor text-base md:text-2xl font-[500] tracking-wide capitalize">{item.firstname}{" "}{item.lastname}</h1>
                                        <p className="text-base">{t('position')}: <span className="text-maincolor text-xl">{item.translations[`${locale}`].workPosition}</span> </p>
                                        <p className="text-base">{t('work')}: <span className="text-maincolor text-xl">{item.translations[`${locale}`].workAddress}</span> </p>
                                        <p className="text-base">{t('activity')}: <span className="text-maincolor text-xl">{item.translations[`${locale}`].activity}</span> </p>
                                        <p className="text-base">ScienceID: <span className="text-maincolor text-xl">{item.scienceID}</span> </p>
                                    </div>
                                </div>
                                <div
                                    className=" whitespace-pre-line text-base mb-6 text-left tiptap"
                                    style={{ whiteSpace: "pre-line" }}
                                    dangerouslySetInnerHTML={{ __html: `${item.translations[`${locale}`].desc}` }}
                                />
                            </ScrollArea>
                        </Modal>
                    </div>
                </div>
            )

            ).reverse()}
        </>
    )
}

export default PhysicalUsersGet;