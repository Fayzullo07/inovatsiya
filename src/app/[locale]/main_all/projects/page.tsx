"use client"
import Container from "@/components/Core/Container"
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronRightIcon, ClockIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input"
import { useState } from "react";

import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

import * as React from "react"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useQuery } from "@tanstack/react-query";
import { newsGetAPI } from "@/api/AdminRequest";
import moment from "moment";
import NewsGet from "@/components/GetComponents/NewsGet";
import ProjectsGet from "@/components/GetComponents/ProjectsGet";



const Projects = () => {
    const locale = useLocale();
    const [search, setSearch] = useState("");


    return (
        <div className=" bg-slate-50">
            <Container>
                <div className="flex items-center mb-4">
                    <Link href={"/"}>
                        <Button variant={"link"} className="text-lg pl-0">Bosh sahifa</Button>
                    </Link>
                    <ChevronRightIcon size={16} />
                    <div className=" text-lg text-gray-400">Loyihalar</div>
                </div>
                <div className="flex mb-4 gap-4">

                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="search" placeholder="Search . . ." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <ProjectsGet search={search} />
                </div>
            </Container>
        </div>
    )
}

export default Projects;