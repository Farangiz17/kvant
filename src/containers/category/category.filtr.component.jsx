import React from "react";
import CategoryFilterPrice from "./category.filter-price";
import CategoryFilterCategory from "./category.filter-category";

export default function CategoryFiltrComponent({ data }) {
  return (
    <div className="category-filter">
      {data.length > 0 && <CategoryFilterCategory data={data} />}
      <CategoryFilterPrice />
    </div>
  );
}
