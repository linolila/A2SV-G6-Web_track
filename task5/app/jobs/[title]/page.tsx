import { notFound } from "next/navigation";
import jobsData from "../../data/jobs.json";
import React from "react";
import {JobsData } from "../../types/jobs";
interface ApplicantPageProps {
  params: {
    title: string;
  };
 
}

export default async function ApplicantPage({ params }: ApplicantPageProps) {
  const decodedTitle = decodeURIComponent(params.title);

  const job = jobsData.job_postings.find((job) => job.title === decodedTitle);

  if (!job) return notFound();

  return (
    <div className="p-6 mt-10 flex flex-col md:flex-row gap-6">
      {/* Left Column: 3/4 width */}
      <div className="md:w-3/4 w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Description</h1>
        <p className="text-base text-gray-800 mb-4">{job.description}</p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Responsibilities</h2>
        <ul className="list-disc pl-6 text-sm text-gray-700">
          {job.responsibilities.map((resp: string, index: number) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2">Ideal Candidate we want</h2>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Age:</strong> {job.ideal_candidate.age}
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Gender:</strong> {job.ideal_candidate.gender}
        </p>
        <ul className="list-disc pl-6 text-sm text-gray-700">
          {job.ideal_candidate.traits.map((trait: string, index: number) => (
            <li key={index}>{trait}</li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">When & Where</h2>
        <p className="text-sm text-gray-700 mb-1">{job.when_where}</p>
      </div>

      {/* Right Column: 1/4 width */}
      <div className="md:w-1/4 w-full bg-gray-100 p-6 rounded-lg shadow-sm">
        <h3 className="text-md font-semibold mb-2">📅 About</h3>
        <label><strong>Posted On</strong></label>
        <p className="text-sm mb-1">{job.about.posted_on}</p>
        <label><strong>Start</strong></label>
        <p className="text-sm mb-1">{job.about.start_date}</p>
        <label><strong>Deadline</strong></label>
        <p className="text-sm mb-1">{job.about.deadline}</p>
        <label><strong>End:</strong></label>
        <p className="text-sm mb-3">{job.about.end_date}</p>

        <hr className="my-3" />

        <h3 className="text-md font-semibold mb-2">Categories</h3>
        <ul>
          {(job.about.categories ?? []).map((category: string, index: number) => (
            <li key={index} className="text-sm bg-sky-300 text-gray-700 rounded px-2 py-1 mb-1">
              {category}
            </li>
          ))}
        </ul>

        <hr className="my-3" />

        <h3 className="text-md font-semibold mb-2">Required Skills</h3>
        <ul className="list-disc pl-6 text-sm text-gray-700">
          {(job.about.required_skills ?? []).length > 0
            ? job.about.required_skills.map((skill: string, idx: number) => (
                <li key={idx}>{skill}</li>
              ))
            : <li>N/A</li>}
        </ul>
      </div>
    </div>
  );
}