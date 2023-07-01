import React from "react";
import ProductPageLeftContainer from "./product-page-left.container";
import ProductPageRightContainer from "./product-page-right.container";
import ProductRelatedContainer from "./product-related.container";

export default function ProductComponent({ data }) {
  return (
    <div className="product-component">
      <div className="product-component-header d-flex">
        <div className="product-component-left">
          {data.images.length > 0 && (
            <ProductPageLeftContainer image={data.images} data={data} />
          )}
        </div>
        <div className="product-component-right">
          <ProductPageRightContainer data={data} />
        </div>
      </div>
      <div className="product-component-footer">
        <ProductRelatedContainer data={data}/>
      </div>
    </div>
  );
}
