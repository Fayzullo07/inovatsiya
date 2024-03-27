import { ArrowRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const AboutUs = () => {
    const t = useTranslations("AboutUs");
    return (
        <div id="about">
            <div className="about-section">
                <div className="inner-container shadow-lg rounded-lg" data-aos="fade-up" data-aos-delay={100} data-aos-duration={500}>
                    <h1 className="text-maincolor">{t("hero_title")}</h1>
                    <p className="text">
                        - {" "} {t("desc1")}
                    </p>

                    <p className="text">
                        - {" "} {t("desc2")}
                    </p>


                    <b className=" text-maincolor">{t("desc3_title")}</b>
                    <p className="text">
                        - {" "} {t("desc3")}
                    </p>


                    <b className=" text-maincolor">{t("target_title")}</b>
                    <p className="text">
                        - {" "} {t("target_desc1")}
                    </p>
                    <p className="text">
                        - {" "} {t("target_desc2")}
                    </p>


                </div>
            </div>
            <div className="about-section1">

                <div className="inner-container1 shadow-lg rounded-lg" data-aos="fade-up" data-aos-delay={100} data-aos-duration={500}>
                    <h1 className=" text-maincolor">{t("task_title")}</h1>
                    <p className="text">
                        - {" "} {t("task_desc1")}
                    </p>

                    <p className="text">
                        - {" "} {t("task_desc2")}
                    </p>
                    <p className="text">
                        - {" "} {t("task_desc3")}
                    </p>
                    <p className="text">
                        - {" "} {t("task_desc4")}
                    </p>
                    <div className="skills">
                        <a href="#contact" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-maincolor rounded-md sm:mb-0 hover:scale-105 duration-300 sm:w-auto">
                            {t("contact")}
                            <ArrowRightIcon className="w-5 h-5 ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;