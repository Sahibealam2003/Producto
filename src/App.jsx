import{ lazy, useState } from "react";
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
import { Toaster } from "react-hot-toast";
import Checkout from "./Components/Checkout";
import Register from "./Components/Register";
import RegisterSuccess from "./Components/RegisterSuccess";
import Login from "./Components/Login";
import SellerCenter from "./Components/SellerCenter";
import DownloadApp from "./Components/DownloadApp";
import ThankYouDownload from "./Components/ThankYouDownload";
import Support from "./Components/Support";
import AddComment from "./Components/AddComment";
import OrderList from "./Components/OrderList";


const App = () => {
  const [query, setQuery] = useState("");

  return (
    <>
    <Toaster />
      <Header query={query} setQuery={setQuery} />
      <SideBar />

      <Routes>
        <Route path="/" element={<HomePage query={query} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registersuccess" element={<RegisterSuccess />} />
        <Route path="/login" element={<Login />} />
      
        <Route path="/seller" element={<SellerCenter />} />
        <Route path="/download" element={<DownloadApp/>} />
        <Route path="/thankyou" element={<ThankYouDownload/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/order-list" element={<OrderList/>} />
        <Route path="/addcomment/:id" element={<AddComment/>} />
        
        

        <Route path="/search" element={<SearchBar query={query} setQuery={setQuery} />} />
        
        <Route path="/product/:id" element={<ProductSinglePage />} />
        <Route path="/checkout" element={<Checkout />} />
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
