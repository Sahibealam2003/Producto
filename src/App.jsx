import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";

const HomePage = lazy(() => import("./pages/HomePage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const ProductSinglePage = lazy(() => import("./pages/ProductSinglePage"));
const CategoryProduct = lazy(() => import("./pages/CategoryProduct"));

const Header = lazy(() => import("./Components/Header"));
const SideBar = lazy(() => import("./Components/SideBar"));
const Checkout = lazy(() => import("./Components/Checkout"));
const Login = lazy(() => import("./Components/Login"));

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
          <Route path="/login" element={<Login />} />
          <Route path="/product/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductSinglePage />} />
          <Route path="/checkout" element={<Checkout />} />
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
