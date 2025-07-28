interface About {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
}

const JobMetaInfo: React.FC<{ about: About }> = ({ about }) => (
  <div className="text-sm text-gray-700 space-y-1">
    <p><strong>Posted On:</strong> {about.posted_on}</p>
    <p><strong>Deadline:</strong> {about.deadline}</p>
    <p><strong>Location:</strong> {about.location}</p>
    <p><strong>Start Date:</strong> {about.start_date}</p>
    <p><strong>End Date:</strong> {about.end_date}</p>
  </div>
);

export default JobMetaInfo;
