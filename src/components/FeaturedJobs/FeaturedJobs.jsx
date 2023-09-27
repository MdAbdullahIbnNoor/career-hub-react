import { useEffect, useState } from "react";

import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    // this is not the best way to load the data 
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-10">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    Featured Jobs: {jobs.length}
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-10 lg:grid-cols-2">
                {
                    jobs.slice(0, dataLength).map((job, idx) => <Job key={idx} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn text-white bg-gradient-to-r from-blue-400 to-indigo-600 w-32 flex justify-center mx-auto my-8">Show All</button>
            </div>
        </div>

    );
};

export default FeaturedJobs