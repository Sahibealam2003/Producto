import React, { useState } from 'react';
import { HomePage, CartPage, ProductSinglePage,CategoryProduct } from './pages/pages';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <div>
      {/* Header ke andar NavBar already ho to yahan NavBar mat lagao */}
      <Header query={query} setQuery={setQuery} />
      <SideBar />

      <Routes>
        <Route path='/' element={<HomePage query={query} />} />
        <Route path='/product/:id' element={<ProductSinglePage />} />
        <Route path='/product/cart' element={<CartPage />} />
        <Route path='/categories/:name' element={<CategoryProduct />} />
      </Routes>
    </div>
  );
};

export default App;
