import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import category from "../../repository/category-repository";
import CategoryFiltrComponent from "./category.filtr.component";
import CategoryProductsComponents from "./category.products.components";

export default function Category() {
  const { id } = useParams();

  const [categoryProduct, setCategoryProduct] = useState([]);
  const [filtrCategory, setFiltrCategory] = useState([]);

  const getProducts = async () => {
    const productPromise = await category.getCategoryProductById(id);
    if (productPromise) {
      setCategoryProduct(productPromise.data.data);
      console.log(productPromise.data.data);
    }
  };

  const subCategory = async () => {
    const subCategoryPromise = await category.getCategory();
    if (subCategoryPromise) {
      setFiltrCategoryFunc(subCategoryPromise.data);
    }
  };

  useEffect(() => {
    getProducts();
    subCategory();
  }, [id]);

  function setFiltrCategoryFunc(categ) {
    const result = categ.filter((item) => {
      return item.id == id;
    });
    setFiltrCategory(result);
  }
  return (
    <div className="category-container">
      <div className="row">
        <div className="col-3">
          <CategoryFiltrComponent data={filtrCategory} />
        </div>
        <div className="col-9">
          <CategoryProductsComponents
            title={filtrCategory}
            data={categoryProduct}
          />
        </div>
      </div>
    </div>
  );
}
