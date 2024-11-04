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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/statistic",
        element: <Statistics/>
      },
      {
        path: "/dashBoard",
        element: <DashBoard/>
      }
      

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
