import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// Pages Import starts here

import HomePage from './pages/HomePage.jsx'

// Pages Import ends here


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
