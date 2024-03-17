import { ScrollArea } from "@/components/ui/scroll-area";
import { LucideTrash2 } from "lucide-react";
import moment from "moment";

import Image from "next/image";

const getMessages = async () => {
    try {
        const res = await fetch(`${process.env.BACKEND_API}/api/messages`, { cache: 'no-store' })

        if (!res.ok) {
            throw Error('Failed to fetch users')
        }

        return res.json()
    } catch (error) {
        console.log("Error", error);
    }
}


const Messages = async () => {
    const { messages } = await getMessages();
    return (
        <div>
            <div className="flex justify-start items-center gap-4">
                <h2 className="text-xl font-semibold leading-tight">{"Xabarlar"}</h2>
            </div>

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                >
                    <table className="min-w-full leading-normal" style={{
                        width: "max-content",
                    }}>
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
                                    Phone
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Vaqt
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Izoh
                                </th>

                                {/* <th
                                    className="text-right px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Delete
                                </th> */}

                            </tr>
                        </thead>
                        <tbody >
                            {messages.map((user: any) => (
                                <tr key={user._id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <Image
                                                    src="/user.png"
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    className="rounded-full"
                                                    style={{ width: '100%', height: 'auto' }} // optional
                                                    alt="Image"
                                                />

                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 text-base">
                                                    {user.name}
                                                </p>
                                                {/* <p className="text-gray-600 whitespace-no-wrap">{user.phone}</p> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{user.phone}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{moment(user.createdAt).calendar()}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm max-w-lg">
                                        <ScrollArea className="h-[10vh]">
                                            <p className="text-gray-900 whitespace-no-wrap">{user.desc}</p>
                                        </ScrollArea>
                                    </td>
                                    {/* <td className=" text-right px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button className=" text-red-600">
                                            <LucideTrash2 size={24} className=" cursor-pointer" />
                                        </button>
                                    </td> */}
                                </tr>
                            )).reverse()}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Messages;