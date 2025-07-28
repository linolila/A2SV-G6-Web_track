
import { useParams, useNavigate } from 'react-router-dom';
import jobData from '../data/jobs.json';

import DescriptionBox from '../components/DescriptionSection/DescriptionBox';
import ResponsibilitiesList from '../components/DescriptionSection/Responsibilities';
import IdealCandidate from '../components/DescriptionSection/IdealCandidate';
import WhenAndWhere from '../components/DescriptionSection/WhenAndWhere';
import JobMetaInfo from '../components/AboutSider/JobMetaInfo';
import CategoriesTags from '../components/AboutSider/CategoriesTags';
import RequiredSkills from '../components/AboutSider/RequiredSkills';

const ApplicantsPage = () => {
  const { id } = useParams();
  const jobIndex = parseInt(id || '0');
  const navigate = useNavigate();

  const job = jobData.job_postings[jobIndex];

  if (!job) {
    return (
      <div className="p-6">
        <p className="text-red-500">Job not found.</p>
        <button onClick={() => navigate('/')} className="text-blue-600 underline">Back to Dashboard</button>
      </div>
    );
  }

  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
    
      <section className="lg:col-span-2 space-y-6">
        <DescriptionBox description={job.description} />
        <ResponsibilitiesList responsibilities={job.responsibilities} />
        <IdealCandidate candidate={job.ideal_candidate} />
        <WhenAndWhere whenWhere={job.when_where} />
      </section>
      <aside className="lg:col-span-1 space-y-4 bg-white p-4 shadow rounded-lg">
        <JobMetaInfo about={job.about} />
        <CategoriesTags categories={job.about.categories} />
        <RequiredSkills skills={job.about.required_skills} />
      </aside>
    </main>
  );
};

export default ApplicantsPage;
