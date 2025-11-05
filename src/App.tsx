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
import MaquinaPolimeros from "./pages/products/MaquinaPolimeros.tsx";
import SistemaSulfatoFerrico from "./pages/products/SistemaSulfatoFerrico.tsx";
import Homogenizacion from "./pages/products/Homogenizacion.tsx";
import Bombas from "./pages/products/Bombas.tsx";
import BombasVerticalesMultietapa from "./pages/products/BombasVerticalesMultietapa.tsx";
import ElectrobombasSumergibles from "./pages/products/ElectrobombasSumergibles.tsx";
import BombaNovaRotors from "./pages/products/BombaNovaRotors.tsx";
import MezcladoresEstaticos from "./pages/products/MezcladoresEstaticos.tsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {path:"/", element:<Home/>},
            {path:"/contact", element:<ContactUs/>},

            // Catálogo general
            { path: "/products", element: <Products /> },

            // Páginas de producto
            { path: "/products/ptari", element: <PlantaDeTratamiento /> },
            {path: "/products/preparadora-polimero", element:<MaquinaPolimeros/>},
            { path: "/products/decantadores-centrifugos", element: <DecantadoresCentrifugos /> },
            { path: "/products/sulfato-ferrico", element: <SistemaSulfatoFerrico /> },
            { path: "/products/homogenizacion-por-eductores", element: <Homogenizacion /> },
            { path: "/products/bombas", element:<Bombas/>},
            { path:"/products/bombas-verticales", element:<BombasVerticalesMultietapa/>},
            { path:"/products/electrobombas", element:<ElectrobombasSumergibles/>},
            { path:"/products/bombas-novarotors", element:<BombaNovaRotors/>},
            { path: "/products/mezcladores-estaticos", element:<MezcladoresEstaticos/>},

            //Rutas de apoyo
            { path: "/about",element:<AboutUs/>},
            { path: "*",element:<NotFound/>}

        ]
    }
])
export function App() {
    console.log("App rendered");
  return <RouterProvider router={router} />

}