
import JobCard from './Card';

const JobList = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Job List</h1>
      <JobCard
        title="Social Media Assistant"
        organization="Young Men Christian Association"
        location="Addis Ababa, Ethiopia"
        description="As a Social Media Assistant, you will work closely with the social media manager or marketing team to execute social media strategies and campaigns. You will be responsible for assisting in the creation and scheduling of engaging content, monitoring social media channels, and interacting with followers."
        tags={['In Person', 'Education', 'IT']}
      />
    </div>
  );
};

export default JobList;
