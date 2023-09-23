import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    // console.log(job);
    const { id, company_name, job_title, job_type, location, logo, remote_or_onsite, salary, } = job;
    return (
        <div className="max-w-lg sm:mx-auto sm:flex-row border-2 border-gray-200 py-6 px-6 rounded-lg w-full">
            <img className="w-36 mb-5" src={logo} alt="" />
            <h2 className="text-2xl font-bold text-gray-800 ">{job_title}</h2>
            <h5 className="text-lg font-medium text-gray-500 ">{company_name}</h5>

            <div className="my-5">
                <button className="btn btn-outline border-purple-600 hover:bg-purple-600 hover:text-white font-medium mr-4 text-purple-700 hover:border-0">{remote_or_onsite === 'Remote' ? 'Remote' : 'Onsite'}</button>
                <button className="btn btn-outline border-purple-600 hover:bg-purple-600 hover:text-white font-medium mr-4 text-purple-700 hover:border-0">{job_type}</button>
            </div>
            <div
                className="flex justify-around items-center my-5 w-10/12">
                <CiLocationOn /> <p className="text-gray-500 mr-4 ml-2 font-medium"> {location}</p>
                <RiMoneyDollarCircleLine /> <p className="text-gray-500 mr-4 ml-2 font-medium">Salary: {salary}</p>
            </div>
            <div className="">
                <Link to={`/job/${id}`} className="btn text-white bg-gradient-to-r from-blue-400 to-indigo-600">View Details</Link>
            </div>
        </div>
    )
}

export default Job;