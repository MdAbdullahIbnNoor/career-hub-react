import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utility/LocalStorage';
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Helmet } from 'react-helmet-async';

const AppliedJobs = () => {

  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJob] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = filter => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs);
    }

    else if (filter === 'remote') {
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
      setDisplayJobs(remoteJobs);
    }

    else if (filter === 'onsite') {
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
      setDisplayJobs(onsiteJobs);
    }
  }


  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find(job => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJob(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs])

  return (
    <section className="text-gray-600 body-font">
      <Helmet>
        <title>Career Hub | Applied Jobs</title>
      </Helmet>
      <div className="container px-5 py-24 mx-auto flex flex-col justify-end">
        <div className="dropdown dropdown-bottom ml-full">
          <label tabIndex={0} className="btn w-32 btn-accent text-white m-2">Category</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
            <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
            <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
          </ul>
        </div>
        {
          displayJobs.map(job =>
            <div key={job.id}
              className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col gap-10 ">
              <img className="w-40 py-16 px-5 border-2 rounded-lg" src={job.logo} alt="" />
              <div className="sm:text-left text-center mt-4 sm:mt-0 w-2/4">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Job Title: {job.job_title}
                </h2>
                <p className="leading-relaxed text-base">
                  Company: {job.company_name}
                </p>
                <div className="my-3">
                  <button className="btn btn-outline border-purple-600 hover:bg-purple-600 hover:text-white font-medium mr-4 text-purple-700 hover:border-0">{job.remote_or_onsite === 'Remote' ? 'Remote' : 'Onsite'}</button>
                  <button className="btn btn-outline border-purple-600 hover:bg-purple-600 hover:text-white font-medium mr-4 text-purple-700 hover:border-0">{job.job_type}</button>
                </div>
                <div
                  className="flex justify-around items-center my-3 w-10/12">
                  <CiLocationOn /> <p className="text-gray-500 mr-4 ml-2 font-medium"> {job.location}</p>
                  <RiMoneyDollarCircleLine /> <p className="text-gray-500 mr-4 ml-2 font-medium">Salary: {job.salary}</p>
                </div>
              </div>
            </div>)
        }
      </div>
    </section>
  );
};

export default AppliedJobs;
