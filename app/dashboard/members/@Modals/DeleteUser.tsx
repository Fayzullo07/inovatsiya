"use client"
import { LucideTrash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteUser = ({ id }: { id: string }) => {
    const router = useRouter();

    const deleteUser = async () => {
        const confirmed = confirm("O'chirilsinmi?")

        try {
            if (confirmed) {
                const res = await fetch(`/api/users?id=${id}`, {
                    method: "DELETE"
                });
                if (res.ok) {
                    router.refresh();
                }
            }

        } catch (error) {
            console.log("Error", error);
        }
    }
    return (
        <button onClick={deleteUser} className=" text-red-600">
            <LucideTrash2 size={24} className=" cursor-pointer" />
        </button>
    )
}

export default DeleteUser;