import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './cartSlice';  
import { useNavigate } from 'react-router-dom'; 
import './Cart.css';  

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCost = cartItems.reduce((total, item) => total + parseFloat(item.cost.replace('$', '')) * item.quantity, 0).toFixed(2);  

  // Funciones para manejar las acciones
  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item));
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleContinueShopping = () => {
    navigate('/products');  // Usa navigate en lugar de history.push
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>  
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.cost}</p>
                <p>Quantity: {item.quantity}</p>  
                <div className="cart-item-actions ">
                  <button onClick={() => handleIncreaseQuantity(item)}>Increase</button>
                  <button className='decrease-button' onClick={() => handleDecreaseQuantity(item)}>Decrease</button>
                  <button className="delete-button" onClick={() => handleRemoveItem(item)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (  
        <div className="cart-summary">
          <h2>Total Cost: ${totalCost}</h2>
          <div className="cart-buttons">
            <button onClick={() => alert("Coming Soon")}>Checkout</button> 
            <button onClick={handleContinueShopping}>Continue Shopping</button> 
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
