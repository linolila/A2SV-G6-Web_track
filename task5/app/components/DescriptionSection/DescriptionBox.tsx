const DescriptionBox: React.FC<{ description: string }> = ({ description }) => (
  <section>
    <h2 className="text-xl font-semibold mb-2">Description</h2>
    <p className="text-gray-700 text-sm">{description}</p>
  </section>
);

export default DescriptionBox;
