
const Banner = () => {
    return (
        <div className="container mx-auto relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-20">
            <div className="flex flex-col items-start -mt-20 w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">

                        <h2 className="max-w-lg mb-6 font-sans text-7xl font-bold tracking-tight text-gray-900 sm:text-7xl sm:leading-none">
                            One Step Closer To Your
                            <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Dream Job</span>
                        </h2>
                        <p className="text-base text-gray-500 md:text-lg">
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-gradient-to-r from-blue-400 to-indigo-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        >
                            Set Started
                        </a>
                    </div>
                </div>
            </div>
            <div className="right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/3lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-contain w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src="./assets/images/user.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner