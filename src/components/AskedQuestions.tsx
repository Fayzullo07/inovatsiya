import Container from "./Core/Container"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const AskedQuestions = () => {
    return (
        <div>
            <Container>
                <div className="text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
                    <h2 className=" text-4xl font-semibold py-6 text-maincolor">Frequently asked questions</h2>
                </div>
                <div>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Nimaga bizni tanlashiz kerak?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad vel beatae, necessitatibus veniam modi ipsum id minima cum. Eos exercitationem inventore nostrum deleniti fugit pariatur, dolor odit, aliquid distinctio voluptate, consequatur tempore. Impedit dignissimos eaque tenetur commodi, quidem alias! Aut, tempore necessitatibus! Accusantium laudantium consequuntur atque eaque dolore, ipsam libero quaerat molestias saepe, iure sit quo nostrum reiciendis! Tenetur facilis consequatur iure labore enim architecto animi atque consequuntur molestiae laudantium, beatae magnam perspiciatis soluta! Maiores omnis eos sequi in, reiciendis veritatis cum, incidunt alias, deserunt quia sint? Sunt soluta et optio velit? Ad placeat iste velit magnam mollitia saepe.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Nimaga bizni tanlashiz kerak?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad vel beatae, necessitatibus veniam modi ipsum id minima cum. Eos exercitationem inventore nostrum deleniti fugit pariatur, dolor odit, aliquid distinctio voluptate, consequatur tempore. Impedit dignissimos eaque tenetur commodi, quidem alias! Aut, tempore necessitatibus! Accusantium laudantium consequuntur atque eaque dolore, ipsam libero quaerat molestias saepe, iure sit quo nostrum reiciendis! Tenetur facilis consequatur iure labore enim architecto animi atque consequuntur molestiae laudantium, beatae magnam perspiciatis soluta! Maiores omnis eos sequi in, reiciendis veritatis cum, incidunt alias, deserunt quia sint? Sunt soluta et optio velit? Ad placeat iste velit magnam mollitia saepe.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>Nimaga bizni tanlashiz kerak?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad vel beatae, necessitatibus veniam modi ipsum id minima cum. Eos exercitationem inventore nostrum deleniti fugit pariatur, dolor odit, aliquid distinctio voluptate, consequatur tempore. Impedit dignissimos eaque tenetur commodi, quidem alias! Aut, tempore necessitatibus! Accusantium laudantium consequuntur atque eaque dolore, ipsam libero quaerat molestias saepe, iure sit quo nostrum reiciendis! Tenetur facilis consequatur iure labore enim architecto animi atque consequuntur molestiae laudantium, beatae magnam perspiciatis soluta! Maiores omnis eos sequi in, reiciendis veritatis cum, incidunt alias, deserunt quia sint? Sunt soluta et optio velit? Ad placeat iste velit magnam mollitia saepe.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>Nimaga bizni tanlashiz kerak?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad vel beatae, necessitatibus veniam modi ipsum id minima cum. Eos exercitationem inventore nostrum deleniti fugit pariatur, dolor odit, aliquid distinctio voluptate, consequatur tempore. Impedit dignissimos eaque tenetur commodi, quidem alias! Aut, tempore necessitatibus! Accusantium laudantium consequuntur atque eaque dolore, ipsam libero quaerat molestias saepe, iure sit quo nostrum reiciendis! Tenetur facilis consequatur iure labore enim architecto animi atque consequuntur molestiae laudantium, beatae magnam perspiciatis soluta! Maiores omnis eos sequi in, reiciendis veritatis cum, incidunt alias, deserunt quia sint? Sunt soluta et optio velit? Ad placeat iste velit magnam mollitia saepe.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </Container>
        </div>
    )
}

export default AskedQuestions;