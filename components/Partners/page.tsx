import Image from "next/image";

const Partners = () => {
    return (
        <div>
            {/* <!-- Section 2 --> */}
            <section className="px-2 py-32 bg-white md:px-0">
                <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                    <span className="block xl:inline">Useful Tools to</span>
                                    <span className="block text-indigo-600 xl:inline">Help You Build Faster.</span>
                                </h1>
                                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Its never been easier to build beautiful websites that convey your message and tell your story.</p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                                        Try It Free
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                    <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} // optional
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Section 4 --> */}
            <section className="py-20 bg-gray-50">
                <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md">
                                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Jam-packed with all the tools you need to succeed!</h2>
                                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">Its never been easier to build a business of your own. Our tools will help you with the following:</p>
                                <ul>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                        <span className="font-medium text-gray-500">Faster Processing and Delivery</span>
                                    </li>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                        <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
                                    </li>
                                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                        <span className="font-medium text-gray-500">100% Protection and Security for Your App</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                            <Image
                                src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                                className="mx-auto sm:max-w-sm lg:max-w-full"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }} // optional
                                alt="Image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Section 5 --> */}
            <section className="flex items-center justify-center py-20 bg-white min-w-screen">
                <div className="px-16 bg-white">
                    <div className="container flex flex-col items-start mx-auto lg:items-center">
                        <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">Dont just take our word for it</p>


                        <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                                </path>
                            </svg>
                            See what others are saying</h2>
                        <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

                        <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                            <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                                <div className="flex items-center justify-center">
                                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <Image
                                            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
                                            className="object-cover w-full h-full"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: 'auto' }} // optional
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h4 className="font-bold text-gray-800">John Doe</h4>
                                        <p className="text-gray-600">CEO of Something</p>
                                    </div>
                                </div>
                                <blockquote className="mt-8 text-lg text-gray-500">This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!</blockquote>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                                <div className="flex items-center justify-center">
                                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <Image
                                            src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80"
                                            className="object-cover w-full h-full"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: 'auto' }} // optional
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h4 className="font-bold text-gray-800">Jane Doe</h4>
                                        <p className="text-gray-600">CTO of Business</p>
                                    </div>
                                </div>
                                <blockquote className="mt-8 text-lg text-gray-500">Thanks for creating this service. My life is so much
                                    easier.
                                    Thanks for making such a great product.</blockquote>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                                <div className="flex items-center justify-center">
                                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                        <Image
                                            src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80"
                                            className="object-cover w-full h-full"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: 'auto' }} // optional
                                            alt="Image"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start justify-center">
                                        <h4 className="font-bold text-gray-800">John Smith</h4>
                                        <p className="text-gray-600">Creator of Stuff</p>
                                    </div>
                                </div>
                                <blockquote className="mt-8 text-lg text-gray-500">Packed with awesome content and exactly what I was
                                    looking
                                    for. I would highly recommend this to anyone.</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Partners;