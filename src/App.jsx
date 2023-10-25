import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout, Loader } from "./components";
import { HomePage, AboutPage, SearchPage, CartPage, CheckoutPage, CoursePage, MyLearningPage } from "./pages";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchLandingPageData } from "./redux/landingpageslice";



function App() {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.landingPage)

  useEffect(() => {
    // Landing page settings fetch from redux toolkit action dispatched
    dispatch(fetchLandingPageData())
  }, [])


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


  // Loader for getting basic details
  if (loading === 'idle' || loading === 'pending') {
    return <Loader />
  }


  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <Toaster />
    </React.Fragment>
  )
}

export default App
