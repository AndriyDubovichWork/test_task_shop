import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryContainer from './Pages/Category/CategoryContainer';
import Header from './Pages/Header/Header';
import './App.css';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import Payment from './Pages/Payment/Payment';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <Header />
      <Routes>
        <Route path='/' element={<CategoryContainer />} />
        <Route path='/products' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
