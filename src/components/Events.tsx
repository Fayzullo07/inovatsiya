import Container from "./Core/Container";

const Events = () => {
    return (
        <div>
            <Container>
                <div className="text-center py-2">
                    <h2 className=" text-4xl font-semibold">Tadbirlar</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    <div className="p-20 border-2 border-black text-center">Tadbir</div>
                    <div className="p-20 border-2 border-black text-center">Tadbir</div>
                    <div className="p-20 border-2 border-black text-center">Tadbir</div>
                </div>
            </Container>
        </div>
    )
}

export default Events;