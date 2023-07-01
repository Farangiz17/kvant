import React from "react";
import ProductCard from "../../components/commons/product-card/product-card";

export default function CategoryProductsComponents({ title, data }) {
  return (
    <div className="category-products-components">
      {title.length > 0 &&
        title.map((item) => {
          return <h3 className="category-products-components--title"  key={item.id}>{item.title}</h3>;
        })}
      <div className="category-products">
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <div  className="product-item" key={index}>
                <ProductCard
                  title={item.name}
                  image={item.images}
                  price={item.price}
                  id={item.id}
                />
              </div>
            );
          })
        ) : (
          <>
            <p>Товар не найден.</p>{" "}
          </>
        )}
      </div>
    </div>
  );
}
