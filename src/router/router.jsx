import React from 'react';
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
import ManageCategories from "../pages/admin-pages/ManageCategories";
import Logout from "../pages/public-pages/Logout";

const router = createBrowserRouter([
  
  
  
  {
    path: "/",
    element: <PublicContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:id",
        element: <ProductPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "logout",
        element: <Logout />,
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
    path: "/admin-dashboard/*",
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
  // Utiliza el componente de enrutamiento personalizado para proteger rutas
]);

export default router;
