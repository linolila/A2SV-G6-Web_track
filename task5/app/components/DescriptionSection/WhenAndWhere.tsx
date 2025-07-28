const WhenAndWhere: React.FC<{ whenWhere: string }> = ({ whenWhere }) => (
  <section>
    <h2 className="text-xl font-semibold mb-2">When & Where</h2>
    <p className="text-sm text-gray-700">{whenWhere}</p>
  </section>
);

export default WhenAndWhere;
