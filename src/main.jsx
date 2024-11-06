import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import BookDetail from './Components/BookDetail/BookDetail';
import ListBooks from './Components/ListBooks/ListBooks';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 
 
 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>, 
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"books/:bookId",
        element:<BookDetail></BookDetail>,
        loader:()=>fetch('/Books.json')
      },
      {
        path:'listbooks',
        element:<ListBooks></ListBooks>,
        loader:()=>fetch("/Books.json")
      },
      {
        path:'dashboard',
        element:<DashBoard></DashBoard>
      }
    ]
   
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
 <ToastContainer />
  </StrictMode>,
)
