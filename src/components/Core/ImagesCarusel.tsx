import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useRef } from "react"

import AutoScroll from "embla-carousel-auto-scroll"
const ImagesCarusel = ({ images }: { images: any }) => {
    const plugin1 = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
        // AutoScroll({ loop: true, speed: 1, autoScroll: true }),
    )
    return (
        <Carousel
            plugins={[plugin1.current]}
            className="w-full"
            onMouseEnter={plugin1.current.stop}
            onMouseLeave={plugin1.current.play}
        >
            <CarouselContent>
                {images.map((_: any, index: number) => (
                    <CarouselItem key={index}>
                        <div className=" border bg-maincolor">
                            {/* <Card> */}
                            {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                            {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                            <Image
                                src={'https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'}
                                width={0}
                                height={0}
                                className="transition hover:scale-110 duration-300 shadow-xl"
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} // optional
                                alt="Image"
                            />
                            {/* </CardContent> */}
                            {/* </Card> */}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default ImagesCarusel;