import { useLoaderData, useParams } from "react-router-dom"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/LocalStorage";

const JobDetails = () => {

    const [isButtonClicked, setButtonClicked] = useState(false);

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    // console.log(job);

    const { job_title, salary, job_description, job_responsibility, experiences, educational_requirements, contact_information } = job;

    const notify = () => {
        saveJobApplication(idInt);
        toast.success("Job Applied Successfully");
        setButtonClicked(true);
    }

    return (
        <div className="my-20 max-w-screen-xl mx-auto">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="relative">Job Details of: {id}</span>
                                </span>{' '}
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Everything you need to know about the job
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="col-span-3 px-8 py-3 space-y-12">
                    <h2 className="text-xl mb-5 text-gray-600"><span className="font-bold text-gray-800">Job Description: </span>{job_description}</h2>
                    <h2 className="text-xl mb-5 text-gray-600"><span className="font-bold text-gray-800">Job Responsibility: </span>{job_responsibility}</h2>
                    <h2 className="text-xl mb-5 text-gray-600"><span className="font-bold text-gray-800">Educational Requirements: </span>{educational_requirements}</h2>
                    <h2 className="text-xl mb-5 text-gray-600"><span className="font-bold text-gray-800">Experiences: </span>{experiences}</h2>

                </div>
                <div className="col-span-1 ">
                    <div className="rounded-lg bg-indigo-50 py-4 px-6">
                        <h2 className="text-2xl mb-5 font-bold text-gray-800 border-b-2 pb-3 border-violet-900">Job Details</h2>

                        <h2 className="text-xl mb-2 text-gray-600"><span className="font-bold text-gray-800">Salary: </span>{salary}</h2>
                        <h2 className="text-xl mb-2 text-gray-600"><span className="font-bold text-gray-800">JobTitle: </span>{job_title}</h2>

                        <h2 className="text-2xl mb-5 font-bold text-gray-800 border-b-2 py-3 border-violet-900">Contact Information</h2>

                        <h2 className="text-xl mb-2 text-gray-600"><span className="font-bold text-gray-800">Phone: </span>{contact_information.phone}</h2>
                        <h2 className="text-xl mb-2 text-gray-600"><span className="font-bold text-gray-800">Email: </span>{contact_information.email}</h2>
                        <h2 className="text-xl mb-2 text-gray-600"><span className="font-bold text-gray-800">Address: </span>{contact_information.address}</h2>
                    </div>

                    <button onClick={() => notify()} className="btn text-white bg-gradient-to-r from-blue-400 to-indigo-600 w-full my-3">{isButtonClicked ? 'Applied' : 'Apply Now'}</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default JobDetails