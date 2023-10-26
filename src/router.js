import { createBrowserRouter } from "react-router-dom";
import Home from "./page/home";
import CategoryProducts from "./page/categoryProducts";
import ProductDetail from "./page/productDetail";
import CollectionProducts from "./page/collectionProducts";
import Layout from "./layout/layout";
import Cart from "./page/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/collection/:collectionId",
        element: <CollectionProducts />,
      },
      {
        path: "/category/:categoryId",
        element: <CategoryProducts />,
      },
    ],
  },
  {
    path: "/item/:itemId",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default router;
