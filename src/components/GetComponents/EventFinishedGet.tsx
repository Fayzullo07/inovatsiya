import { useLocale } from "next-intl";
import ImagesCarusel from "../Core/ImagesCarusel";
import Link from "next/link";

const EventFinishedGet = () => {
    const locale = useLocale();
    const data_events = [
        {},
        {},
        {}
    ]
    const images = [
        'https://source.unsplash.com/random/800x600',
        'https://source.unsplash.com/random/800x600?2',
        'https://source.unsplash.com/random/800x600?3'
    ];
    return (
        <>
            {data_events.map((item, i) => (

                <div key={i} data-aos="fade-up" data-aos-delay={(i + 1) * 100} data-aos-duration={(i + 1) * 100}
                    className="relative cursor-pointer hover:shadow-2xl transition duration-300  rounded overflow-hidden shadow-lg">
                    <Link href={`/${locale}/main_all/events/finished/6606753cea81b0c505459fcc`}>
                        <div className="py-4 px-8">
                            <h4 className="text-xl tracking-wide mb-3 font-semibold text-red-500">Tadbir nomi?</h4>
                            <p className="text-sm">Tadbirdan erishgan natijalar</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {"Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since the 1500s"}
                            </p>
                            <p className="text-sm">Tadbir shakli</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {"Lorem Ipsum is simply dummy text of the printing and typesetting since the 1500s"}
                            </p>
                            <p className="text-sm">{"Tadbir o'tkazilgan joyi"}</p>
                            <p className="mb-2 ml-2 text-sm text-gray-500">
                                {"Lorem Ipsum is simply dummy text of the printing and typesetting since the 1500s"}
                            </p>
                            <div className=" overflow-hidden">
                                <ImagesCarusel images={images} />
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
                            <span className="text-xs text-red-500">07-07-2001</span>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default EventFinishedGet;