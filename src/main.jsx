import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Statistics from './component/Statistics/Statistics';
import DashBoard from './component/DashBoard/DashBoard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainContainer from './component/mainContainer/MainContainer';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/home/Home';
import Product from './component/Product/Product';
import { ApiProvider } from './component/ContextAPI/ContextApi';
import AddCart from './component/AddCart/AddCart';
import WishCart from './component/WishCart/WishCart';
import Cards from './component/Cards/Cards';
import Categories from './component/Categories/Categories';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        children:[
          {
            path:"/",
            element:<Cards/>,
          },
          {
            path:"/allproduct",
            element:<Cards/>,
          },
          {
            path:"/laptop",
            element:<Categories/>,
          },
          {
            path:"/phone",
            element:<Categories/>,
          },
          {
            path:"/smartwatch",
            element:<Categories/>,
          },

         
        ]
      },
      {
        path: "/statistic",
        element: <Statistics/>
      },
      {
        path: "/dashBoard",
        element: <DashBoard/>,
        children:[
          {
            path:"/dashBoard",
            element: <AddCart/>
         },
          {
            path:"/dashBoard/cart",
            element: <AddCart/>
         },
          {
            path:"/dashBoard/wishlist",
            element: <WishCart/>
         }

        ]
      },
      {
        path: "/brandname",
        element: <DashBoard/>,  
      },
      {
        path:"/product/:productId",
        loader: ()=>fetch("../public/Fakedata.json"),
        element: <Product/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider>
    <RouterProvider router={router} />
    </ApiProvider> 
  </StrictMode>,
)
