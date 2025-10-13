import { Box, Typography, Container, IconButton, Link } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const FooterBar: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                backgroundColor: "#111",
                color: "white",
                py: 3,
                mt: "auto",
                position: "relative",
                bottom: 0,
                left: 0,
                right: 0,
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
            }}
        >
            {/* Secciones */}
            <Container maxWidth="lg" sx={{ py: 3 }}>
                <Box
                    sx={{
                          display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "space-between",
                            alignItems: { xs: "flex-start", md: "flex-start" },
                            gap: { xs: 3, md: 6 },
                    }}
                >
                    {/* Contacto */}
                    <Box flex={1}>
                        <Typography variant="h6" gutterBottom sx={{ color:"white", fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                            Contáctanos
                        </Typography>
                        <Box display="flex" alignItems="flex-start" mb={1}>
                            <LocationOn sx={{ mr: 1, fontSize: { xs: 18, md: 24 } }} />
                            <Typography variant="body2" sx={{color:"white"}}>Dirección: Av. Los Mangos Mz. A Lt. 8-A, Urb. Canto Grande, San Juan de Lurigancho, Lima, Perú
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Phone sx={{ mr: 1, fontSize: { xs: 18, md: 24 } }} />
                            <Typography variant="body2" sx={{color:"white"}}>Teléfono: +51 13893039</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Phone sx={{ mr: 1, fontSize: { xs: 18, md: 24 } }} />
                            <Typography variant="body2" sx={{color:"white"}}>Celular: +51 998 362 309</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Email sx={{ mr: 1, fontSize: { xs: 18, md: 24 } }} />
                            <Typography variant="body2" sx={{color:"white"}}>
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

                    {/* Redes sociales */}
                    <Box flex={1} sx={{ textAlign: { xs: "left", md: "center" } }}>
                        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                            Síguenos
                        </Typography>
                        <Box
                            display="flex"
                            gap={{ xs: 2, md: 3 }}
                            justifyContent={{ xs: "flex-start", md: "center" }}
                            flexWrap="wrap"
                        >
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

