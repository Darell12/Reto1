import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import ErrorPage from './error-page';
import Adivinanza from './assets/components/Adivinanza';
import Formu from './assets/components/Formu';
import Menu from './assets/components/Menu';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/adivinanza",
    element: <Adivinanza/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/inicio",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/menu",
    element: <Menu/>,
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
