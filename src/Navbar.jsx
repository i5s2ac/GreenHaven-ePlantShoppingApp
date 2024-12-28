import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';  
import './Navbar.css';
import CartIcon from './assets/Cart.png';

function Navbar() {
    const cartItems = useSelector(state => state.cart.cartItems || []); 

  const cartCount = useMemo(() => cartItems.length, [cartItems]);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-GH"></Link>
        <div className="navbar-center">
          <Link to="/products" className="navbar-link">Products</Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <img src={CartIcon} alt="Cart" className="cart-icon" />
            {cartCount > 0 && (
              <div className="cart-count-container">
                <div className="cart-count">{cartCount}</div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
