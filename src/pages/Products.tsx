import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Box, Divider } from "@mui/material";
import { useNavigate, Outlet} from "react-router-dom";
import PieChart from "../components/PieChart.tsx";

export default function Products() {
    const navigate = useNavigate();


    const productos = [
        {
            titulo: "Maquina perparadora de polímero",
            ruta:"/products/preparadora-polimero",
            descripcion: "Automarización de soluciones agua/polímero floculante",
            imagen: "public/assets/pages/products/polimeros/Imagen1.png",

        },
        {
            titulo: "Planta de Tratamiento (PTARI)",
            ruta:"/products/ptari",
            descripcion: "Planta de tratamiento de aguas residuales",
            imagen: "public/assets/pages/products/ptari/Imagen1.png",
        },
        {
            titulo: "Sistema preparador de sulfato férrico",
            ruta: "/products/sulfato-ferrico",
            descripcion: "Equipo para la preparación eficiente de sulfato férrico.",
            imagen: "../../public/assets/pages/products/sulfato/Imagen1.png",
        },
        {
            titulo: "Sistema de homogenización por eductores para tanque ecualizador",
            ruta:"products/sistema-homogenizador",
            descripcion: "Mezcla eficiente en tanques ecualizadores mediante eductores.",
            imagen: "public/assets/pages/products/homogenizador/Imagen1.png",
        }

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
            <h2> Nuestros productos </h2>

            <Divider sx={{ my: 4 }} />

            <Grid
                container
                spacing={4}
                sx={{
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
            >
                {productos.map((p) => (
                    <Grid item key={p.titulo}>
                        <Card
                            sx={{
                                width: 250,
                                borderRadius: 2,
                                boxShadow: 4,
                                position: "relative",
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
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    mt: 6,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <PieChart />
                <Outlet/>
            </Box>
        </Box>
    );
}
