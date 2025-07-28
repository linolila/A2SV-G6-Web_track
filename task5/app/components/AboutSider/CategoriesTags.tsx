const CategoriesTags: React.FC<{ categories: string[] }> = ({ categories }) => (
  <div>
    <h3 className="font-semibold text-sm mb-1">Categories</h3>
    <div className="flex flex-wrap gap-2">
      {categories.map((cat, idx) => (
        <span key={idx} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">{cat}</span>
      ))}
    </div>
  </div>
);

export default CategoriesTags;
