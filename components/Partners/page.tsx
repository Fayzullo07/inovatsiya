import Image from "next/image";
import Container from "../Container";

const Partners = () => {
    const data_partners = [
        {
            img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80",
            name: "John Doe",
            setup: "CEO of Something",
            desc: "This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"
        },
        {
            img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80",
            name: "John Doe",
            setup: "CTO of Business",
            desc: "Thanks for creating this service. My life is so much easier. Thanks for making such a great product."
        },
        {
            img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80",
            name: "John Smith",
            setup: "Creator of Stuff",
            desc: "Packed with awesome content and exactly what I was looking for. I would highly recommend this to anyone."
        }

    ]
    return (
        <div>
            <Container>
                <section className="flex items-center justify-center py-20 min-w-screen">
                    <div className="container flex flex-col items-start mx-auto lg:items-center">
                        <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                            Hamkorlarimiz</h2>
                        <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

                        <div className="items-center justify-center w-full mt-12 mb-4 lg:flex gap-4">

                            {data_partners.map((item, i) => (
                                <div key={i} className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                                    <div className="flex items-center justify-center">
                                        <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                            <Image
                                                src={item.img}
                                                className="object-cover w-full h-full"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: 'auto' }} // optional
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start justify-center">
                                            <h4 className="font-bold text-gray-800">{item.setup}</h4>
                                            <p className="text-gray-600">{item.setup}</p>
                                        </div>
                                    </div>
                                    <blockquote className="mt-8 text-lg text-gray-500">{item.desc}]</blockquote>
                                </div>
                            ))}


                        </div>
                    </div>

                </section>
            </Container>

        </div>

    )
}

export default Partners;