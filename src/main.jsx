import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Product from "./pages/Product/Product";
import FormItem from "./components/FormItem/FormItem";
import RootLayout from "./pages/RootLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/create",
        element: <FormItem />,
      },
      {
        path: "product/edit",
        element: <FormItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
