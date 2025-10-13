import { Box, Container, Typography, Grid, Paper } from "@mui/material";
//IMAGENES
import img1 from "../../../public/assets/pages/products/ptari/Imagen1.png";
import img2 from "../../../public/assets/pages/products/ptari/Imagen2.png";
import img3 from "../../../public/assets/pages/products/ptari/Imagen3.png";
import img4 from "../../../public/assets/pages/products/ptari/Imagen4.png";
export function  PlantaDeTratamiento() {
    return (
        <Box sx={{ bgcolor: "#ffffff", py: 5 }}>
            <Container
                maxWidth="lg"
                sx={{
                    fontFamily: "Zilla Slab, serif",
                    color: "#002f6d",
                }}
            >
                {/* Encabezado */}
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontWeight: "bold", color: "#002f6d" }}
                >
                    PTARI
                </Typography>

                <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{ mb: 2, fontWeight: 600 }}
                >
                    PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES E INDUSTRIALES
                </Typography>

                {/* Descripción inicial */}
                <Typography variant="body1" sx={{ textAlign: "justify", mb: 3 }}>
                    La planta de tratamiento de aguas residuales industriales (PTARI) de{" "}
                    <strong>FLOWMACH</strong> tiene como función procesar los efluentes
                    residuales producidos en las plantas. El sistema consta de una fase de{" "}
                    <strong>separación sólido – líquido</strong> con el método de{" "}
                    <strong>flotación por aire disuelto</strong> con adición de insumos
                    químicos.
                </Typography>

                {/* Imagen principal */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                    <img
                        src={img1}
                        alt="PTARI - planta de tratamiento"
                        style={{
                            maxWidth: "80%",
                            borderRadius: 8,
                            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                        }}
                    />
                </Box>

                {/* Sección explicativa */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 3,
                        mb: 4,
                        bgcolor: "#ffffff",
                        borderRadius: 2,
                        textAlign: "justify",
                    }}
                >
                    <Typography variant="body1" paragraph>
                        La flotación es una operación unitaria usada para separar sólidos
                        contenidos en una fase líquida. La separación se realiza mediante la
                        introducción de microburbujas de gas en la fase líquida, las cuales se
                        adhieren al material particulado previamente coagulado.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Gracias a la fuerza ascensional dinámica, el conjunto
                        partícula–microburbujas asciende hasta alcanzar la superficie del
                        líquido. Esto permite lograr que floten partículas con densidad mayor
                        a la del líquido.
                    </Typography>
                </Paper>

                {/* Galería inferior */}
                <Grid container spacing={2} justifyContent="center" display={"flex"} flexDirection={"row"}>
                    <Grid item xs={12} md={6}>
                        <img
                            src={img2}
                            alt="PTARI instalación 1"
                            style={{
                                width: "50%",
                                borderRadius: 8,
                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            src={img3}
                            alt="PTARI instalación 2"
                            style={{
                                maxWidth: "50%",
                                borderRadius: 8,
                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                            }}
                        />
                    </Grid>
                </Grid>

                <Typography
                    variant="caption"
                    align="center"
                    display="block"
                    sx={{ mt: 2, color: "#333" }}
                >
                    PTARI instaladas en plantas para el sector pesquero
                </Typography>
            </Container>
        </Box>
    );
}
