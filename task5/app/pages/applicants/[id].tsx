import React, { useEffect, useState } from "react";

interface JobPosting {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image: string;
}

export default function ApplicantsPage() {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [selectedId, setSelectedId] = useState<number>(0);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.job_postings) {
          setJobs(data.job_postings);
        }
      })
      .catch((err) => console.error("Failed to load jobs.json", err));
  }, []);

  if (jobs.length === 0) return <p>Loading job postings...</p>;

  const selectedJob = jobs[selectedId];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Left side */}
      <div style={{ flex: 1, borderRight: "1px solid #ddd", padding: "20px", overflowY: "auto" }}>
        <h2>Job Openings</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {jobs.map((job, index) => (
            <li
              key={index}
              onClick={() => setSelectedId(index)}
              style={{
                padding: "10px",
                cursor: "pointer",
                backgroundColor: selectedId === index ? "#007bff" : "transparent",
                color: selectedId === index ? "#fff" : "#000",
                borderRadius: "5px",
                marginBottom: "8px",
              }}
            >
              {job.title}
            </li>
          ))}
        </ul>

        <div>
          <h3>{selectedJob.title}</h3>
          <p><strong>Company:</strong> {selectedJob.company}</p>
          <p><strong>Description:</strong> {selectedJob.description}</p>

          <h4>Responsibilities</h4>
          <ul>
            {selectedJob.responsibilities.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>

          <h4>Ideal Candidate</h4>
          <p><strong>Age:</strong> {selectedJob.ideal_candidate.age}</p>
          <p><strong>Gender:</strong> {selectedJob.ideal_candidate.gender}</p>
          <ul>
            {selectedJob.ideal_candidate.traits.map((trait, idx) => (
              <li key={idx}>{trait}</li>
            ))}
          </ul>

          <p><em>{selectedJob.when_where}</em></p>
        </div>
      </div>

      {/* Right side */}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto", backgroundColor: "#f9f9f9" }}>
        <h2>About this Job</h2>
        <p><strong>Posted On:</strong> {selectedJob.about.posted_on}</p>
        <p><strong>Deadline:</strong> {selectedJob.about.deadline}</p>
        <p><strong>Location:</strong> {selectedJob.about.location}</p>
        <p><strong>Start Date:</strong> {selectedJob.about.start_date}</p>
        <p><strong>End Date:</strong> {selectedJob.about.end_date}</p>
        <p><strong>Categories:</strong> {selectedJob.about.categories.join(", ")}</p>
        <p><strong>Required Skills:</strong> {selectedJob.about.required_skills.join(", ")}</p>
      </div>
    </div>
  );
}
