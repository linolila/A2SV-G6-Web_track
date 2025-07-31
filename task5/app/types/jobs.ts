export type Tag = 'it' | 'education' | 'in-person';

export interface JobPosting {
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: IdealCandidate;
  when_where: string;
  about: JobAbout;
  company: string;
  image: string;
  tags: Tag[]; 
  categories: string[];
  required_skills: string[];
}

export interface IdealCandidate {
  age: string;
  gender: string;
  traits: string[];
}

export interface JobAbout {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  
}

export interface JobsData {
  job_postings: JobPosting[];
}