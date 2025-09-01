import './App.css';

//Dependencies
import { createBrowserRouter, RouterProvider} from "react-router-dom";

//Pages
import {ContactUs} from "./pages/ContactUs.tsx";
import {Home} from "./pages/Home.tsx";
import {Layout} from "./Layout.tsx";
import {AboutUs} from "./pages/AboutUs.tsx";
import {ResidualWaterTreatment} from "./pages/ResidualWaterTreatment.tsx";
import {NotFound} from "./pages/NotFound.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {path:"/", element:<Home/>},
            {path:"/contact", element:<ContactUs/>},
            {path:"/treatment", element:<ResidualWaterTreatment/>},
            {path:"/about",element:<AboutUs/>},
            {path:"*",element:<NotFound/>}

        ]
    }
])
export function App() {
    console.log("App rendered");
  return <RouterProvider router={router} />

}