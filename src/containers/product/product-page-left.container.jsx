import React from "react";
import ProductLeftImagesContainer from "./ps-left-images.component";
import ProductLeftInfoContainer from "./ps-left-info.container";
import ProductLeftOpisaniyeComponent from "./product-left-opisaniye.component";

export default function ProductPageLeftContainer({ image, data }) {
  return (
    <div className="product-page-left-container">
      <div className="product-page-left__header">
        <div className="product-page-left-container__image">
          <ProductLeftImagesContainer data={image} />
        </div>
        <div className="product-page-left-container__info">
          <ProductLeftInfoContainer data={data} />
        </div>
      </div>
      <ProductLeftOpisaniyeComponent data={data}/>
    </div>
  );
}
