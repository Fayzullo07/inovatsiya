import { useLocale } from "next-intl";
import Image from "next/image"
import Link from "next/link";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const locale = useLocale();

    const data_links = [
        {
            slug: "/news",
            title: "Yangiliklar"
        },
        {
            slug: "/events",
            title: "Tadbirlar"
        },
        {
            slug: "/news",
            title: "Biz haqimizda"
        },
        {
            slug: "/news",
            title: "Yangiliklar"
        },
        {
            slug: "/news",
            title: "Yangiliklar"
        },
    ]
    return (
        <div className=" bg-slate-50">
            <div className=" h-32 overflow-hidden relative">
                <Image
                    src="https://ngoshivam.org/images/news-event.jpg"
                    className="object-cover "
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} // optional
                    alt="Image"
                />
                <h1 className=" absolute md:top-[38%] top-[20%] md:left-[48%] left-[40%] md:text-4xl text-2xl text-white font-extrabold">News</h1>
            </div>
            <div className="lg:px-15 md:px-10 p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                    <div className="col-span-4">
                        {children}
                    </div>
                    <div>
                        <div className="p-4 bg-white shadow *:cursor-pointer sticky top-24">
                            {data_links.map((item, i) => (
                                <Link key={i} href={`/${locale}/main_all${item.slug}`}>
                                    <div className="p-2 border border-white hover:bg-slate-200 duration-300 hover:border-gray-200">
                                        <h1 className=" text-xl">{item.title}</h1>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;