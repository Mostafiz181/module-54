import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>this is my first react router</div>,
  },
  {
    path : "/Home",
    element: <div>this is home</div>
  },

  {
    path : "/Contact",
    element : <div>This is contact</div>
  },

  {
    path : "/Blog",
    element: <div>This is Blog.</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
