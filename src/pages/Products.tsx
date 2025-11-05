import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Divider,
} from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import PieChart from "../components/PieChart.tsx";
import SimpleGrid from "../components/SimpleGrid";

export default function Products() {
    const navigate = useNavigate();

    const productos = [
        {
            titulo: "Máquina preparadora de polímero",
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
            titulo: "Sistema de homogenización por eductores",
            ruta: "/products/homogenizacion-por-eductores",
            descripcion: "Mezcla eficiente en tanques ecualizadores mediante eductores.",
            imagen: "/assets/pages/products/homogenizacion/hexagonal.png",
        },
        {
            titulo:"Decantadores centrífugos",
            ruta:"/products/decantadores-centrifugos",
            descripcion: "Equipos para la separación de sólidos y líquidos mediante fuerza centrífuga.",
            imagen:"/assets/pages/products/decantadores/polat/decantador1.png"
        }
    ];

    return (
        <Box
            sx={{
                backgroundColor: "white",
                borderRadius: 3,
                boxShadow: 3,
                p: { xs: 3, md: 5 },
                m: { xs: 2, md: 4 },
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{
                    color: "#304797",
                    fontWeight: 700,
                    mb: 4,
                    fontFamily: "Zilla Slab",
                }}
            >
                Nuestros productos
            </Typography>

            {/* Gráfico de productos más vendidos */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 5,
                }}
            >
                <PieChart />
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Tarjetas de productos */}
            <SimpleGrid
                container
                spacing={4}
                justifyContent="center"
                alignItems="stretch"
                sx={{ flexWrap: "wrap" }}
            >
                {productos.map((p) => (
                    <SimpleGrid item key={p.titulo} xs={12} md={3}>
                        <Card
                            sx={{
                                width: "100%",
                                borderRadius: 2,
                                boxShadow: 4,
                                overflow: "hidden",
                                transition: "transform 0.3s ease",
                                "&:hover": { transform: "scale(1.05)" },
                            }}
                        >
                            <CardActionArea onClick={() => navigate(p.ruta)}>
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        height: 0,
                                        paddingTop: "70%", // Mantiene proporción cuadrada
                                        overflow: "hidden",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={p.imagen}
                                        alt={p.titulo}
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            backgroundColor: "#fafafa",
                                        }}
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

            {/* Contenido dinámico de producto (Outlet) */}
            <Box
                sx={{
                    mt: 6,
                    px: { xs: 2, md: 6 },
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
}
