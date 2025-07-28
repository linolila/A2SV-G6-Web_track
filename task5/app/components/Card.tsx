import React from 'react';


type Tag = 'In Person' | 'Education' | 'IT';
interface JobCardProps {
  title: string;
  organization: string;
  location: string;
  description: string;
  tags: Tag[];
  logoUrl?: string;
}

const tagStyles: Record<Tag, string> = {
  'In Person': 'bg-green-100 text-green-800',
  'Education': 'bg-yellow-100 text-yellow-800',
  'IT': 'bg-purple-100 text-purple-800',
};

const JobCard: React.FC<JobCardProps> = ({
  title,
  organization,
  location,
  description,
  tags,
  logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/YMCA_logo.svg', 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-md border border-gray-200">
      <div className="flex items-center mb-4">
        <img
          src={logoUrl}
          alt="Company Logo"
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">
            {organization} • {location}
          </p>
        </div>
      </div>

      <p className="text-gray-700 text-sm mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 rounded-full text-xs font-medium ${tagStyles[tag]}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
