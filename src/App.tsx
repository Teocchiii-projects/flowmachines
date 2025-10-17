import './App.css';

//Dependencies
import { createBrowserRouter, RouterProvider} from "react-router-dom";

//Pages
import {ContactUs} from "./pages/ContactUs.tsx";
import {Home} from "./pages/Home.tsx";
import {Layout} from "./Layouts/Layout.tsx";
import {AboutUs} from "./pages/AboutUs.tsx";
import {NotFound} from "./pages/NotFound.tsx";
import Products from "./pages/Products.tsx";
import {PlantaDeTratamiento} from "./pages/products/PlantaDeTratamiento.tsx";
import DecantadoresCentrifugos from "./pages/products/DecantadoresCentrifugos.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {path:"/", element:<Home/>},
            {path:"/contact", element:<ContactUs/>},
            
            {
            path: "/products",element:<Products/>,
            children: [
                { path: "decantadores-centrifugos", element: <DecantadoresCentrifugos /> },
                { path: "ptari", element: <PlantaDeTratamiento /> },
                { path: "maquina-preparadora-sulfato-ferrico", element: <Products /> },
                { path: "maquina-preparadora-polimeros", element: <Products /> },
                { path: "sistema-homogenizacion-eductores-tanque-ecualizador", element: <Products /> },
                { path: "sistema-generacion-microburbujas-flotacion", element: <Products /> },
                { path: "bombas-centrifugas-mezcladores-estaticos", element: <Products /> },
            ],
            },

            {path:"/about",element:<AboutUs/>},
            {path:"*",element:<NotFound/>}

        ]
    }
])
export function App() {
    console.log("App rendered");
  return <RouterProvider router={router} />

}