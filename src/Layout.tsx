import './App.css';
import { AppNavBar } from "./components/AppNavBar.tsx";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import covervideo from "/public/assets/home/bk.mp4";
import FooterBar from './components/FooterBar.tsx';



export function Layout() {
  return (
    <>
      <header>
        <AppNavBar />
      </header>

      <main style={{ flex: 1 }}>
        <Box
          display="flex"
          flexDirection="column"
          height="80vh"
          overflow="hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              width: "100%",
              height: "90%",
              objectFit: "cover",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            src={covervideo}
          />
          <Container
            sx={{
              alignItems: "center",
              marginTop: "auto",
              marginBottom: "auto",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              padding: 2,
              borderRadius: 2,
              color: "white",
            }}
          >
            <h1>FLOWMACH</h1>
            <span>TRATAMIENTO DE EFLUENTES INDUSTRIALES</span>
          </Container>
        </Box>

        <Container>
          <Outlet />
        </Container>
      </main>

      <FooterBar />
     </>
  );
 
  
  
}
