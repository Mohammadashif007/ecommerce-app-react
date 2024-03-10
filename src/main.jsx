import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./pages/Shop/Shop.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Shop></Shop>
          },
          {
            path: "/cart",
            element: <Cart></Cart>
          }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
