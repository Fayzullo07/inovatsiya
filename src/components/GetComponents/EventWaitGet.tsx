import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const EventWaitGet = ({ search = "", amount = 0 }) => {
    const locale = useLocale();
    const data_events = [
        {},
        {},
        {}
    ]

    return (
        <>
            {data_events.map((item, i) => (

                <div key={i} data-aos="fade-up" data-aos-delay={(i + 1) * 100} data-aos-duration={(i + 1) * 100}
                    className="relative cursor-pointer hover:shadow-2xl transition duration-300 rounded overflow-hidden shadow-lg">
                    <Link href={`/${locale}/main_all/events/wait/6606753cea81b0c505459fcc`}>
                        <div className="py-4 px-8">
                            <h4 className="text-xl tracking-wide mb-3 font-semibold text-maincolor">Tadbir nomi?</h4>
                            <p className="text-sm">Tadbirdan kutilayotgan natigalar</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {"Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since the 1500s"}
                            </p>
                            <p className="text-sm">Tadbir maqsadi</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {"Lorem Ipsum is simply dummy text of the printing and typesetting since the 1500s"}
                            </p>
                            <p className="text-sm">Tadbir shakli</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {"Lorem Ipsum is simply dummy text of the printing and typesetting since the 1500s"}
                            </p>
                            <p className="text-sm">{"Tadbir bo'lib o'tadigan joyi"}</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {"Lorem Ipsum is simply dummy text of the printing and typesetting since the 1500s"}
                            </p>
                            <div className=" overflow-hidden">
                                {/* <ImagesCarusel images={images} /> */}
                                <Image
                                    src={'https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'}
                                    width={0}
                                    height={0}
                                    className="transition hover:scale-110 duration-300 shadow-xl"
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt="Image"
                                />
                            </div>

                            <hr className="mt-4" />
                            <p className="text-sm">Hamkorlar</p>
                            <div>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 m-1">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 m-1">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 m-1">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 m-1">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 m-1">#winter</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">#winter</span>
                            </div>
                            <span className="text-xs text-green-500">07-07-2001</span>
                            <button className="absolute bottom-0 right-0 inline-flex justify-center border border-maincolor hover:border-white hover:text-white rounded-tl-3xl hover:bg-maincolor px-3 py-2 text-base font-medium hover:px-4 hover:py-2 duration-300">{"Ro'yhatdan o'tish"}</button>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default EventWaitGet;