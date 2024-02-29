import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlusIcon } from "lucide-react";
import React from "react";


const Modal = ({ children }: Readonly<{ children: React.ReactNode }>) => {

    return (
        <Dialog>
            <DialogTrigger>
                <button className=" bg-green-500 text-white p-1 rounded-full cursor-pointer">
                    <PlusIcon size={32} />
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add User</DialogTitle>
                    <DialogDescription>
                        {children}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default Modal;