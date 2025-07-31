"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  location: string;
  company: string;
  tags: string[];
  tagsStyle?: { [key: string]: string };
  imageName: string;
}

const JobCard: React.FC<Props> = ({
  title,
  description,
  location,
  company,
  imageName,
  tags,
  tagsStyle = {},
}) => {
  const encodedTitle = encodeURIComponent(title); // Safely encode the title for URL

  return (
    <Link href={`/jobs/${encodedTitle}`} className="block hover:shadow-lg transition">
      <div className="flex w-full rounded-2xl shadow-md p-4 bg-white">
        <div className="w-[89px] flex-shrink-0 flex items-start justify-center mt-1">
          <Image
            src={`/images/${imageName}`}
            alt={title}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
        </div>
        <div className="w-full pl-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">{title}</h2>
            <span className="text-sm text-gray-500">
              {company} – {location}
            </span>
          </div>
          <p className="text-sm mt-2 text-gray-800 line-clamp-2">{description}</p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tagsStyle[tag] || "bg-gray-200 text-gray-800"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
