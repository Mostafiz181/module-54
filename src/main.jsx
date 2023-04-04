import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>this is my first react router</div>,
//   },
//   {
//     path : "/About",
//     element: <About></About>
//   },

//   {
//     path : "/Contact",
//     element : <Contact></Contact>
//   },

//   {
//     path : "/Blog",
//     element: <div>This is Blog.</div>
//   }
// ]);


const router = createBrowserRouter([


  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path : "/About",
        element: <About></About>
      },

      {
        path : "/Contact",
        element:<Contact></Contact>
      },

    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
