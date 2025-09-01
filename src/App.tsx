import './App.css';

import {Home} from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ContactUs} from "./pages/ContactUs.tsx";
import {Products} from "./pages/Products.tsx";

export function App() {
    console.log("App rendered");
  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path={"/contact"} element={<ContactUs/>} />
            <Route path={"/products"} element={<Products/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}