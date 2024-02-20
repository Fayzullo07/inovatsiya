import Image from "next/image";
import Container from "../Container";

const Projects = () => {
    return (
        <div className="bg-slate-50">
            <Container>
                <section className="relative min-h-screen flex flex-col justify-center">
                    <div className="px-4 border md:px-6 py-24">
                        <div className="max-w-xs mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
                            {/* <!-- Card --> */}
                            <div className="flex flex-col h-full bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden">
                                {/* <!-- Image --> */}
                                <Image
                                    src="https://cruip-tutorials.vercel.app/equal-height-cards/equal-height-01.jpg"
                                    className="object-cover h-48 w-full"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt="Image"
                                />
                                {/* <!-- Card Content --> */}
                                <div className="flex-1 flex flex-col p-6">
                                    {/* <!-- Card body --> */}
                                    <div className="flex-1">
                                        {/* <!-- Header --> */}
                                        <header className="mb-2">
                                            <h2 className="text-xl font-extrabold leading-snug">
                                                <a className="text-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" href="#0">
                                                    Unlocking the Secrets of Productivity
                                                </a>
                                            </h2>
                                        </header>
                                        {/* <!-- Content --> */}
                                        <div className="text-sm text-slate-600 mb-8">
                                            <p>Boost efficiency, accomplish more. Learn proven strategies.</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card footer --> */}
                                    <div className="flex justify-end space-x-2">
                                        <a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors" href="#0">Cancel</a>
                                        <a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-500 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors" href="#0">Preview</a>
                                        <a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors" href="#0">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card --> */}
                            <div className="flex flex-col h-full bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden">
                                {/* <!-- Image --> */}
                                <Image
                                    src="https://cruip-tutorials.vercel.app/equal-height-cards/equal-height-02.jpg"
                                    className="object-cover h-48 w-full"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt="Image"
                                />
                                {/* <!-- Card Content --> */}
                                <div className="flex-1 flex flex-col p-6">
                                    {/* <!-- Card body --> */}
                                    <div className="flex-1">
                                        {/* <!-- Header --> */}
                                        <header className="mb-2">
                                            <h2 className="text-xl font-extrabold leading-snug">
                                                <a className="text-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" href="#0">
                                                    The Ultimate JavaScript Course
                                                </a>
                                            </h2>
                                        </header>
                                        {/* <!-- Content --> */}
                                        <div className="text-sm text-slate-600 mb-8">
                                            <p>The JavaScript course for everyone! Master JavaScript with projects, challenges and theory.</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card footer --> */}
                                    <div className="flex justify-end space-x-2">
                                        <a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors" href="#0">Cancel</a>
                                        <a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-500 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors" href="#0">Preview</a>
                                        <a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors" href="#0">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Card --> */}
                            <div className="flex flex-col h-full bg-white border border-slate-200 shadow shadow-slate-950/5 rounded-2xl overflow-hidden">
                                {/* <!-- Image --> */}
                                <Image
                                    src="https://cruip-tutorials.vercel.app/equal-height-cards/equal-height-03.jpg"
                                    className="object-cover h-48 w-full"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt="Image"
                                />
                                {/* <!-- Card Content --> */}
                                <div className="flex-1 flex flex-col p-6">
                                    {/* <!-- Card body --> */}
                                    <div className="flex-1">
                                        {/* <!-- Header --> */}
                                        <header className="mb-2">
                                            <h2 className="text-xl font-extrabold leading-snug">
                                                <a className="text-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" href="#0">
                                                    Mastering Python Course
                                                </a>
                                            </h2>
                                        </header>
                                        {/* <!-- Content --> */}
                                        <div className="text-sm text-slate-600 mb-8">
                                            <p>Unlock the power of Python. From basics to advanced techniques, become a coding maestro with our comprehensive course.</p>
                                        </div>
                                    </div>
                                    {/* <!-- Card footer --> */}
                                    <div className="flex justify-end space-x-2">
                                        <a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors" href="#0">Cancel</a>
                                        <a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-500 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors" href="#0">Preview</a>
                                        <a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors" href="#0">Buy Now</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </Container>
        </div >
    )
}

export default Projects;