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


const Modal = ({ children, button }: Readonly<{ children: React.ReactNode, button: string }>) => {

    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant={"outline"} className="">
                    {button}
                </Button>
            </DialogTrigger>
            <DialogContent className=" min-w-[80vw] max-h-[80vh]" >
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