import './App.css';
import {AppNavBar} from "./components/AppNavBar.tsx";
import {Outlet} from "react-router-dom";
import {Box, Container} from "@mui/material";
import FooterBar from "./components/FooterBar.tsx";

export function Layout(){
    return(
        <>
            <Container>
                <header>
                    <AppNavBar/>
                </header>
                <main>
                    <Box display={"flex"} flexDirection={"column"} height={"100vh"} overflow={"hidden"}>

                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "90%",
                                objectFit: "cover", // para que siempre llene
                                top: 0,
                                left: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                zIndex: -1, // detrás del contenido
                            }}
                            src={"./src/assets/home/bk.mp4"}
                        />
                        <Container sx={{
                            alignItems:"center",
                            marginTop:"auto",
                            marginBottom:"auto",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            padding: 2,
                            borderRadius: 2,
                            color: "white"
                        }}>
                            <h1>FLOWMACH</h1>
                            <span>
                              TRATAMIENTO DE EFLUENTES INDUSTRIALES
                            </span>
                        </Container>
                    </Box>
                    <Container sx={{
                        padding:1,
                        marginTop:-10
                    }}>
                        <Outlet/>
                    </Container>

                </main>
                <footer>
                    <FooterBar/>
                </footer>
            </Container>

        </>
    )
}