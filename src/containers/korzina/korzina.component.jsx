import React from "react";
import useCard from "../../hooks/useCard";
import { BiPlus, BiMinus } from "react-icons/bi";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

function KorzinaComponent(product) {
  const {
    cartItems,
    handleRemoveItemProduct,
    handleAddItemProduct,
    handleRemove,
  } = useCard();

  const removeClick = (id) => {
    handleRemoveItemProduct(id);
  };

  const handleAddItemCLICK = (id) => {
    handleAddItemProduct(id);
  };

  const clearItem = (id) => {
    handleRemove(id);
    console.log("removie", id);
  };

  function totalPrice() {
    let umsum = 0;
    product.product.map((item, index) => {
      if (item.id === cartItems[index].id) {
        umsum += item.price * cartItems[index].quantity;
      }
    });
    return umsum;
  }

  console.log("data", cartItems);
  console.log("korzinkadagi productlar", product.product);
  return (
    <div>
      <div className="section-header">
        <h1>Корзина</h1>
      </div>

      <div className="section-content">
        {cartItems.length > 0 ? (
          <table className="table korzina-table">
            <thead>
              <tr>
                <th>ПРОДУКТ</th>
                <th>ЦЕНА</th>
                <th>КОЛИЧЕСТВО</th>
                <th>ВСЕГО</th>
                <th>ДЕЙСТВИЕ</th>
              </tr>
            </thead>
            <tbody>
              {product.product ? (
                product.product.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="card-td">
                        <div className="korzina-product-card">
                          <div className="card-image">
                            <Link to={`/product/${item.id}`}>
                              {" "}
                              <img
                                src={item.images[0].url}
                                alt="image product"
                              />
                            </Link>
                          </div>
                          <div className="card-title">
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/product/${item.id}`}
                            >
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="price"> SUM {item.price}</td>
                      <td className="quantity">
                        <div className="form-group--quantity">
                          <button
                            className="minus"
                            onClick={() => removeClick(item.id)}
                          >
                            <i className="icon icon-minus">
                              <BiMinus />
                            </i>
                          </button>
                          <span className="mx-3">
                            {cartItems[index].quantity}
                          </span>
                          <button
                            className="plus"
                            onClick={() => handleAddItemCLICK(item.id)}
                          >
                            <i className="icon icon-plus">
                              <BiPlus />
                            </i>
                          </button>
                        </div>
                      </td>
                      <td className="total">
                        SUM {cartItems[index].quantity * item.price}
                      </td>
                      <td className="clear">
                        <button onClick={() => clearItem(item.id)}>
                          <i className="icon icon-clear">
                            <TfiClose />
                          </i>
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
          </table>
        ) : (
          <>
            <div className="no-product-table-info">
              <p>Ваша корзина пуста.</p>
            </div>
          </>
        )}
      </div>

      <div className="section-footer-korzina">
        <div className="row justify-content-between mb-5">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <Link to="/" className="ps-btn">
              Назад в магазин
            </Link>
          </div>
          {cartItems.length > 0 && (
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="total-shopping">
                <div className="total-header">
                  Промежуточный итог SUM{totalPrice()}
                </div>
                <div className="total-content">
                  <ul className="total-content__product">
                    {cartItems.map((item, index) => {
                      return (
                        <li className="total-content__product--li" key={index}>
                          <Link to={`/product/${item.id}`} >x {item.quantity}</Link>
                        </li>
                      );
                    })}
                  </ul>
                  <h3 className="total-footer">
                    Итого
                    <span>SUM{totalPrice()}</span>
                  </h3>
                </div>
              </div>
              <Link href="/" className="ps-btn ps-btn-fullWidth">
                Оформить заказ
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default KorzinaComponent;
