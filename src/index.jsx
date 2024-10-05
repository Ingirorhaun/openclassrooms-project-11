import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './routes/about-us';
import AccommodationPage, {accommodationPageLoader} from './routes/accommodation';
import HomePage from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "/about",
            element: <AboutUs/>,
          },
          {
            path: "/accommodations/:id",
            loader: accommodationPageLoader,
            element: <AccommodationPage/>
          }
        ],
      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

