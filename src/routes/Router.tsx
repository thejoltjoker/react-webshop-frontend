import { createBrowserRouter } from "react-router-dom";
import ErrorNotFound from "../pages/ErrorNotFound";
import HomePage from "../pages/HomePage";
import MainLayout from "../pages/MainLayout";
import ProductPage from "../pages/ProductPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,

      errorElement: <ErrorNotFound />,
      children: [
        {
          path: "/",
          index: true,
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/product/:slug",
          element: <ProductPage />,
        },
      ],
    },
  ],
  { basename: "/react-webshop-frontend/" },
);
