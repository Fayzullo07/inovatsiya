"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const EditUser = ({ id, username, desc }: { id: string, username: string, desc: string }) => {
    const [usernameEdit, setUserName] = useState(username);
    const [descEdit, setDesc] = useState(desc);

    const [loading, setLoading] = useState(false);

    const router = useRouter();
    router.refresh()

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!username || !desc) {
            toast.warning("Empty");
            return
        }
        try {
            setLoading(true);
            const res = await fetch(`/api/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ username: usernameEdit, desc: descEdit })
            });

            if (!res.ok) {
                throw new Error("Failed to update user")
            }
            setLoading(false)
            router.refresh()
            router.push("/dashboard/members")
        } catch (error) {
            console.log("Error: ", error);

        }
    };

    return (
        <div>
            <h2 className="text-center text-blue-400 font-bold text-2xl pb-4">{"Update User"}</h2>
            <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Username</label>
                        <input
                            value={usernameEdit}
                            onChange={(e) => setUserName(e.target.value)}
                            type="text" id="name" name="name" placeholder="Ender username" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600">Description</label>
                        <textarea
                            value={descEdit}
                            onChange={(e) => setDesc(e.target.value)}
                            id="twitter" name="twitter" placeholder="Description" className="border shadow p-3 w-full rounded mb-" />
                    </div>

                    <button disabled={loading} type="submit" className={`block w-full ${loading ? "bg-blue-300" : "bg-blue-500"}  text-white font-bold p-4 rounded-lg`}>{loading ? "Loading . . ." : "Update User"}</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;