import React, { lazy, useState } from "react";
import {
  HomePage,
  CartPage,
  ProductSinglePage,
  CategoryProduct,
} from "./pages/pages";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <>

      <Header query={query} setQuery={setQuery} />
      <SideBar />

      <Routes>
        <Route path="/" element={<HomePage query={query} />} />
        

        <Route path="/search" element={<SearchBar query={query} setQuery={setQuery} />} />
        
        <Route path="/product/:id" element={<ProductSinglePage />} />
        <Route path="/product/cart" element={<CartPage />} />
        <Route
          path="/categories/:text"
          element={<CategoryProduct query={query} />}
        />
      </Routes>
    </>
  );
};

export default App;
