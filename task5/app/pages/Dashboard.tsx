
import jobData from '../data/jobs.json';
import { Link } from 'react-router-dom';

// import JobData from '../data/jobs.json'

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Opportunities</h1>
      <div className="grid grid-rows-1 gap-4">
         {jobData.job_postings.map((job, index) => (
         
          <Link key={index} to={`/job/${index}`}>
             <img src={job.image} alt={job.company} className="w-12 h-12 mr-2" />
            <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-500">{job.company}{" "}{job.about.location}</p>
             <p className="text-sm mt-2 line-clamp-3">{job.description}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
