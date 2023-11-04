import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../components/ErrorPage";
import HomePage from "../pages/public-pages/HomePage";
import LoginPage from "../pages/auth-pages/LoginPage";
import RegisterPage from "../pages/auth-pages/RegisterPage";
import ProductPage from "../pages/public-pages/ProductPage";
import ContactPage from "../pages/public-pages/ContactPage";

import AdminHomePage from "../pages/admin-pages/HomePage";
import ManageProducts from "../pages/admin-pages/ManageProducts";

import PublicContainer from "../containers/PublicContainer";
import AuthContainer from "../containers/AuthContainer";
import AdminContainer from "../containers/AdminContainer";
import ManageUsers from "../pages/admin-pages/ManageUsers";
import { login } from "../services/yourspace-api/authService";
import ManageCategories from "../pages/admin-pages/ManageCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicContainer />,
    loader: async () =>
      login({
        email: "enri@email.com",
        password: "enri",
      }),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:productId",
        element: <ProductPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    element: <AuthContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <AdminContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminHomePage />,
      },
      {
        path: "products",
        element: <ManageProducts />,
      },
      {
        path: "users",
        element: <ManageUsers />,
      },
      {
        path: "categories",
        element: <ManageCategories />,
      },
    ],
  },
]);

export default router;
