import { lazy, useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";


const HomePage = lazy(() => import("./pages/HomePage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProductSinglePage = lazy(() => import("./pages/ProductSinglePage"));
const CategoryProduct = lazy(() => import("./pages/CategoryProduct"));


const Header = lazy(() => import("./Components/Header"));
const SideBar = lazy(() => import("./Components/SideBar"));
const SearchBar = lazy(() => import("./Components/SearchBar"));
const Checkout = lazy(() => import("./Components/Checkout"));
const Register = lazy(() => import("./Components/Register"));
const RegisterSuccess = lazy(() => import("./Components/RegisterSuccess"));
const Login = lazy(() => import("./Components/Login"));
const SellerCenter = lazy(() => import("./Components/SellerCenter"));
const DownloadApp = lazy(() => import("./Components/DownloadApp"));
const ThankYouDownload = lazy(() => import("./Components/ThankYouDownload"));
const Support = lazy(() => import("./Components/Support"));
const AddComment = lazy(() => import("./Components/AddComment"));
const OrderList = lazy(() => import("./Components/OrderList"));

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Toaster />

      <Suspense fallback={<div className="flex items-center justify-center h-[50vh] w-full bg-white">
          <PropagateLoader
            color="black"
            loading={true}
            size={40}
            speedMultiplier={1}
          />
        </div>}>
        <Header query={query} setQuery={setQuery} />
        <SideBar />

        <Routes>
          <Route path="/" element={<HomePage query={query} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registersuccess" element={<RegisterSuccess />} />
          <Route path="/login" element={<Login />} />

          <Route path="/seller" element={<SellerCenter />} />
          <Route path="/download" element={<DownloadApp />} />
          <Route path="/thankyou" element={<ThankYouDownload />} />
          <Route path="/support" element={<Support />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/addcomment/:id" element={<AddComment />} />

          <Route
            path="/search"
            element={<SearchBar query={query} setQuery={setQuery} />}
          />

          <Route path="/product/:id" element={<ProductSinglePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/cart" element={<CartPage />} />
          <Route
            path="/categories/:text"
            element={<CategoryProduct query={query} />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
