import {Container, Paper, Typography, Box} from "@mui/material";

export function AboutUs(){
    return(
        <>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "70vh",
                    bgcolor: "#f4f6f9",
                    p: 4,
                }}
            >
                <Paper
                    elevation={4}
                    sx={{
                        maxWidth: 900,
                        p: 4,
                        borderRadius: 3,
                        bgcolor: "#fff",
                        textAlign: "justify",
                        boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 3,
                            color: "#002f6d",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Sobre Nosotros
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ color: "#002f6d", lineHeight: 1.8, mb: 2 }}
                    >
                        <strong>FLOW MACHINES SAC</strong> es una empresa peruana especializada
                        en la <strong>venta y mantenimiento de decantadores centrífugos y
                        periféricos</strong>, así como en la <strong>fabricación de equipos
                        automatizados para la preparación de soluciones químicas</strong>,
                        maquinaria y proyectos industriales en general.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ color: "#002f6d", lineHeight: 1.8, mb: 3 }}
                    >
                        Contamos con un sistema de <strong>trabajo limpio, ordenado y seguro</strong>,
                        que garantiza el bienestar de nuestros colaboradores y contratistas.
                        Nuestro compromiso con la calidad y la eficiencia nos permite ofrecer
                        soluciones confiables y adaptadas a las necesidades de cada cliente.
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Glzi-Pxr5KA?si=ND1jLe5NCcNDqi7l"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{
                                borderRadius: "10px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                            }}
                        />
                    </Box>
                </Paper>
            </Container>

        </>
    )
}