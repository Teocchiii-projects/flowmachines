import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import imgDemo from "../../public/assets/pages/products/ptari/Imagen4.png"; // imagen temporal

    export default function Products() {
        const navigate = useNavigate();

        const productos = [
            { titulo: "Preparación de soluciones químicas", ruta: "/productos/soluciones-quimicas" },
            { titulo: "Separadoras centrífugas", ruta: "/productos/separadoras" },
            { titulo: "Bombas", ruta: "/productos/bombas" },
            { titulo: "Planta de Tratamiento (PTARI)", ruta: "/productos/ptari" },
            { titulo: "Tanque Reactor DAF", ruta: "/productos/daftank" },
            { titulo: "Mezcladores Estáticos", ruta: "/productos/mezcladores" },
        ];

        return (
            <Grid container spacing={3} justifyContent="center" sx={{ p: 4 }}>
                {productos.map((p) => (
                    /* @ts-expect-error grid doesn't need overflowing*/
                    <Grid item component="div" xs={12} sm={6} md={4} key={p.titulo}>
                        <Card
                            sx={{
                                borderRadius: 2,
                                boxShadow: 4,
                                transition: "transform 0.3s ease",
                                "&:hover": { transform: "scale(1.05)" },
                            }}
                        >
                            <CardActionArea onClick={() => navigate(p.ruta)}>
                                <CardMedia component="img" height="160" image={imgDemo} alt={p.titulo} />
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
        );
    }