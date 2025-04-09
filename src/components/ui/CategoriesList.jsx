import "./CategoriesList.css";
export const CategoriesList = ({ categories, onSelectCategory }) => {
  return (
    <div className="categories-list">
      <h2 className="header-txt">Certificate Categories</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category}
            className="category-card"
            onClick={() => onSelectCategory(category)}
          >
            <button className="category-btn">{category}</button>
    
          </div>
        ))}
      </div>
    </div>
  );
};
