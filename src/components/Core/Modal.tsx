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
import { Button } from "../ui/button";


const Modal = ({ children, button }: Readonly<{ children: React.ReactNode, button: React.ReactNode }>) => {

    return (
        <Dialog   >
            <DialogTrigger asChild>
                {button}
            </DialogTrigger>
            <DialogContent className="min-w-[70vw] max-h-[80vh]" >
                <DialogHeader >
                    {/* <DialogTitle>Add User</DialogTitle> */}
                    <DialogDescription>
                        {children}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default Modal;