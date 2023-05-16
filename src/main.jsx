/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import CoffeeAdd from './components/CoffeeAdd.jsx';
import CoffeeUpdate from './components/CoffeeUpdate.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "addCoffee",
    element: <CoffeeAdd />
  },
  {
    path: "updateCoffee",
    element: <CoffeeUpdate/>
  },






]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
