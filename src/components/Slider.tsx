import { RssIcon } from "lucide-react";
import Container from "./Core/Container"

const Slider = () => {
    return (
        <div>
            <Container>
                <div className="slider py-4">
                    <div className="slide-track *:shadow *:border *:bg-white">
                        <div className="slide">
                            <RssIcon />
                            <h1>Tanlovlar</h1>
                        </div>

                        <div className="slide ">
                            <RssIcon />
                            <h1>Yangiliklar</h1></div>
                        <div className="slide ">
                            <RssIcon />
                            <h1>Loyihalar</h1>
                        </div>
                        <div className="slide ">
                            <RssIcon />
                            <h1>Xizmatlar</h1>
                        </div>
                        <div className="slide ">
                            <RssIcon />
                            <h1>Tanlovlar</h1>
                        </div>

                        <div className="slide ">
                            <RssIcon />
                            <h1>Tanlovlar</h1>
                        </div>
                        <div className="slide ">
                            <RssIcon />
                            <h1>Tanlovlar</h1>
                        </div>
                        <div className="slide ">
                            <RssIcon />
                            <h1>Tanlovlar</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Slider;