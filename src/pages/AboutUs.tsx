import { Container, Paper, Typography, Box } from "@mui/material";

export function AboutUs() {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "70vh",
                bgcolor: "#f4f6f9",
                p: { xs: 2, sm: 3, md: 5 },
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    width: "100%",
                    maxWidth: 900,
                    p: { xs: 2, sm: 3, md: 5 },
                    borderRadius: 3,
                    bgcolor: "#fff",
                    textAlign: "justify",
                    boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        mb: { xs: 2, sm: 3 },
                        color: "#002f6d",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: { xs: "1.5rem", sm: "1.75rem" },
                    }}
                >
                    Sobre Nosotros
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: "#002f6d",
                        lineHeight: 1.8,
                        mb: 2,
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                    }}
                >
                    <strong>FLOW MACHINES SAC</strong> es una empresa peruana especializada en la{" "}
                    <strong>venta y mantenimiento de decantadores centrífugos y periféricos</strong>,
                    así como en la{" "}
                    <strong>
                        fabricación de equipos automatizados para la preparación de soluciones químicas
                    </strong>
                    , maquinaria y proyectos industriales en general.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: "#002f6d",
                        lineHeight: 1.8,
                        mb: { xs: 3, sm: 4 },
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                    }}
                >
                    Contamos con un sistema de{" "}
                    <strong>trabajo limpio, ordenado y seguro</strong>, que garantiza el bienestar de
                    nuestros colaboradores y contratistas. Nuestro compromiso con la calidad y la
                    eficiencia nos permite ofrecer soluciones confiables y adaptadas a las necesidades
                    de cada cliente.
                </Typography>

                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "56.25%",
                        borderRadius: "10px",
                        overflow: "hidden",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    }}
                >
                    <iframe
                        src="https://www.youtube.com/embed/Glzi-Pxr5KA?si=ND1jLe5NCcNDqi7l"
                        title="Video corporativo Flow Machines"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0,
                        }}
                    />
                </Box>
            </Paper>
        </Container>
    );
}
