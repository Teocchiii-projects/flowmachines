import { Box, Typography, Container, IconButton, Link } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
//TODO: El footer se mueve constantemente, depende del outlet, aseguralo con un position absolute
const FooterBar: React.FC = () => {
    return (
        <Container
            component="footer"
            sx={{
                width:"100%",
                bgcolor: "#111",
                color: "white",
                py: { xs: 3, md: 5 },
            }}
        >
           

            {/* Secciones */}
            <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 3 } }}>
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
                        <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}>
                            Contáctanos
                        </Typography>
                        <Box display="flex" alignItems="flex-start" mb={1}>
                            <LocationOn sx={{ mr: 1, fontSize: { xs: 18, md: 24 } }} />
                            <Typography variant="body2">
                                Dirección: Av. Los Mangos Mz. A Lt. 8-A, Urb. Canto Grande,
                                San Juan de Lurigancho, Lima, Perú
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Phone sx={{ mr: 1, fontSize: { xs: 18, md: 24 } }} />
                            <Typography variant="body2">Teléfono: +51 13893039</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Phone sx={{ mr: 1, fontSize: { xs: 18, md: 24 } }} />
                            <Typography variant="body2">Celular: +51 998 362 309</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <Email sx={{ mr: 1, fontSize: { xs: 18, md: 24 } }} />
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
        </Container>
    );
};

export default FooterBar;

