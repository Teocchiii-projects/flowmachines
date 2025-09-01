import {Box,Container} from "@mui/material";

export function Home(){
    return(
        <>


                <Container sx={{
                    marginTop:"auto",
                    marginBottom:"auto",
                    alignItems:"center"
                }}>

                    <Container sx={{
                        display: "flex",
                        flexDirection:"row",
                        justifyContent:"center"

                    }}>
                        <Box sx={{bgColor:"white", opacity:0.7, margin:2, padding:2}}>
                            <h2>
                                DECANTADORES CENTRÍFUGOS
                            </h2>
                        </Box>

                        <Box sx={{bgColor:"white", opacity:0.7, margin:2, padding:2}}>
                            <h2>
                                ENZIMAS Y BACTERIAS
                            </h2>
                        </Box>

                        <Box sx={{bgColor:"white", opacity:0.7, margin:2, padding:2}}>
                            <h2>
                                POLÍMEROS FLOCULANTES Y COAGULANTES
                            </h2>
                        </Box>

                        <Box sx={{bgColor:"white", opacity:0.7, margin:2, padding:2}}>
                            <h2>
                                TRATAMIENTO DE AGUAS RESIDUALES
                            </h2>
                        </Box>
                    </Container>
                </Container>




        </>
    )
}