import React from "react";

export default function ProductLeftImagesComponent({ data }) {
  return (
    <div className="product-images-component">
      <div className="product-images-small">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <img
                key={index}
                width="100%"
                src={item.resize.small.url}
                alt="product image"
              />
            );
          })}
      </div>
      <div className="product-images-big">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <img
                key={index}
                width="100%"
                src={item.url}
                alt="product image"
              />
            );
          })}
      </div>
    </div>
  );
}
