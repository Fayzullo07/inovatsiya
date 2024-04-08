"use client"
import Container from "./Core/Container";
import { useTranslations } from "next-intl";
import ServicesGet from "./GetComponents/ServicesGet";

const Services = () => {
    const t = useTranslations("Services");

    return (
        <div id="services">
            <Container>
                <div className="flex justify-between items-center py-5 md:py-10" >
                    <h2 className="text-3xl font-bold text-maincolor" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">{t("hero_title")}</h2>
                </div>
                <section className="we-offer-area">
                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 our-offer-items less-carousel">
                        <ServicesGet />
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default Services;