import Container from "@/components/Core/Container"
import { EditIcon, LucideTrash2, PlusIcon } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

const getUsers = async () => {
    try {
        const res = await fetch(`${process.env.BACKEND_API}/api/users`, { cache: 'no-store' })

        if (!res.ok) {
            throw Error('Failed to fetch users')
        }

        return res.json()
    } catch (error) {
        console.log("Error", error);
    }
}


const Dashboard = async () => {

    const { users } = await getUsers();

    return (
        <div>
            <div className="flex justify-center items-center gap-4">
                <h2 className="text-2xl font-semibold leading-tight">{"A'zolar"}</h2>
                <Link href={"/addUser"}>
                    <button className=" bg-green-500 text-white p-1 rounded-full cursor-pointer">
                        <PlusIcon size={32} />
                    </button>
                </Link>
            </div>

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                >
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Client / Invoice
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Amount
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Edit
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Delete
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user: any) => (
                                <tr key={user._id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    className="rounded-full"
                                                    style={{ width: '100%', height: 'auto' }} // optional
                                                    alt="Image"
                                                />

                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {user.username}
                                                </p>
                                                <p className="text-gray-600 whitespace-no-wrap">{user.desc}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                                        <p className="text-gray-600 whitespace-no-wrap">USD</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <Link href={`/edit/${user._id}`} className=" text-yellow-600">
                                            <EditIcon size={24} className=" cursor-pointer" />
                                        </Link>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button className=" text-red-600">
                                            <LucideTrash2 size={24} className=" cursor-pointer" />
                                        </button>
                                    </td>
                                    <td
                                        className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                                    >
                                        <button
                                            type="button"
                                            className="inline-block text-gray-500 hover:text-gray-700"
                                        >
                                            <svg
                                                className="inline-block h-6 w-6 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;