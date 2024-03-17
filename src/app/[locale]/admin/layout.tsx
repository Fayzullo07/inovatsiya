import { ArchiveIcon, BellIcon, BriefcaseIcon, CalendarIcon, HomeIcon, MessageCircleIcon, UserIcon, UsersIcon } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const locale = useLocale();


    return (
        <div>
            <div className='flex bg-gray-100'>
                <aside className='h-screen bg-white fixed lg:sticky top-0 border-r-2 p-6 pt-10 whitespace-nowrap z-10 closed shadow-xl '>

                    <ul className='text-gray-500 font-semibold flex flex-col gap-2'>
                        <li>
                            <Link href={'/'} className='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50  transition-all'>
                                <HomeIcon className="mr-3" />
                                <span className='flex-grow'>Home</span>
                            </Link>
                        </li>

                        <li>
                            <a href="#!" className='flex rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>
                                <BellIcon className="mr-3" />
                                <span className='flex items-center gap-3'>
                                    Notifications
                                    <span className='bg-red-500 text-white leading-none px-2 py-1 rounded-full text-xs'>2</span>
                                </span>
                            </a>
                        </li>
                        <li className='border my-2'></li>
                        <li>
                            <Link href={`/${locale}/admin/messages`} className='flex rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>
                                <span className='flex items-center gap-3'>
                                    <MessageCircleIcon />
                                    Messages
                                    {/* <span className='bg-red-500 text-white leading-none px-2 py-1 rounded-full text-xs'>99+</span> */}
                                </span>
                            </Link>
                        </li>

                        <li>
                            <a href="#!" className='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>

                                <CalendarIcon className="mr-3" />

                                <span className='flex-grow'>Events</span>

                            </a>
                        </li>

                        <li>
                            <a href="#!" className='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>

                                <UserIcon className="mr-3" />

                                <span className='flex-grow'>People</span>

                                {/* <i data-feather="chevron-down" style='width: 1.2em'></i> */}

                            </a>
                        </li>

                        <li>
                            <a href="#!" className='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>

                                <UsersIcon className="mr-3" />

                                <span className='flex-grow'>Groups</span>

                                {/* <i data-feather="chevron-down" style='width: 1.2em'></i> */}

                            </a>
                        </li>

                        <li>
                            <a href="#!" className='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>

                                {/* <i data-feather="archive" style='width: 1.2em' className='mr-3'></i> */}
                                <ArchiveIcon className="mr-3" />

                                <span className='flex-grow'>Resources</span>

                                {/* <i data-feather="chevron-down" style='width: 1.2em'></i> */}

                            </a>
                        </li>

                        <li>
                            <a href="#!" className='flex items-center rounded px-3 py-2 hover:text-black hover:bg-gray-50 transition-all'>

                                <BriefcaseIcon className="mr-3" />

                                <span className='flex-grow'>Offices</span>

                            </a>
                        </li>
                    </ul>
                </aside>

                <div className='w-full'>
                    <header className='px-6 lg:px-8 py-4 lg:pt-10 shadow bg-white sticky top-0'>

                        <h1 className='text-xl font-semibold mb-6 flex items-center'>
                            <button className='btn-open-menu inline-block lg:hidden mr-6'>
                                <i data-feather='menu'></i>
                            </button>
                            <span>My Admin</span>
                        </h1>

                    </header>
                    <main className='px-6 py-8 lg:px-8 bg-gray-100 flex flex-col gap-6 '>
                        {children}
                    </main>
                </div>
            </div>

        </div>
    );
}
