import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Utils/store.js";
import { ApiProvider } from "./Utils/ApiContex.jsx";

createRoot(document.getElementById("root")).render(
  
    <ApiProvider> 
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApiProvider>

);
