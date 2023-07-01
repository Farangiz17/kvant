import React, { useState } from "react";
import Stars from "../../components/commons/rating-stars/stars";
import useCard from "../../hooks/useCard";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import {BiPlusMedical} from 'react-icons/bi'
import {ImMinus} from 'react-icons/im'

export default function ProductLeftInfoContainer({ data }) {
  const { cartItems, handleAddItem } = useCard();
  const [quentity, setQuentity] = useState(1)

  const handleAddItemClick = () => {
    handleAddItem(data, quentity);
  };

  const decrement = () => {
    if (quentity > 1) {
      setQuentity(quentity - 1)
    }
  }

  return (
    <div>
      <header>
        <h1 className="ps-product--title">{data.name}</h1>
        <div className="ps-product__meta">
          <Stars />
        </div>
        <span></span>
        <h4 className="ps-product--price"> UZS {data.price}</h4>
      </header>
      <div className="ps-product__desc">
        <ul className="ps-product__dot">
          <li>{data.description}</li>
        </ul>
      </div>

      <div className="ps-product__shopping">
        <figure>
          <figcaption>Количество</figcaption>
          <div className="form-group--number">
            <button className="minus" onClick={decrement}>
             <i className="icon icon-minus"> <ImMinus /></i>
            </button>
           <span className="mx-4">{quentity}</span>
            <button onClick={() => setQuentity( quentity + 1)} className="plus">
             <i className="icon icon-plus"> <BiPlusMedical /></i>
            </button>
          </div>
        </figure>
        <a href="#" className="kupit_btn" onClick={() => handleAddItemClick()}>
          Купить
        </a>
        <div className="ps-product--actions">
          <Link to="#">
            <CiHeart />
          </Link>
        </div>
      </div>
    </div>
  );
}
