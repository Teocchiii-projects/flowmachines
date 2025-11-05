// noinspection SpellCheckingInspection

import { Box, Typography, Divider } from "@mui/material";

// LOGOS E IMÁGENES
import novarotorsLogo from "/assets/pages/products/novarotors/novarotors-logo.png";
import bombaNova from "/assets/pages/products/novarotors/bomba-nova.png";

export default function BombaNovaRotors() {
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
                BOMBA NOVAROTORS
            </Typography>

            <Divider sx={{ my: 2, borderColor: "#304797" }} />

            {/* LOGO */}
            <Box sx={{ textAlign: "center", mb: 2 }}>
                <img src={novarotorsLogo} alt="Nova Rotors logo" style={{ width: "220px" }} />
            </Box>

            {/* DESCRIPCIÓN */}
            <Box sx={{ maxWidth: "900px", mx: "auto", color: "#304797", textAlign: "justify" }}>
                <Typography sx={{ mb: 2 }}>
                    La Serie Diamond N de Nova Rotors representa la solución más eficiente para el
                    bombeo de fluidos viscosos o no viscosos, con o sin sólidos. Diseñadas bajo los
                    estándares más exigentes, cumplen con la norma API 676.
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        mb: 0.5,
                    }}
                >
                    SERIE DIAMOND N
                </Typography>

                <Typography
                    sx={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        mb: 1,
                    }}
                >
                    Bombas de cavidad progresiva
                </Typography>

                <Typography sx={{ mb: 1 }}>
                    Robustez, precisión y versatilidad para aplicaciones industriales exigentes.
                </Typography>

                <Typography sx={{ fontWeight: "bold", mb: 0.3 }}>
                    Ventajas
                </Typography>

                <ul style={{ margin: "4px 0 8px 22px" }}>
                    <li>Bombeo preciso de fluidos con sólidos, abrasivos o corrosivos.</li>
                    <li>Alta eficiencia volumétrica y bajo consumo energético.</li>
                    <li>Diseño modular adaptable a múltiples tipos de motorización.</li>
                </ul>
            </Box>

            {/* IMAGEN */}
            <Box
                sx={{
                    textAlign: "center",
                    mt: 3,
                }}
            >
                <img
                    src={bombaNova}
                    alt="Bomba Nova Rotors"
                    style={{
                        width: "100%",
                        maxWidth: "700px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(48,71,151,0.25)",
                    }}
                />
            </Box>
        </Box>
    );
}
