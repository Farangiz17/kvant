import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BrendsComponent({ data }) {
  return (
    <div className="brend-component">
      <div className="section--title">Бренды</div>
      <div className="brend__image-group row">
        {data &&
          data.map((item, index) => {
            return (
              <div className="brend-component__div col-lg-2 col-md-3 col-4 my-2">
                <img
                  src={item.image}
                  alt="brend photo"
                  className="brends-component--image"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
