import React from "react";
import Stars from "../rating-stars/stars";
import { Link } from "react-router-dom";
import {BsBasket3, BsEye, BsHeart} from 'react-icons/bs'

export default function ProductCard({ title, image, price, id }) {
  console.log('name=>' , title, price);
  return (
    <div className="product-card">
      {image.length > 0 && (
       <Link to={`/product/${id}`}>
        <img
          className="product-card--image"
          src={image[0].url}
          alt="product image"
        />
       </Link>
      )}
      <div className="product-card-hover">
        <div className="product-card-hover__action">
          <BsBasket3/>  <BsEye/>  <BsHeart/>
        </div>
      </div>
     <div className="product-card__bottom">
     <div className="product-card--title">
      <Link  to={`/product/${id}`}>{title}</Link>
     </div>
      <div className="product-card__starts">
        <Stars /> <span className="product-card__starts--number">02</span>
      </div>
      <p className="product-card--price"><span>UZS</span> {price}</p>
     </div>
    </div>
  );
}
