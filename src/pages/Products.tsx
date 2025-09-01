import {Box} from "@mui/material";
import {AppNavBar} from "../components/AppNavBar.tsx";
import FooterBar from "../components/FooterBar.tsx"

export function Products(){
    return(
        <>
            <Box display={"flex"} flexDirection={"column"} height={"100vh"} overflow={"hidden"}>
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
                <AppNavBar/>
                <FooterBar/>

            </Box>
        </>
    )
}