// noinspection SpellCheckingInspection

import { Box, Typography, Divider } from "@mui/material";

// LOGOS
import kirloskarLogo from "/assets/pages/products/bombas/kirloskar-logo.png";
import saerLogo from "/assets/pages/products/bombas/saer-logo.png";

// IMÁGENES
import kirloskarImg from "/assets/pages/products/bombas/k-bomba1.png";
import saerImg from "/assets/pages/products/bombas/s-bomba1.png";
import ncbImg from "/assets/pages/products/bombas/bomba3.png";
import materialesImg from "/assets/pages/products/bombas/materiales.png";

export default function Bombas() {
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
                lineHeight: 1.6,
            }}
        >
            {/* Título principal */}
            <Typography
                variant="h4"
                align="center"
                sx={{ color: "#304797", fontWeight: 700 }}
            >
                BOMBAS
            </Typography>

            <Divider sx={{ my: 2, borderColor: "#304797" }} />

            {/* ======================= KIRLOSKAR ======================= */}
            <Box sx={{ mb: 6 }}>
                <Box sx={{ textAlign: "center", mb: 1.5 }}>
                    <img src={kirloskarLogo} alt="Kirloskar logo" style={{ width: "200px" }} />
                </Box>

                <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "justify", color: "#304797" }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 0.5 }}
                    >
                        BOMBA KIRLOSKAR - (INDIA)
                    </Typography>
                    <Typography sx={{ fontStyle: "italic", mb: 1 }}>
                        “Carcasa dividida de alta eficiencia”
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", mb: 0.3 }}>
                        Características
                    </Typography>
                    <ul style={{ margin: "4px 0 10px 22px" }}>
                        <li>Diseño con doble voluta: elimina fuerzas radiales, mejora la estabilidad.</li>
                        <li>Doble anillo de desgaste: mayor protección y resistencia.</li>
                    </ul>

                    <Typography sx={{ fontWeight: "bold", mb: 0.3 }}>
                        Ventajas
                    </Typography>
                    <ul style={{ margin: "4px 0 8px 22px" }}>
                        <li>Alta eficiencia hidráulica y confiabilidad operativa.</li>
                        <li>Diseño accesible para mantenimiento sin desmontar la tubería.</li>
                        <li>Fabricación en materiales resistentes para ambientes exigentes.</li>
                    </ul>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2,
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={kirloskarImg}
                            alt="Bomba Kirloskar"
                            style={{
                                width: "100%",
                                maxWidth: "400px",
                                borderRadius: "8px",
                                boxShadow: "0 2px 6px rgba(48,71,151,0.25)",
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ my: 3, borderColor: "#304797" }} />

            {/* ======================= SAER ======================= */}
            <Box sx={{ mb: 6 }}>
                <Box sx={{ textAlign: "center", mb: 1.5 }}>
                    <img src={saerLogo} alt="SAER logo" style={{ width: "150px" }} />
                </Box>

                <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "justify", color: "#304797" }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 0.5 }}
                    >
                        BOMBA CENTRÍFUGA SAER - (ITALIA)
                    </Typography>
                    <Typography sx={{ fontStyle: "italic", mb: 1 }}>
                        “Succión frontal estandarizada”
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", mb: 0.3 }}>
                        Características
                    </Typography>
                    <ul style={{ margin: "4px 0 10px 22px" }}>
                        <li>Diseño compacto y estandarizado.</li>
                        <li>Succión axial y descarga radial.</li>
                    </ul>

                    <Typography sx={{ fontWeight: "bold", mb: 0.3 }}>
                        Ventajas
                    </Typography>
                    <ul style={{ margin: "4px 0 8px 22px" }}>
                        <li>Norma EN733: compatibilidad universal.</li>
                        <li>Diseño modular adaptable a diferentes configuraciones.</li>
                        <li>Alta eficiencia energética y bajo mantenimiento.</li>
                    </ul>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2,
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={saerImg}
                            alt="Bomba SAER"
                            style={{
                                width: "100%",
                                maxWidth: "400px",
                                borderRadius: "8px",
                                boxShadow: "0 2px 6px rgba(48,71,151,0.25)",
                            }}
                        />
                        <Typography sx={{ color: "#304797", fontSize: "0.9rem", mt: 0.5, fontWeight: 600 }}>
                            MATERIALES
                        </Typography>
                        <img
                            src={materialesImg}
                            alt="Materiales SAER"
                            style={{
                                width: "100%",
                                maxWidth: "300px",
                                marginTop: "2px",
                                filter: "grayscale(30%)",
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ my: 3, borderColor: "#304797" }} />

            {/* ======================= NCB ======================= */}
            <Box>
                <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "justify", color: "#304797" }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 0.5 }}
                    >
                        NCB
                    </Typography>
                    <Typography sx={{ fontStyle: "italic", mb: 1 }}>
                        “Bombas para altos caudales”
                    </Typography>

                    <Typography sx={{ fontWeight: "bold", mb: 0.3 }}>
                        Características
                    </Typography>
                    <ul style={{ margin: "4px 0 10px 22px" }}>
                        <li>Monetapa centrífuga de aspiración axial.</li>
                        <li>Aplicable en sectores industrial, marino y minero.</li>
                    </ul>

                    <Typography sx={{ fontWeight: "bold", mb: 0.3 }}>
                        Ventajas
                    </Typography>
                    <ul style={{ margin: "4px 0 8px 22px" }}>
                        <li>Alta capacidad de caudal ideal para grandes volúmenes de agua.</li>
                        <li>Configuración flexible adaptable a distintos entornos y motores.</li>
                        <li>Norma EN733: compatibilidad con sistemas existentes.</li>
                    </ul>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2,
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={ncbImg}
                            alt="Bomba NCB"
                            style={{
                                width: "100%",
                                maxWidth: "400px",
                                borderRadius: "8px",
                                boxShadow: "0 2px 6px rgba(48,71,151,0.25)",
                            }}
                        />
                        <Typography sx={{ color: "#304797", fontSize: "0.9rem", mt: 0.5, fontWeight: 600 }}>
                            MATERIALES
                        </Typography>
                        <img
                            src={materialesImg}
                            alt="Materiales NCB"
                            style={{
                                width: "100%",
                                maxWidth: "300px",
                                marginTop: "2px",
                                filter: "grayscale(30%)",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
