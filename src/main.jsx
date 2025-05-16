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
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import AuthProvider from './Components/AuthProvider';
import Users from './Components/Users';

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
      path: '/updateCoffee/:id',
       loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
      Component:UpdateCoffee
    },
    {
      path:'/signUp',
      Component:SignUp
    },
    {
      path:'/signIn',
      Component:SignIn
    },
    {
      path:'/users',
      loader:()=>fetch('http://localhost:3000/users'),
      Component:Users
    },
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>
) 