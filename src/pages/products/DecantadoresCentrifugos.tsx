// noinspection SpellCheckingInspection

import { Box, Typography, Divider } from "@mui/material";

// LOGOS
import polatLogo from "/assets/pages/products/decantadores/polat/logo.png";
import hillerLogo from "/assets/pages/products/decantadores/hiller/logo.png";
import noxonLogo from "/assets/pages/products/decantadores/noxon/logo.png";

// POLAT
import polat1 from "/assets/pages/products/decantadores/polat/decantador1.png";
import polat2 from "/assets/pages/products/decantadores/polat/decantador2.png";

// HILLER
import hiller1 from "/assets/pages/products/decantadores/hiller/decantador1.png";
import hiller2 from "/assets/pages/products/decantadores/hiller/decantador2.png";

// NOXON
import noxon1 from "/assets/pages/products/decantadores/noxon/decantador.png";

export default function DecantadoresCentrifugos() {
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
                sx={{ color: "#304797", fontWeight: 700 }}
            >
                DECANTADORES CENTRÍFUGOS
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* ======================= POLAT ======================= */}
            <Box sx={{ mb: 8 }}>
                <Box sx={{ textAlign: "center", mb: 3 }}>
                    <img src={polatLogo} alt="Polat logo" style={{ width: "150px" }} />
                </Box>

                <Box sx={{ maxWidth: "900px", mx: "auto" }}>
                    <Typography sx={{ textAlign: "justify", mb: 4 }}>
                        FLOWMACH ofrece servicios de instalación de maquinaria, puesta en marcha,
                        demostraciones de producción y capacitación sobre su uso. Servicio Post venta:
                        mantenimiento y reparación bajo garantía, además de repuestos. Con un sistema
                        de respuesta 24/7 garantizamos soluciones inmediatas.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                        mt: 2,
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={polat1}
                            alt="Polat Decantador S570"
                            style={{
                                width: "100%",
                                maxWidth: "450px",
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            }}
                        />
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={polat2}
                            alt="Polat Decantador PMS470"
                            style={{
                                width: "100%",
                                maxWidth: "450px",
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ my: 5 }} />

            {/* ======================= HILLER ======================= */}
            {/* ======================= HILLER ======================= */}
            <Box sx={{ mb: 6 }}>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                    <img src={hillerLogo} alt="Hiller logo" style={{ width: "180px" }} />
                </Box>

                <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "justify" }}>
                    <Typography sx={{ mb: 1 }}>
                        Los decantadores HILLER utilizan la fuerza centrífuga para separar mezclas
                        de dos fases en procesos continuos:
                    </Typography>
                    <ul style={{ color: "#304797", margin: "4px 0 12px 24px" }}>
                        <li>Fase sólida</li>
                        <li>Fase líquida pesada</li>
                    </ul>
                </Box>

                <Box sx={{ textAlign: "center", mb: 3 }}>
                    <img
                        src={hiller1}
                        alt="Hiller decantador 2 fases"
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        }}
                    />
                </Box>

                <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "justify" }}>
                    <Typography sx={{ mb: 1 }}>
                        El Tricanter HILLER permite la separación continua de tres fases en un solo proceso:
                    </Typography>
                    <ul style={{ color: "#304797", margin: "4px 0 8px 24px" }}>
                        <li>Fase sólida</li>
                        <li>Fase líquida pesada</li>
                        <li>Fase líquida ligera</li>
                    </ul>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                    <img
                        src={hiller2}
                        alt="Hiller Tricanter"
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        }}
                    />
                </Box>
            </Box>

            {/* ======================= NOXON ======================= */}
            <Box sx={{ mb: 6 }}>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                    <img src={noxonLogo} alt="Noxon logo" style={{ width: "170px" }} />
                </Box>

                <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "justify" }}>
                    <Typography sx={{ mb: 1 }}>
                        Los decantadores NOXON separan sólidos de líquidos mediante fuerza centrífuga
                        en configuración concurrente o contracorriente, dependiendo del modelo.
                    </Typography>

                    <Typography
                        sx={{ fontWeight: "bold", color: "#304797", mt: 1, mb: 0.5 }}
                    >
                        Capacidad de tratamiento:
                    </Typography>
                    <Typography sx={{ mb: 1 }}>
                        Desde 1 m³/h hasta 65 m³/h, según el modelo (DC30 a DC40).
                    </Typography>

                    <Typography
                        sx={{ fontWeight: "bold", color: "#304797", mt: 1, mb: 0.5 }}
                    >
                        Materiales de construcción:
                    </Typography>

                    <ul style={{ color: "#304797", margin: "4px 0 12px 24px" }}>
                        <li>
                            Estructura: Acero al carbono con pintura epóxica o acero inoxidable.
                        </li>
                        <li>Elementos internos: Acero de alta resistencia.</li>
                        <li>
                            Protección contra desgaste: Revestimiento de carburo de tungsteno en el
                            tornillo sinfín.
                        </li>
                    </ul>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                    <img
                        src={noxon1}
                        alt="Noxon Decantador"
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
