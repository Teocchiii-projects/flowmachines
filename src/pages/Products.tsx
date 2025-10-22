import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, Divider } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import PieChart from "../components/PieChart.tsx";
import SimpleGrid from "../components/SimpleGrid";

export default function Products() {
    const navigate = useNavigate();

    const productos = [
        {
            titulo: "Maquina preparadora de polímero",
            ruta: "/products/preparadora-polimero",
            descripcion: "Automatización de soluciones agua/polímero floculante",
            imagen: "/assets/pages/products/polimeros/Imagen1.png",
        },
        {
            titulo: "Planta de Tratamiento (PTARI)",
            ruta: "/products/ptari",
            descripcion: "Planta de tratamiento de aguas residuales",
            imagen: "/assets/pages/products/ptari/Imagen1.png",
        },
        {
            titulo: "Sistema preparador de sulfato férrico",
            ruta: "/products/sulfato-ferrico",
            descripcion: "Equipo para la preparación eficiente de sulfato férrico.",
            imagen: "/assets/pages/products/sulfato/Imagen1.png",
        },
        {
            titulo: "Sistema de homogenización por eductores para tanque ecualizador",
            ruta: "/products/homogenizacion-por-eductores",
            descripcion: "Mezcla eficiente en tanques ecualizadores mediante eductores.",
            imagen: "/assets/pages/products/homogenizacion/Imagen8.png",
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "white",
                borderRadius: 3,
                boxShadow: 3,
                p: 4,
                m: 4,
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{ color: "#304797", fontWeight: 700, mb: 2, fontFamily: "Zilla Slab" }}
            >
                Nuestros productos
            </Typography>

            <Divider sx={{ my: 4 }} />

            <SimpleGrid
                container
                spacing={4}
                justifyContent="center"
                alignItems="stretch"
                sx={{
                    flexWrap: "wrap",
                    flexDirection: "row", // asegura disposición horizontal
                }}
            >
                {productos.map((p) => (
                    <SimpleGrid item key={p.titulo} xs={12} md={3}>
                        <Card
                            sx={{
                                width: "90%",
                                borderRadius: 2,
                                boxShadow: 4,
                                overflow: "hidden",
                                transition: "transform 0.3s ease",
                                "&:hover": { transform: "scale(1.05)" },
                            }}
                        >
                            <CardActionArea onClick={() => navigate(p.ruta)}>
                                <Box sx={{ position: "relative" }}>
                                    <CardMedia
                                        component="img"
                                        height="160"
                                        image={p.imagen}
                                        alt={p.titulo}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                                            opacity: 0,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textAlign: "center",
                                            color: "white",
                                            fontSize: "0.9rem",
                                            px: 2,
                                            transition: "opacity 0.3s ease",
                                            "&:hover": { opacity: 1 },
                                        }}
                                    >
                                        {p.descripcion}
                                    </Box>
                                </Box>

                                <CardContent sx={{ backgroundColor: "#f8f9ff" }}>
                                    <Typography
                                        variant="subtitle1"
                                        align="center"
                                        sx={{
                                            color: "#304797",
                                            fontWeight: 600,
                                            fontFamily: "Zilla Slab",
                                        }}
                                    >
                                        {p.titulo}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SimpleGrid>
                ))}
            </SimpleGrid>

            <Box
                sx={{
                    mt: 6,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    ml: { xs: 2, md: 8 },
                    gap: 4,
                }}
            >
                <PieChart />
                <Outlet />
            </Box>
        </Box>
    );
}
