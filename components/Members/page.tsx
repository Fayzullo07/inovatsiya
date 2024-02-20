import Image from "next/image";
import Container from "../Container"

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
        {
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
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

                <div className="flex flex-col text-center gap-4 mb-8 p-4">

                    <div className="text-purple-600 text-sm font-bold">Our team</div>

                    <div className="text-gray-900 text-3xl md:text-4xl font-bold">Some of the people you will be working with</div>

                    <div className="text-gray-600 md:text-lg">We are a 100% remote team spread all across the world. Join us!</div>

                </div>

                <div className="flex items-center justify-center flex-wrap gap-4 p-4">
                    {data_members.map((item, i) => (

                        <div key={i} className="card">
                            <Image
                                src={item.img}
                                className="w-24 h-24 rounded-full object-cover transition duration-200 hover:scale-110"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} // optional
                                alt="Image"
                            />

                            <div className="text-gray-900 text-lg font-bold">Phoenix Baker</div>

                            <div className="text-purple-600">Engineering Manager</div>

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