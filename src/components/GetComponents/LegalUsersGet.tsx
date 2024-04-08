"use client"
import { membersGetAPI } from "@/api/AdminRequest";
import { useQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link";
import { useMemo } from "react";
import Loading from "../Core/Loading";
import { CircleUserRound } from "lucide-react";
import Modal from "../Core/Modal";

const LegalUsersGet = ({ amount = 0 }) => {
    const locale = useLocale();
    const t = useTranslations("Members");
    const { data, isLoading, isError } = useQuery({
        queryKey: ["legalUsers"],
        queryFn: async () => {
            return await membersGetAPI({ legal: true });
        }
    });

    const dataItem = useMemo(() => {
        if (data && data.data && data.data.membersLegal) {
            if (amount !== 0) {
                return data.data.membersLegal.slice(0, amount);
            } else {
                return data.data.membersLegal;
            }
        }
        return [];
    }, [data, amount]);
    if (isLoading) return <Loading />;
    if (isError) return <div>Xatolik yuz berdi...</div>;

    return (
        <>
            {dataItem.map((item: any, i: number) => (
                <div key={i} className="flex items-start flex-col gap-2 p-5 w-full bg-slate-50 shadow hover:shadow-xl duration-300  rounded-2xl relative" >
                    <div className="grid grid-cols-6 gap-4 ">
                        <div className=" col-span-1 flex items-center justify-center">

                            {/* <Building2Icon size={40} className="text-maincolor" /> */}
                            <CircleUserRound size={40} strokeWidth={1} className="text-maincolor" />
                        </div>
                        <div className="col-span-5 grid">
                            <h1 className="text-maincolor text-base md:text-xl font-[500] tracking-wide capitalize">{item.translations[`${locale}`].name}</h1>
                            <p className="text-base">{t('organ_type')}: <span className="text-maincolor text-xl">{item.translations[`${locale}`].activity}</span> </p>
                            <p className="text-base">{t('organ_address')}: <span className="text-maincolor text-xl">{item.translations[`${locale}`].address}</span> </p>
                        </div>
                    </div>
                    <div
                        className=" whitespace-pre-line text-base mb-6 text-left"
                        style={{ whiteSpace: "pre-line" }}
                        dangerouslySetInnerHTML={{ __html: `${item.translations[`${locale}`].desc.substring(0, 160)}` }}
                    />

                    <div className="flex justify-between items-center absolute bottom-0 right-0">
                        <Modal button={<button className="absolute bottom-0 right-0 z-10 inline-flex justify-center whitespace-nowrap rounded-tl-3xl bg-maincolor px-3 py-2 text-base font-medium text-white hover:px-4 hover:py-3 duration-300">Read More</button>}>
                            <div className="col-span-3 grid">
                                <h1 className="text-maincolor text-base md:text-xl font-[500] tracking-wide capitalize">{item.translations[`${locale}`].name}</h1>
                                <p className="text-base">{t('organ_type')}: <span className="text-maincolor text-xl">{item.translations[`${locale}`].activity}</span> </p>
                                <p className="text-base">{t('organ_address')}: <span className="text-maincolor text-xl">{item.translations[`${locale}`].address}</span> </p>
                            </div>
                            <div
                                className=" whitespace-pre-line text-base mb-6 text-left tiptap"
                                style={{ whiteSpace: "pre-line" }}
                                dangerouslySetInnerHTML={{ __html: `${item.translations[`${locale}`].desc.substring(0, 160)}` }}
                            />
                        </Modal>
                    </div>
                </div>

            )

            ).reverse()}
        </>
    )
}

export default LegalUsersGet;