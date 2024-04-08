"use client"
import Container from "@/components/Core/Container";
import LegalUsersGet from "@/components/GetComponents/LegalUsersGet";
import PhysicalUsersGet from "@/components/GetComponents/PhysicalUsersGet";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Members = () => {
    const [isLegal, setLegal] = useState(false);
    return (
        <div className=" bg-slate-50">
            <Container>
                <div className="flex items-center mb-4">
                    <Link href={"/"}>
                        <Button variant={"link"} className="text-lg pl-0">Bosh sahifa</Button>
                    </Link>
                    <ChevronRightIcon size={16} />
                    <div className=" text-lg text-gray-400">{"A'zolar"}</div>
                </div>
                <div className="flex mb-4 gap-4">

                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <button className="w-full sm:w-auto px-2 py-1 text-lg text-maincolor bg-white border border-maincolor rounded-md hover:bg-maincolor hover:text-white duration-300">{isLegal ? "Yuridik shaxs" : "Jismoniy shaxs"}</button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className=" text-base" onClick={() => setLegal(true)}>Yuridik shaxslar</DropdownMenuItem>
                            <DropdownMenuItem className=" text-base" onClick={() => setLegal(false)}>Jismoniy shaxslar</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                    {isLegal ? (
                        <LegalUsersGet />
                    ) : (
                        <PhysicalUsersGet />
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Members;