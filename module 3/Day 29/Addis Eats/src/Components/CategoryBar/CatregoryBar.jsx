const categories = ["All", "Main", "Vegetarian"];

function CategoryBar({ selectedCategory, onSelect }) {
  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
