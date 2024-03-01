import Image from "next/image";
import Container from "./Core/Container";

const AboutUs = () => {
    return (
        <div className="bg-gray-50">
            <Container>
                <div className="text-center pt-6">
                    <h2 className=" text-4xl font-semibold">Biz Haqimizda</h2>
                </div>
                <section className="py-20">
                    <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                                <div className="w-full lg:max-w-md">
                                    <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Jam-packed with all the tools you need to succeed!</h2>
                                    <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">Its never been easier to build a business of your own. Our tools will help you with the following:</p>
                                    <ul>
                                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                                            <span className="font-medium text-gray-500">Faster Processing and Delivery</span>
                                        </li>
                                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                                            <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
                                        </li>
                                        <li className="flex items-center py-2 space-x-4 xl:py-3">
                                            <span className="font-medium text-gray-500">100% Protection and Security for Your App</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                                <Image
                                    src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                                    className="mx-auto sm:max-w-sm lg:max-w-full"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default AboutUs;