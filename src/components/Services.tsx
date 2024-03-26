"use client"
import { GaugeCircleIcon, HeadsetIcon, ListTodoIcon, NotebookPenIcon, PenToolIcon, RecycleIcon, ShipWheelIcon } from "lucide-react";
import Container from "./Core/Container";
import { useTranslations } from "next-intl";
import Modal from "./Core/Modal";
import { ScrollArea } from "./ui/scroll-area";

const Services = () => {
    const t = useTranslations("OurServices");

    const dataServices = [
        {
            logoIcon: <HeadsetIcon size={40} />
        },
        {
            logoIcon: <GaugeCircleIcon size={40} />
        },
        // {
        //     logoIcon: <ListTodoIcon size={40} />
        // },
        // {
        //     logoIcon: <GaugeCircleIcon size={40} />
        // },
        // {
        //     logoIcon: <RecycleIcon size={40} />
        // },
        // {
        //     logoIcon: <HeadsetIcon size={40} />
        // },
    ]
    return (
        <div id="services">
            <Container>
                <section className="we-offer-area">

                    <div>
                        <div className="site-heading">
                            <div className=" py-4">
                                <h2 className="text-center sm:text-4xl text-3xl tracking-tight font-extrabold text-green-500">{t("hero_title")} <span className=" text-green-500"></span></h2>
                                <p className="font-light text-gray-500 lg:mb-16 text-base sm:text-xl text-start sm:text-center px-4">{t('hero_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1  md:grid-cols-2 gap-4 our-offer-items less-carousel">
                        {/* <!-- Single Item --> */}
                        {dataServices.map((item, i) => (

                            <div key={i} data-aos="fade-up">
                                <div className="item flex flex-col items-center justify-between gap-4 border">
                                    <div className="h-20 w-20 border-[3px] border-green-500 flex items-center justify-center rounded-full">
                                        <div className="bg-green-500 text-white w-16 h-16 flex justify-center items-center rounded-full">
                                            {item.logoIcon}
                                        </div>
                                    </div>
                                    <div className="min-h-40">
                                        <h4 className="text-2xl font-semibold text-center">{t(`data.${i}.title`)}</h4>
                                        <p className="text-base">
                                            {t(`data.${i}.desc`).substring(0, 280)} . . .
                                        </p>
                                    </div>
                                    <Modal button={t("button")}>
                                        <div className="">
                                            <h4 className="text-2xl text-black font-semibold">{t(`data.${i}.title`)}</h4>
                                            <ScrollArea className="h-[70vh] py-4">
                                                <div className="text-start py-4 sm:text-xl text-base">
                                                    <p>
                                                        {t(`data.${i}.desc`)}
                                                    </p>
                                                    <br />
                                                    <p >
                                                        {t(`data.${i}.desc_2`)}
                                                    </p>
                                                    <br />
                                                    <p >
                                                        {t(`data.${i}.desc_3`)}
                                                    </p>
                                                </div>

                                            </ScrollArea>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        ))}
                        {/* <!-- End Single Item --> */}

                    </div>
                </section>
            </Container>
        </div>
    )
}

export default Services;