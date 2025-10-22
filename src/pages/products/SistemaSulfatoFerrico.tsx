import { Box, Typography, Grid, Divider } from "@mui/material";

// Images are served from `public/` at runtime. Use absolute paths (e.g. /assets/...) instead of importing from public.

export default function SistemaSulfatoFerrico() {
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
                fontFamily: "Zilla Slab",
            }}
        >
            {/* Título principal */}
            <Typography
                variant="h4"
                align="center"
                sx={{ color: "#304797", fontWeight: 700, mb: 3 }}
            >
                SISTEMA PREPARADOR DE SULFATO FÉRRICO
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Bloque superior: imagen + texto */}
            <Grid container spacing={3} alignItems="center" sx={{ mb: 4 }}>
                <Grid component="div" item xs={12} md={6}>
                    <Box
                        component="img"
                        src="/assets/pages/products/sulfato/Imagen1.png"
                        alt="Sistema preparador de sulfato férrico"
                        sx={{
                            width: "100%",
                            maxHeight: 400,
                            objectFit: "contain",
                            borderRadius: 2,
                            boxShadow: 2,
                        }}
                    />
                </Grid>
                <Grid component="div" item xs={12} md={6}>
                    <Typography sx={{ textAlign: "initial", mb: 4 }}>
                        Nuestra máquina Preparadora de coagulante (Sulfato férrico) está diseñada para
                        preparar soluciones a partir de componentes líquidos (agua) y sólidos (sulfato
                        férrico en polvo) mediante un sistema de succión. La versatilidad del equipo nos
                        permite preparar a distintas concentraciones en peso (%W/W), dependiendo de la
                        necesidad del cliente.
                    </Typography>
                </Grid>
            </Grid>

            {/* Bloque: ventajas + imagen lateral */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "40px", // separación clara entre texto e imagen
                    marginBottom: "50px",
                }}
            >
                {/* Columna de texto */}
                <div style={{ flex: 1 }}>
                    <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 2 }}>
                        Ventajas de nuestro equipo:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 0, textAlign: "justify" }}>
                        <li>
                            Nuestro sistema por succión no genera polución al momento de la preparación. Al
                            trabajar con sulfato férrico en polvo, éste tiene mayor área superficial, lo que
                            mejora y acelera el proceso de mezclado.
                        </li>
                        <li>
                            Menor tiempo de maduración; contamos con el mejor sistema de homogenización. El
                            sistema por educación permite agilizar la mezcla de manera más eficiente,
                            reduciendo el tiempo de maduración.
                        </li>
                        <li>
                            Preparación a distintas concentraciones. Nuestro equipo es adaptable a diferentes
                            configuraciones, al trabajar con BIG BAGS de 800 kg nos permite preparar
                            soluciones a la concentración %W/W que requiera.
                        </li>
                    </Box>
                </div>

                {/* Imagen lateral */}
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        component="img"
                        src="/assets/pages/products/sulfato/Imagen2.png"
                        alt="Detalle sistema sulfato"
                        sx={{
                            width: "120%", // un poco más grande
                            maxHeight: 400,
                            objectFit: "cover",
                            borderRadius: 2,
                            boxShadow: 2,
                        }}
                    />
                </div>
            </div>

            {/* Galería inferior */}
            <Grid container spacing={2} justifyContent="center">
                <Grid component="div" item xs={12} md={4}>
                    <Box
                        component="img"
                        src="/assets/pages/products/sulfato/Imagen3.png"
                        alt="Carga de sulfato férrico"
                        sx={{
                            width: "100%",
                            maxHeight: 300,
                            objectFit: "cover",
                            borderRadius: 2,
                            boxShadow: 2,
                        }}
                    />
                </Grid>
                <Grid component="div" item xs={12} md={4}>
                    <Box
                        component="img"
                        src="/assets/pages/products/sulfato/Imagen4.png"
                        alt="Preparación del sulfato"
                        sx={{
                            width: "100%",
                            maxHeight: 300,
                            objectFit: "cover",
                            borderRadius: 2,
                            boxShadow: 2,
                        }}
                    />
                </Grid>
            </Grid>

            {/* Pie de foto */}
            <Typography
                variant="body2"
                align="center"
                sx={{
                    fontStyle: "italic",
                    color: "#555",
                    mt: 3,
                }}
            >
                Pruebas de máquina preparadora de coagulante en la industria pesquera.
            </Typography>
        </Box>
    );
}
