import { Box, Typography, Grid, Divider } from "@mui/material";



export function PlantaDeTratamiento() {
    return (
        <Box
            sx={{
                backgroundColor: "white",
                borderRadius: 3,
                boxShadow: 3,
                p: { xs: 3, md: 6 },
                m: 4,
                maxWidth: "1200px",
                mx: "auto",
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{ color: "#304797", fontWeight: 700, fontFamily: "Zilla Slab" }}
            >
                PTARI
            </Typography>

            {/* Subtítulo */}
            <Typography
                variant="h6"
                align="center"
                sx={{
                    mt: 1,
                    color: "#000",
                    fontWeight: 500,
                    fontFamily: "Zilla Slab",
                }}
            >
                PLANTA DE TRATAMIENTO DE AGUAS RESIDUALES E INDUSTRIALES
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography sx={{ textAlign: "justify", mb: 3 }}>
                La planta de tratamiento de aguas residuales industriales (PTARI) de FLOWMACH tiene
                como función procesar los efluentes residuales producidos en las plantas.
                El sistema consta de una fase de separación sólido–líquido con el método de flotación
                por aire disuelto con adición de insumos químicos.
            </Typography>

            <Box
                component="img"
                src="/assets/pages/products/ptari/Imagen1.png"
                alt="Sistema PTARI"
                sx={{
                    width: "100%",
                    maxHeight: 400,
                    objectFit: "contain",
                    borderRadius: 2,
                    mb: 4,
                }}
            />

            {/* Segunda sección de texto */}
            <Typography sx={{ textAlign: "justify", mb: 3 }}>
                La flotación es una operación unitaria usada para separar sólidos contenidos en una fase
                líquida. Se realiza por introducción de microburbujas de gas en la fase líquida, que se
                adhieren al material particulado previamente coagulado.
            </Typography>

            {/* Texto final */}
            <Typography sx={{ textAlign: "justify", mb: 3 }}>
                Gracias a la fuerza ascensional dinámica, el conjunto partícula–microburbujas asciende
                hasta alcanzar la superficie del líquido. Ello permite lograr que floten partículas con
                densidad mayor a la del líquido.
            </Typography>

            {/* Galería de imágenes inferiores */}
            <Grid container spacing={3} justifyContent="center">
                <Grid component="div" item xs={12} md={6}>
                    <Box
                        component="img"
                        src="/assets/pages/products/ptari/Imagen3.png"
                        alt="Tanque de tratamiento"
                        sx={{
                            width: "100%",
                            maxHeight: 220,
                            objectFit: "cover",
                            borderRadius: 2,
                            boxShadow: 2,
                        }}
                    />
                </Grid>
                <Grid component="div" item xs={12} md={3}>
                    <Box
                        component="img"
                        src="/assets/pages/products/ptari/Imagen4.png"
                        alt="Vista lateral PTARI"
                        sx={{
                            width: "100%",
                            maxHeight: 220,
                            objectFit: "cover",
                            borderRadius: 2,
                            boxShadow: 2,
                        }}
                    />
                </Grid>
                <Grid component="div" item xs={12} md={3}>
                    <Box
                        component="img"
                        src="/assets/pages/products/ptari/Imagen2.png"
                        alt="Sistema de tratamiento"
                        sx={{
                            width: "100%",
                            maxHeight: 220,
                            objectFit: "cover",
                            borderRadius: 2,
                            boxShadow: 2,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
