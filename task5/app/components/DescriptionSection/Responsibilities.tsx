const Responsibilities: React.FC<{ responsibilities: string[] }> = ({ responsibilities }) => (
  <section>
    <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
      {responsibilities.map((res, idx) => <li key={idx}>{res}</li>)}
    </ul>
  </section>
);

export default Responsibilities;
