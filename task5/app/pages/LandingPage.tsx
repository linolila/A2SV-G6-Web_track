
import Card from '../components/Card';
import jobs_posting from '../data/jobs.json'
import { useRouter } from 'next/navigation';

interface Jobs_posting {
  length: number;
}
const LandingPage = (props: Jobs_posting) => {
  const router = useRouter();
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Opportunities</h1>
          <p className="text-gray-500 text-sm">Showing {props.length} results</p>
        </div>
        <select className="border border-gray-300 text-sm rounded px-2 py-1">
          <option>Most relevant</option>
          <option>Most recent</option>
        </select>
      </div>

      <div className="space-y-6">
        {jobs_posting.job_postings.map((job: {
          title: string;
          company: string;
          about: { location: string; categories: string[]; };
          description: string;
          image: string;
        }, index: number) => (
          <div
            key={index}
            className="cursor-pointer hover:shadow-lg transition-shadow rounded"
            onClick={() => router.push('/pages/ApplicantsPage')}
          >
            <Card
              title={job.title}
              location={job.about.location}
              description={job.description}
              categories={job.about.categories}
              image={job.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
