import Container from "@/components/Core/Container";

const Admin = () => {
    
    return (
        <div className="min-h-screen text-gray-800 antialiased p-4 flex flex-col justify-center sm:py-12">
            <Container>
                <div className="relative  sm:max-w-xl mx-auto text-center">
                    <span className="text-2xl font-light">Login Admin</span>
                    <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                        <div className="h-2 bg-indigo-400 rounded-t-md"></div>
                        <div className="py-6 px-8">
                            <label className="block font-semibold">Username</label>
                            <input type="text" placeholder="Email" className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" />
                            <label className="block mt-3 font-semibold">Password</label>
                            <input type="password" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" />
                            <div className="flex justify-between items-baseline">
                                <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">Kirish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Admin;