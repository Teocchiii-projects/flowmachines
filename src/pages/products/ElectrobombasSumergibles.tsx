// noinspection SpellCheckingInspection

import { Box, Typography, Divider } from "@mui/material";

// LOGOS E IMÁGENES
import saerLogo from "/assets/pages/products/electrobombas/saer-logo.png";
import ns95 from "/assets/pages/products/electrobombas/ns95.png";
import s252alt from "/assets/pages/products/electrobombas/s252alt.png";
import s252 from "/assets/pages/products/electrobombas/s252.png";
import materiales1 from "/assets/pages/products/electrobombas/materiales1.png";
import materiales2 from "/assets/pages/products/electrobombas/materiales2.png";

export default function ElectrobombasSumergibles() {
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
                ELECTROBOMBAS SUMERGIBLES
            </Typography>

            <Typography
                variant="h5"
                align="center"
                sx={{ color: "#304797", fontWeight: 600, mb: 2 }}
            >
                TIPO LAPICERO
            </Typography>

            <Divider sx={{ my: 2, borderColor: "#304797" }} />

            {/* LOGO */}
            <Box sx={{ textAlign: "center", mb: 2 }}>
                <img src={saerLogo} alt="SAER logo" style={{ width: "150px" }} />
            </Box>

            {/* DESCRIPCIÓN */}
            <Box sx={{ maxWidth: "900px", mx: "auto", color: "#304797", textAlign: "justify" }}>
                <Typography sx={{ mb: 2 }}>
                    Las electrobombas sumergibles SAER están diseñadas para el bombeo de agua en
                    condiciones industriales, agrícolas, civiles, mineras y marítimas. Combinan ingeniería
                    de precisión con materiales resistentes, ofreciendo confiabilidad, eficiencia energética
                    y larga vida útil en entornos agresivos.
                </Typography>
            </Box>

            {/* BLOQUE DE PRODUCTOS */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 6,
                    mt: 4,
                }}
            >
                {/* ====== NS95 ====== */}
                <Box sx={{ textAlign: "center", flex: 1 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            mb: 0.3,
                            color: "#304797",
                        }}
                    >
                        NS95
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            mb: 1,
                            color: "#304797",
                        }}
                    >
                        Electrobombas Radiales
                    </Typography>

                    <img
                        src={ns95}
                        alt="Electrobomba NS95"
                        style={{
                            maxHeight:"550px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 6px rgba(48,71,151,0.25)",
                        }}
                    />

                    <Typography
                        sx={{
                            color: "#304797",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            mt: 1,
                        }}
                    >
                        MATERIALES
                    </Typography>
                    <img
                        src={materiales1}
                        alt="Materiales NS95"
                        style={{
                            width: "100%",
                            maxWidth: "250px",
                            marginTop: "4px",
                            filter: "grayscale(30%)",
                        }}
                    />
                </Box>

                {/* ====== S252 ====== */}
                <Box sx={{ textAlign: "center", flex: 1 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            mb: 0.3,
                            color: "#304797",
                        }}
                    >
                        S252
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            mb: 1,
                            color: "#304797",
                        }}
                    >
                        Electrobombas Semirradiales
                    </Typography>

                    <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 4,
                    }}>


                    <img
                        src={s252}
                        alt="Electrobomba S252"
                        style={{
                            maxHeight:"550px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 6px rgba(48,71,151,0.25)",

                        }}
                    />
                    <img
                        src={s252alt}
                        alt="Electrobomba S252"
                        style={{
                            maxHeight:"550px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 6px rgba(48,71,151,0.25)",
                        }}
                    />
                    </Box>
                    <Typography
                        sx={{
                            color: "#304797",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            mt: 1,
                        }}
                    >
                        MATERIALES
                    </Typography>
                    <img
                        src={materiales2}
                        alt="Materiales S252"
                        style={{
                            width: "100%",
                            maxWidth: "250px",
                            marginTop: "4px",
                            filter: "grayscale(30%)",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
