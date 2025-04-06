export const CategoriesList = ({ categories, onSelectCategory }) => {
    return (
        <div className="categories-list">
            <h2>Certificate Categories</h2>
            <div className="category-grid">
                {categories.map(category => (
                    <div 
                        key={category} 
                        className="category-card" 
                        onClick={() => onSelectCategory(category)}
                    >
                        <h3>{category}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
