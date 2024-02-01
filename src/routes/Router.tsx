import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../pages/MainLayout";
import Products from "../pages/Products";
import ErrorNotFound from "../pages/ErrorNotFound";
import ProductPage from "../pages/ProductPage";

export const router = createBrowserRouter([
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
]);
