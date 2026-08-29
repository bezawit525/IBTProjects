import PropTypes from "prop-types";

function CategoryBar({ selected, onSelect }) {
  const categories = ["All", "Main", "Vegan", "Grill"];

  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={category === selected ? "chip on" : "chip"}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

CategoryBar.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CategoryBar;
