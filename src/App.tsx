import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from './Pages/Category/Category';
import Header from './Pages/Header/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
