import { Box, Typography, Divider } from "@mui/material";
import SimpleGrid from "../../components/SimpleGrid";

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
                El sistema de agitación por eductores de FLOWMACH es uno de los más eficientes
                para mantener mezclas de manera homogénea. Este tipo de sistemas es aplicable en
                tanques colectores para aguas industriales (PTARI) como aguas del proceso.
            </Typography>

            {/* Ventajas */}
            <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 1 }}>
                Ventajas
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 4, textAlign: "justify" }}>
                <li>
                    Mantiene la mezcla homogénea, lo que permitirá en las líneas siguientes una
                    dosificación constante de coagulante y floculante sin muchas variaciones.
                </li>
                <li>
                    Evita la sedimentación y formación de capas, reduciendo la acumulación en los
                    fondos.
                </li>
                <li>Mejora el proceso de limpieza y mantenimiento del tanque.</li>
                <li>El mantenimiento del sistema es de manera externa.</li>
            </Box>

            {/* Fila principal: eductor y tanque superior */}
            <SimpleGrid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 6, flexDirection: { xs: "column", md: "row" } }}
            >
                <SimpleGrid item xs={12} md={5}>
                    <Box
                        component="img"
                        src="/assets/pages/products/homogenizador/eductor.png"
                        alt="Eductor"
                        sx={{
                            width: "100%",
                            maxHeight: 350,
                            borderRadius: 2,
                            boxShadow: 3,
                            objectFit: "contain",
                            mb: 2,
                        }}
                    />
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontWeight: 600,
                            fontSize: 15,
                            mt: 1,
                        }}
                    >
                        EDUCTOR (Medidas: 1.5” - 3”)
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontStyle: "italic",
                            mt: 1,
                        }}
                    >
                        Sistema ideal para tanque colector, para evitar la sedimentación.
                    </Typography>
                </SimpleGrid>

                <SimpleGrid item xs={12} md={7}>
                    <Box
                        component="img"
                        src="/assets/pages/products/homogenizador/hexagonal.png"
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
                        sx={{
                            textAlign: "center",
                            fontStyle: "italic",
                            fontSize: 14,
                            mt: 1,
                        }}
                    >
                        Sistema de homogenización por eductores hexagonal
                    </Typography>
                </SimpleGrid>
            </SimpleGrid>

            {/* Segunda fila: vista pentagonal y tanque */}
            <SimpleGrid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 4, flexDirection: { xs: "column", md: "row" } }}
            >
                <SimpleGrid item xs={12} md={4}>
                    <Box
                        component="img"
                        src="/assets/pages/products/homogenizador/pentagonal1.png"
                        alt="Vista pentagonal 1"
                        sx={{
                            width: "100%",
                            maxHeight: 350,
                            borderRadius: 2,
                            boxShadow: 3,
                            objectFit: "contain",
                        }}
                    />
                </SimpleGrid>

                <SimpleGrid item xs={12} md={4}>
                    <Box
                        component="img"
                        src="/assets/pages/products/homogenizador/pentagonal2.png"
                        alt="Vista pentagonal 2"
                        sx={{
                            width: "100%",
                            maxHeight: 350,
                            borderRadius: 2,
                            boxShadow: 3,
                            objectFit: "contain",
                        }}
                    />
                </SimpleGrid>

                <SimpleGrid item xs={12} md={4}>
                    <Box
                        component="img"
                        src="/assets/pages/products/homogenizador/tanque.png"
                        alt="Tanque ecualizador"
                        sx={{
                            width: "100%",
                            maxHeight: 350,
                            borderRadius: 2,
                            boxShadow: 3,
                            objectFit: "contain",
                        }}
                    />
                </SimpleGrid>
            </SimpleGrid>

            {/* Texto final */}
            <Typography
                align="center"
                sx={{ mt: 3, fontStyle: "italic", color: "#555" }}
            >
                Diseño de acuerdo a la capacidad del tanque. Sistema de homogenización por
                eductores pentagonal.
            </Typography>
        </Box>
    );
}
