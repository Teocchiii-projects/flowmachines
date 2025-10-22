import { Box, Typography, Divider } from "@mui/material";
import SimpleGrid from "../../components/SimpleGrid";

export default function MaquinaPolimeros() {
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
                MÁQUINA PREPARADORA DE POLÍMERO
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Introducción */}
            <Typography sx={{ textAlign: "justify", mb: 3 }}>
                Equipo diseñado para la preparación automatizada de soluciones agua/polímero
                floculante, utilizadas en procesos de tratamiento de efluentes industriales.
            </Typography>

            <Typography sx={{ fontSize: 24, fontWeight: 600, mb: 1 }}>
                Principio de operación:
            </Typography>

            <Box component="ul" sx={{ pl: 2, mb: 3, textAlign: "justify" }}>
                <li>Dosificación automática del polímero según concentración requerida.</li>
                <li>Mezcla y maduración controladas mediante agitador de paletas.</li>
                <li>
                    Tiempo de residencia prefilado para asegurar la activación del floculante.
                </li>
            </Box>

            {/* Sección de imágenes superiores */}
            <SimpleGrid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
                <SimpleGrid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="/assets/pages/products/polimeros/Imagen1.png"
                        alt="Equipo preparador de polímero"
                        sx={{
                            width: "100%",
                            maxHeight: 450,
                            borderRadius: 2,
                            boxShadow: 2,
                            objectFit: "contain",
                        }}
                    />
                </SimpleGrid>
                <SimpleGrid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="/assets/pages/products/polimeros/Imagen2.png"
                        alt="Tanque agitador"
                        sx={{
                            width: "100%",
                            maxHeight: 420,
                            borderRadius: 2,
                            boxShadow: 2,
                            objectFit: "contain",
                        }}
                    />
                </SimpleGrid>
            </SimpleGrid>

            {/* Diseño estructural */}
            <Typography sx={{ fontSize: 24, fontWeight: 600, mb: 1 }}>
                Diseño estructural
            </Typography>
            <Typography sx={{ textAlign: "justify", mb: 3 }}>
                Fabricación íntegra en acero inoxidable para resistencia química y facilidad de
                limpieza.
            </Typography>

            {/* Imagen inferior */}
            <Box
                component="img"
                src="/assets/pages/products/polimeros/Imagen3.png"
                alt="Vista general de la máquina"
                sx={{
                    width: "50%",
                    maxHeight: 400,
                    objectFit: "contain",
                    borderRadius: 2,
                    boxShadow: 2,
                    mb: 4,
                }}
            />


            <Typography sx={{ textAlign: "justify", mb: 2 }}>
                La máquina preparadora de polímero está diseñada para preparar las soluciones de manera
                automática según la concentración programada.
            </Typography>
            <Typography sx={{ textAlign: "justify", mb: 4 }}>
                Cuenta con touch screen panel de última generación que permite programar todos los
                parámetros de manera sencilla y eficiente. Incluye sensor de nivel en la tolva de
                polímero.
            </Typography>

            <Divider sx={{ my: 5 }} />

            <Typography
                variant="h5"
                align="center"
                sx={{ color: "#304797", fontWeight: 700, mb: 3 }}
            >
                Diseño de tanques conectados por vasos comunicantes
            </Typography>

            <SimpleGrid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                <SimpleGrid item xs={12}>
                    <Box
                        component="img"
                        src="/assets/pages/products/polimeros/Imagen4.png"
                        alt="Tanques conectados 3D"
                        sx={{
                            width: "100%",
                            maxHeight:400,
                            borderRadius: 2,
                            boxShadow: 2,
                            objectFit: "contain",
                        }}
                    />
                </SimpleGrid>

                <SimpleGrid item xs={12}>
                    <Box
                        component="img"
                        src="/assets/pages/products/polimeros/Imagen6.png"
                        alt="Vista técnica de los tanques"
                        sx={{
                            width: "100%",
                            maxHeight:400,
                            borderRadius: 2,
                            boxShadow: 2,
                            objectFit: "contain",
                        }}
                    />
                </SimpleGrid>

                <SimpleGrid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="/assets/pages/products/polimeros/Imagen5.png"
                        alt="Tanque individual con control"
                        sx={{
                            width: "100%",
                            maxHeight:400,
                            borderRadius: 2,
                            boxShadow: 2,
                            objectFit: "contain",
                        }}
                    />
                </SimpleGrid>
            </SimpleGrid>

            <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 1 }}>
                Características del diseño
            </Typography>

            <Box component="ul" sx={{ pl: 2, mb: 3, textAlign: "justify" }}>
                <li>Alta capacidad ideal para grandes volúmenes de preparación.</li>
                <li>Método de trasvase por gravedad.</li>
                <li>Minimiza los espacios.</li>
            </Box>

            <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 1 }}>Ventajas</Typography>
            <Box component="ul" sx={{ pl: 2, mb: 3, textAlign: "justify" }}>
                <li>Ahorro energético al usar la gravedad, minimizando el uso de bombas.</li>
                <li>
                    Permite comunicar, mediante válvulas, tanques de manera alterna. Esto evita llenar
                    todos los tanques cuando se tiene menor carga, optimizando el uso del sistema.
                </li>
            </Box>
        </Box>
    );
}
