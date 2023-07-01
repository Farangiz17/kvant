import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, clearCart, addItemProduct } from '../store/reducer/cartReduces.jsx';

export default function useCard() {
    const cartItems = useSelector(state => state.cart.items)
    console.log('--> ', cartItems);
    
    const dispatch = useDispatch();

    const handleAddItem = (data , quantity) => {
      const newItem = { id: data.id, quantity: quantity };
      dispatch(addItem(newItem));
    };


    const handleRemoveItemProduct = (id) => {
      const newItem = { id: id, quantity: 1 };
      dispatch(removeItem(newItem));
    };


    const handleAddItemProduct = (id) => {
      const newItem = { id: id, quantity: 1 };
      dispatch(addItemProduct(newItem));
    };

    const handleRemove = (id) => {
      const newItem = { id: id };
      dispatch(clearCart(newItem));
    }

    
  return     {
    cartItems: cartItems,
    handleAddItem: handleAddItem,
    handleRemoveItemProduct: handleRemoveItemProduct,
    handleAddItemProduct: handleAddItemProduct,
    handleRemove: handleRemove, 
    // handleAddItem: (data) => {
    //       const newItem = { id: data.id, quently:1 };
    //       dispatch(addItem(newItem));
    //   },
    // handleRemoveItem: () => {
    //     dispatch(removeItem());
    // },
    // handleClearCart: () => {
    //     dispatch(clearCart());
    // }

    
  }
}
