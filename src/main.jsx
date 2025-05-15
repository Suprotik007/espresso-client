import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"; 
import MainLayout from './layouts/MainLayout';
import Home from './Components/Home';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
  Component: MainLayout,
  children:[
    {
      index:true,
      loader:()=>fetch('http://localhost:3000/coffees'),
      Component: Home
    },
    {
      path:'/addCoffee',
      Component:AddCoffee
    },
    {
      path: '/updateCoffee',
      Component:UpdateCoffee
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)