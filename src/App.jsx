import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "./components";
import { HomePage, AboutPage, SearchPage, CartPage, CheckoutPage, CoursePage, MyLearningPage } from "./pages";
import { Toaster } from "react-hot-toast";



function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '',
          element: <HomePage />
        },
        {
          path: 'about',
          element: <AboutPage />
        },
        {
          path: 'search',
          element: <SearchPage />
        },
        {
          path: 'cart',
          element: <CartPage />
        },
        {
          path: 'checkout',
          element: <CheckoutPage />
        },
        {
          path: 'course',
          element: <CoursePage />
        },
        {
          path: 'my-learning',
          element: <MyLearningPage />
        },
      ],
    },

  ]);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <Toaster />
    </React.Fragment>
  )
}

export default App
