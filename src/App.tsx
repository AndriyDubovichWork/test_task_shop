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
        <Route path='/test_task_shop' element={<CategoryContainer />} />
        <Route path='/test_task_shop/products' element={<Product />} />
        <Route path='/test_task_shop/cart' element={<Cart />} />
        <Route path='/test_task_shop/payment' element={<Payment />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
