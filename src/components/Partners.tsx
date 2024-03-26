import Image from "next/image";
import Container from "./Core/Container";

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
        },
        {
            img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80",
            name: "John Smith",
            setup: "Creator of Stuff",
            desc: "Packed with awesome content and exactly what I was looking for. I would highly recommend this to anyone."
        },
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

    ]
    return (
        <div className="py-16 bg-slate-50">
            <Container>
                <div className="text-center py-2">
                    <h2 className=" text-4xl font-semibold">Hamkorlarimiz</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

                    {data_partners.map((item, i) => (
                        <div key={i} className="flex flex-col items-start mb-12 lg:mb-0 shadow-lg rounded-lg p-4 bg-white">
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
            </Container>

        </div>

    )
}

export default Partners;