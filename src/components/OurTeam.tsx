import { useTranslations } from "next-intl";
import Image from "next/image";
import { ourTeam } from "../../data/data";

const OurTeam = () => {

    const t = useTranslations("OurTeam");
    return (
        <section id="team" className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16" >
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-500" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">{t("hero_title")}</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">{t("desc")}</p>
                </div>
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {ourTeam.map((item, i) => (
                        <div key={item.name} data-aos="fade-up" data-aos-duration="500" className="text-center text-gray-500 dark:text-gray-400" >
                            <Image
                                src={item.img}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="mx-auto mb-4 w-36 h-36 rounded-full hover:scale-110 duration-300"
                                style={{ width: '100%', height: 'auto' }} // optional
                                alt="Image"
                            />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-green-500">
                                <a href="#">{t(`data.${i}.name`)}</a>
                            </h3>
                            <p>{t(`data.${i}.job`)}</p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam;