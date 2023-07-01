import React, { useEffect, useState } from "react";
import KorzinaComponent from "./korzina.component";
import useCard from "../../hooks/useCard";
import productRepository from "../../repository/product-repository";

export default function Index() {
  const { cartItems } = useCard();
  const [products1, setProducts] = useState([]);

  const productItem = () => {
    const ProductArray = [];
    cartItems &&
      cartItems.map((item, index) => {
        productRepository.getProductById(item.id).then((ress) => {
          ProductArray.push(ress.data);  
          console.log(ress.data);
        });
      });

    setTimeout(() => {
      setProducts(ProductArray);
    }, 1000);
  };

  useEffect(() => {
    productItem();
  }, []);

 

// console.log('==>', totalPrice());
  return (
    <div className="korzina-container">
      <KorzinaComponent product={products1} />
    </div>
  );
}
