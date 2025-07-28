interface IdealCandidateProps {
  candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
}

const IdealCandidate: React.FC<IdealCandidateProps> = ({ candidate }) => (
  <section>
    <h2 className="text-xl font-semibold mb-2">Ideal Candidate</h2>
    <p className="text-sm text-gray-600 mb-2"><strong>Age:</strong> {candidate.age}</p>
    <p className="text-sm text-gray-600 mb-2"><strong>Gender:</strong> {candidate.gender}</p>
    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
      {candidate.traits.map((trait, idx) => <li key={idx}>{trait}</li>)}
    </ul>
  </section>
);

export default IdealCandidate;
