"use client"
import { newsGetAPI } from "@/api/AdminRequest";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";

import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Image from "next/image";

const News = () => {
    const locale = useLocale();

    const { data } = useQuery({
        queryKey: ["news"],
        queryFn: async () => {
            return await newsGetAPI();
        }
    });



    return (
        <div>
            <div className="relative overflow-x-auto  sm:rounded-lg">
                <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">

                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                    </div>
                    <div>

                        <Link href={`/${locale}/admin/news/add`} >
                            <Button size={"icon"}>
                                <PlusIcon />
                            </Button>
                        </Link>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Content
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody className="">
                        {data?.data.news.map((item: any, i: number) => (
                            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="font-medium text-gray-900">
                                    <div className=" max-w-20 h-auto mx-auto flex justify-center">
                                        <Image
                                            src={item.img}
                                            width={0}
                                            height={0}
                                            // className=" transition hover:scale-110 duration-300"
                                            sizes="100vw"
                                            style={{ width: 'auto', height: 'auto' }} // optional
                                            alt="Image"
                                        />
                                    </div>
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.title}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                                    {item.desc}
                                </th>

                                <td className="px-6 py-4">
                                    {moment(item.createdAt).format("LLL")}
                                </td>
                                <td className="px-6 py-4 flex justify-center gap-4">
                                    <Link href={`/${locale}/admin/edit/${item._id}`}>
                                        <Button >Edit</Button>
                                    </Link>
                                    <Button variant={"destructive"}>Delete</Button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default News;