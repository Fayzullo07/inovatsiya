import Image from "next/image";
import Container from "./Core/Container";

const Members = () => {
    const data_members = [
        {
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

        {
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

        {
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

    ]

    return (
        <div>
            <Container>

                <div className="text-center py-6">
                    <h2 className=" text-4xl font-semibold">Azolar</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 duration-1000">
                    {data_members.map((item: any, i: number) => (

                        <div key={i} className="flex items-center justify-center flex-col gap-2 p-5 w-full bg-gray-100 duration-1000 shadow hover:shadow-xl  rounded-2xl" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                            <Image
                                src={'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110"
                                width={0}
                                height={0}
                                sizes="100vw"
                                // style={{ width: '100%', height: 'auto' }} // optional
                                alt="Image"
                            />

                            <div className="text-gray-900 text-lg font-bold">{item.username}</div>

                            <div className="text-purple-600">{item.desc}</div>

                            <div className="text-gray-600">Lead engineering teams at Figma, Pitch, and Protocol Labs.</div>

                            <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
                                <i className="fa-brands fa-twitter fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
                                <i className="fa-brands fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
                                <i className="fa-brands fa-dribbble fa-lg cursor-pointer transition duration-200 hover:text-gray-400"></i>
                            </div>

                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Members;