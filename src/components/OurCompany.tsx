import { useTranslations } from "next-intl";
import Container from "./Core/Container"
import { Building2Icon } from "lucide-react";
import { dataCompanies } from "../../data/data";

const OurCompany = () => {
    const t = useTranslations("OurMembers");

    return (
        <div id="company">
            <Container>
                <section className="bg-white">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16" >
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-500" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">{t("hero_title")}</h2>
                            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">{t("desc")}</p>
                        </div>
                        <div className="grid gap-6 mb-6 lg:mb-16 grid-cols-1 md:grid-cols-2">
                            {dataCompanies.map((item, i) => (
                                <div key={i} data-aos="fade-up" data-aos-delay={(i + 1) * 100} data-aos-duration={(i + 1) * 100} className="flex flex-col justify-between items-start max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow">
                                    <a href="#">
                                        <div className="flex items-center gap-2 sm:gap-4 text-green-500 mb-2">
                                            <Building2Icon />

                                            <h5 className="text-base sm:text-2xl font-bold tracking-tight text-green-500">{item.company}</h5>
                                        </div>
                                        <p className="mb-3 font-normal text-base sm:text-xl text-gray-700 dark:text-gray-400">{t(`data.${i}.desc`)}</p>
                                    </a>
                                    {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <ArrowRight className="ms-2 w-5 h-5" />

                                    </a> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default OurCompany;