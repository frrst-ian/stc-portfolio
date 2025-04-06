import React from "react";

export const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? "active" : ""}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
