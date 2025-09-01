import {Box,Container} from "@mui/material";
import {AppNavBar} from "../components/AppNavBar.tsx";
import FooterBar from "../components/FooterBar.tsx"

export function Home(){
    return(
        <>
            <Box display={"flex"} flexDirection={"column"} height={"100vh"} overflow={"hidden"}>
                <AppNavBar/>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // para que siempre llene
                        top: 0,
                        left: 0,
                        zIndex: -1, // detrás del contenido
                    }}
                    src={"./src/assets/home/bk.mp4"}
                />

                <Container sx={{
                    marginTop:"auto",
                    marginBottom:"auto",
                }}>
                    <h1>FLOWMACH</h1>
                    <span>
                        Tratamiento, reutilización y ahorro de agua de proceso y residual. Protección del medio ambiente
                    </span>
                    <Container sx={{
                        display: "flex",
                        flexDirection:"row",
                        position: "relative"
                    }}>
                        <Box sx={{bgColor:"gray", opacity:0.7, margin:2, padding:2}}>
                            <h2>
                                DECANTADORES CENTRÍFUGOS
                            </h2>
                        </Box>

                        <Box sx={{bgColor:"gray", opacity:0.7, margin:2, padding:2}}>
                            <h2>
                                ENZIMAS Y BACTERIAS
                            </h2>
                        </Box>

                        <Box sx={{bgColor:"gray", opacity:0.7, margin:2, padding:2}}>
                            <h2>
                                POLÍMEROS FLOCULANTES Y COAGULANTES
                            </h2>
                        </Box>

                        <Box sx={{bgColor:"gray", opacity:0.7, margin:2, padding:2}}>
                            <h2>
                                TRATAMIENTO DE AGUAS RESIDUALES
                            </h2>
                        </Box>
                    </Container>
                </Container>

            </Box>
            <FooterBar/>

        </>
    )
}