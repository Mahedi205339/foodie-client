import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
          {
            path:'/',
            element:<Home/>
          }
        ]
    }
])
