import React from "react";
import ProductCard from "./ProductCard";
import { plantCategories } from "../data/plants";

const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {Object.entries(plantCategories).map(([categoryName, category]) => (
        <div key={category.id} className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            {categoryName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.plants.length === 0 ? (
              <p className="text-gray-600">No products available in this category.</p>
            ) : (
              category.plants.map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
