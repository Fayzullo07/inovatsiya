import Image from "next/image";
import Container from "./Core/Container";

const getUsers = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/users`, { cache: 'no-store' })
        // alert(process.env.BACKEND_API)

        if (!res.ok) {
            throw Error('Failed to fetch users')
        }

        return res.json()
    } catch (error) {
        console.log("Error", error);
    }
}

const Members = async () => {
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

    ]

    const { users } = await getUsers();

    return (
        <div>
            <Container>

                <div className="text-center py-6">
                    <h2 className=" text-4xl font-semibold">Azolar</h2>
                </div>

                <div className="flex items-center  flex-wrap gap-4">
                    {users.map((item: any, i: number) => (

                        <div key={i} className="card" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
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