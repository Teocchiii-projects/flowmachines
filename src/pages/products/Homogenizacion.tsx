import { Box, Typography, Divider } from "@mui/material";

export default function Homogenizacion() {
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
                SISTEMA DE HOMOGENIZACIÓN POR EDUCTORES
            </Typography>

            <Typography
                variant="h5"
                align="center"
                sx={{
                    color: "#304797",
                    fontWeight: 600,
                    mb: 3,
                    fontSize: 20,
                }}
            >
                PARA TANQUE ECUALIZADOR
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Características */}
            <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 1 }}>
                Características
            </Typography>
            <Typography sx={{ textAlign: "justify", mb: 3 }}>
                El sistema de agitación por eductores de FLOWMACH es uno de los más
                eficientes para mantener mezclas homogéneas. Este tipo de sistemas se
                aplica en tanques colectores para aguas industriales (PTARI) y aguas de
                proceso.
            </Typography>

            {/* Ventajas */}
            <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 1 }}>
                Ventajas
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 4, textAlign: "justify" }}>
                <li>
                    Mantiene la mezcla homogénea, garantizando una dosificación constante
                    de coagulante y floculante.
                </li>
                <li>
                    Evita la sedimentación y formación de capas, reduciendo acumulaciones
                    en el fondo.
                </li>
                <li>Facilita la limpieza y el mantenimiento del tanque.</li>
                <li>El mantenimiento del sistema se realiza externamente.</li>
            </Box>

            {/* Bloque principal: Eductor + Hexagonal */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 5,
                    mb: 6,
                }}
            >
                {/* Imagen Eductor */}
                <Box
                    sx={{
                        flex: 1,
                        textAlign: "center",
                    }}
                >
                    <Box
                        component="img"
                        src="/assets/pages/products/homogenizacion/eductor.png"
                        alt="Eductor"
                        sx={{
                            width: { xs: "60%", md: "50%" },
                            maxHeight: 300,
                            borderRadius: 2,
                            boxShadow: 3,
                            objectFit: "contain",
                            mb: 2,
                        }}
                    />
                    <Typography sx={{ fontWeight: 600, fontSize: 15 }}>
                        EDUCTOR (Medidas: 1.5” - 3”)
                    </Typography>
                    <Typography
                        sx={{ fontStyle: "italic", mt: 1, color: "#555", px: 2 }}
                    >
                        Sistema ideal para tanque colector, evita sedimentación.
                    </Typography>
                </Box>

                {/* Imagen Hexagonal */}
                <Box
                    sx={{
                        flex: 1.2,
                        textAlign: "center",
                    }}
                >
                    <Box
                        component="img"
                        src="/assets/pages/products/homogenizacion/hexagonal.png"
                        alt="Sistema de homogenización hexagonal"
                        sx={{
                            width: "100%",
                            maxHeight: 380,
                            borderRadius: 2,
                            boxShadow: 3,
                            objectFit: "contain",
                        }}
                    />
                    <Typography
                        sx={{ fontStyle: "italic", fontSize: 14, mt: 1, color: "#555" }}
                    >
                        Sistema de homogenización por eductores hexagonal
                    </Typography>
                </Box>
            </Box>

            {/* Tres imágenes en fila */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 3, md: 4 },
                    flexWrap: "wrap",
                    mb: 2,
                }}
            >
                <Box
                    component="img"
                    src="/assets/pages/products/homogenizacion/pentagonal1.png"
                    alt="Vista pentagonal 1"
                    sx={{
                        width: { xs: "90%", md: "30%" },
                        maxHeight: 280,
                        borderRadius: 2,
                        boxShadow: 3,
                        objectFit: "contain",
                    }}
                />
                <Box
                    component="img"
                    src="/assets/pages/products/homogenizacion/pentagonal2.png"
                    alt="Vista pentagonal 2"
                    sx={{
                        width: { xs: "90%", md: "30%" },
                        maxHeight: 280,
                        borderRadius: 2,
                        boxShadow: 3,
                        objectFit: "contain",
                    }}
                />
                <Box
                    component="img"
                    src="/assets/pages/products/homogenizacion/tanque.png"
                    alt="Tanque ecualizador"
                    sx={{
                        width: { xs: "80%", md: "25%" },
                        maxHeight: 240,
                        borderRadius: 2,
                        boxShadow: 3,
                        objectFit: "contain",
                    }}
                />
            </Box>

            <Typography
                align="center"
                sx={{ mt: 3, fontStyle: "italic", color: "#555" }}
            >
                Diseño de acuerdo a la capacidad del tanque. Sistema de homogenización
                por eductores pentagonal.
            </Typography>
        </Box>
    );
}
