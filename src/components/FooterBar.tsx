import { Box, Typography, Container, IconButton, Link } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterBar: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                position: "absolute", // si quieres que siempre quede abajo, puedes usar "fixed"
                left: 0,
                width: "100%",
                bgcolor: "#111",
                color: "white",
                zIndex: 1300,
                py: 4,
            }}
        >
            <Container>
                <img
                    src={"./src/assets/home/0000018267IM01.jpg"}
                    alt={"asociados"}
                    style={{ maxWidth: "200px" }}
                />
            </Container>

            <Container maxWidth="lg" sx={{ mt: 2 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        gap: 4,
                    }}
                >
                    {/* Columna izquierda */}
                    <Box flex={1}>
                        <Typography variant="h6" gutterBottom>
                            Contáctanos
                        </Typography>
                        <Box display="flex" alignItems="flex-start" mb={1}>
                            <LocationOn sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                Dirección: Av. Los Mangos Mz. A Lt. 8-A, Urb. Canto Grande, San
                                Juan de Lurigancho, Lima, Perú
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Phone sx={{ mr: 1 }} />
                            <Typography variant="body2">Teléfono: +51 13893039</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Phone sx={{ mr: 1 }} />
                            <Typography variant="body2">Celular: +51 998 362 309</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Email sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                Email:{" "}
                                <Link
                                    href="mailto:flowmach@flowmachperu.com"
                                    color="inherit"
                                    underline="hover"
                                >
                                    flowmach@flowmachperu.com
                                </Link>
                            </Typography>
                        </Box>
                    </Box>

                    {/* Columna derecha */}
                    <Box flex={1}>
                        <Typography variant="h6" gutterBottom>
                            Síguenos
                        </Typography>
                        <Box display="flex" gap={2}>
                            <IconButton
                                href="https://www.facebook.com/flowmach#"
                                target="_blank"
                                sx={{
                                    bgcolor: "grey.700",
                                    color: "white",
                                    "&:hover": { bgcolor: "grey.500" },
                                }}
                            >
                                <FaFacebookF size={20} />
                            </IconButton>
                            <IconButton
                                href="https://x.com/flowmachsac"
                                target="_blank"
                                sx={{
                                    bgcolor: "grey.700",
                                    color: "white",
                                    "&:hover": { color: "black", bgcolor: "grey.500" },
                                }}
                            >
                                <FaSquareXTwitter size={20} />
                            </IconButton>
                            <IconButton
                                href="https://www.youtube.com/channel/UCiwvF1J73ghwpwW6wI5nEpQ"
                                target="_blank"
                                sx={{
                                    bgcolor: "grey.700",
                                    color: "white",
                                    "&:hover": { color: "red", bgcolor: "grey.500" },
                                }}
                            >
                                <FaYoutube size={20} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FooterBar;
