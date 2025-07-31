import React from "react";
import jobsData from "../data/jobs.json";
import Card from "./Card";
import Link from "next/link"; 

const imageMap: { [key: string]: string } = {
  "Social media manager": "/socialmediaAssistant.png",
  "Web developer": "/African.jpg",
  "Graphic designer": "/volunter teacher.jpg",
  "Data analyst": "/volunter teacher.jpg",
  "Customer support specialist": "/volunter teacher.jpg",
};

const tagsStyle = {
  "In Person": "bg-blue-100 text-blue-700",
  "Education": "bg-green-100 text-green-700",
  "IT": "bg-red-100 text-red-700",
};

const tags = ["In Person", "Education", "IT"];

const JobList = () => {
  const jobs = jobsData.job_postings.map((job) => ({
    title: job.title,
    description: job.description,
    location: job.about.location,
    company: job.company,
    image: imageMap[job.title] ? imageMap[job.title] : "/default.png",
    imageName: job.title,
    tags,
  }));

  return (
    <div className="bg-pink text-black px-4 py-8">
      <h1 className="size-12 text-3xl font-Epilogue text-black mb-2">Opportunities</h1>
      <p className="text-l mb-2">Showing result {jobs.length}</p>
   <div className="rounded-l-full flex flex-col gap-6">
      {jobs.map((job, idx) => (
        
          <Card
          key={job.title + idx}
            title={job.title}
            description={job.description}
            location={job.location}
            company={job.company}
           imageName={job.imageName}
            tags={job.tags}
            tagsStyle={tagsStyle}
          />
     
      ))}
   </div>
     
    </div>
  );
};

export default JobList;