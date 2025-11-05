// noinspection SpellCheckingInspection

import { Box, Typography, Divider } from "@mui/material";

// IMÁGENES
import mixer1 from "/assets/pages/products/mezcladores/mixer1.png";
import mixer2 from "/assets/pages/products/mezcladores/mixer2.png";

export default function MezcladoresEstaticos() {
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
                MEZCLADORES ESTÁTICOS
            </Typography>

            <Typography
                variant="h5"
                align="center"
                sx={{ color: "#304797", fontWeight: 600, mb: 2 }}
            >
                MIXER FM
            </Typography>

            <Divider sx={{ my: 2, borderColor: "#304797" }} />

            {/* DESCRIPCIÓN */}
            <Box sx={{ maxWidth: "900px", mx: "auto", color: "#304797", textAlign: "justify" }}>
                <Typography sx={{ mb: 2 }}>
                    Mezcla continua de fluidos en línea sin partes móviles, mediante estructuras internas
                    que inducen turbulencia y favorecen la homogenización molecular.
                </Typography>

                <Typography sx={{ fontWeight: "bold", mb: 0.5 }}>
                    Ventajas operativas:
                </Typography>

                <ul style={{ margin: "4px 0 8px 22px" }}>
                    <li>
                        Sin partes móviles, lo que reduce mantenimiento y riesgo de fallos mecánicos.
                    </li>
                    <li>
                        Alta eficiencia en mezcla de fluidos viscosos, con tiempos de residencia cortos.
                    </li>
                    <li>
                        Mejora la eficiencia de coagulación por incremento de colisiones moleculares.
                    </li>
                </ul>
            </Box>

            {/* IMÁGENES */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    mt: 3,
                    mb: 3,
                }}
            >
                <img
                    src={mixer1}
                    alt="Mezclador estático sección interna"
                    style={{
                        width: "100%",
                        maxWidth: "300px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(48,71,151,0.25)",
                    }}
                />
                <img
                    src={mixer2}
                    alt="Mezclador estático completo"
                    style={{
                        width: "100%",
                        maxWidth: "600px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(48,71,151,0.25)",
                    }}
                />
            </Box>
        </Box>
    );
}
