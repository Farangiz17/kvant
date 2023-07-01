import React, { useState, useEffect } from "react";
import { BsBasket3 } from "react-icons/bs";
import useCard from "../../../hooks/useCard";
import productRepository from "../../../repository/product-repository";
import { VscChromeClose } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";

export default function Korzinka() {
  const { cartItems } = useCard();
  const [products1, setProducts] = useState([]);

  const {id} = useParams()
  const productItem = () => {
    const ProductArray = [];
    cartItems &&
      cartItems.map((item, index) => {
        productRepository.getProductById(item.id).then((ress) => {
          ProductArray.push(ress.data);
        });
      });

    setTimeout(() => {
      setProducts(ProductArray);
    }, 1000);
  };

  useEffect(() => {
    productItem();
  }, []);

  function totalPrice() {
    let umsum = 0;
    products1.map((item, index) => {
      if (item.id === cartItems[index].id) {
        umsum += item.price * cartItems[index].quantity;
      }
    });
    return umsum;
  }

// console.log('params', id);
  return (
    <>
      <div className="korzinka ">
        <div className="korzinka_icon">
          <BsBasket3 />
        </div>
        {cartItems && (
          <span className="actions-korzinka-num">{cartItems.length}</span>
        )}
        {/* hover korzina info */}
        <div className="ps-korzina-modal">
          <div className="korzina-product">
            {products1.map((item, index) => {
              return (
                <div key={index} className="korzina-product-item">
                <Link to={`/product/${item.id}`}>
                <div className="d-flex">
                    <div className="korzina-product-item-image">
                      <img src={item.images[0].url} alt="photo" />
                    </div>
                    <div className="korzina-product-item-title-price">
                      <p>{item.name}</p>
                      <p>
                        {" "}
                        SUM{item.price} x {cartItems[index].quantity}
                      </p>
                    </div>
                  </div>
                </Link>
                  <div className="korzina-product-item-clear ">
                    <VscChromeClose />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="korzina-products-total">
            <div className="korzina-products-total__name">
              <h3>
                Итого: <strong>SUM{totalPrice()}</strong>
              </h3>
            </div>
            <div className="korzina-products-total__buttons">
              <Link to="/store" className="korzina-btn total-btn">
                Посмотреть корзину
              </Link>
              <Link to="/" className="zakaz-btn total-btn">
                Оформить заказ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
