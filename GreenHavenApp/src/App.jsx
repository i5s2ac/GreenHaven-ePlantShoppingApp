import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Welcome from './Welcome';
import store from './store'; 
import Products from './Products';  
import Navbar from './Navbar'; 
import Cart from './Cart';

function App() {
  return (
    <Provider store={store}> {}
      <Router>
        <Navbar /> {}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
