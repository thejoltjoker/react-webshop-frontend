import { createBrowserRouter } from "react-router-dom";
import ErrorNotFound from "../pages/ErrorNotFound";
import Home from "../pages/Home";
import MainLayout from "../pages/MainLayout";
import ProductPage from "../pages/ProductPage";
import Products from "../pages/Products";

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
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
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
