import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Main/Main';
import Home from './Home/Home';
import Login from './Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
   {
    path:"/",
    element:<Home></Home>
   },
   {
    path:"/login",
    element:<Login></Login>
   }


    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
