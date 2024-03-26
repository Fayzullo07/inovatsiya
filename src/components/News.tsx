import Image from "next/image";
import Container from "./Core/Container";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Button } from "./ui/button";
import NewsGet from "./Core/NewsGet";

const News = () => {
    const locale = useLocale();

    return (
        <div className="bg-slate-50 pb-10" id="news">
            <Container>
                <div className="text-center flex justify-between py-6">
                    <h2 className="text-3xl tracking-wide font-extrabold text-green-500">{"Yangiliklar"}</h2>
                    <Link href={`/${locale}/main_all/news`}>
                        <Button variant="outline" className="underline">{"Barcha yangiliklar"}</Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    <NewsGet amount={3} />
                </div>
            </Container>
        </div >
    )
}

export default News;