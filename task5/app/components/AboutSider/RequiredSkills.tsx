const RequiredSkills: React.FC<{ skills: string[] }> = ({ skills }) => (
  <div>
    <h3 className="font-semibold text-sm mb-1">Required Skills</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{skill}</span>
      ))}
    </div>
  </div>
);

export default RequiredSkills;
