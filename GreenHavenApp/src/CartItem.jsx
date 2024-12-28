import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: ${item.cost}</p>
        <div className="cart-item-actions">
          <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
          <span>Quantity: {item.quantity}</span>
          <button onClick={() => dispatch(decreaseQuantity(item))} disabled={item.quantity === 1}>-</button>
          <button onClick={() => dispatch(removeItem(item))}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
