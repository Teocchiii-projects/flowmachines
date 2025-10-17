import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Paper,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "./ComponentStyles.css";

export function AppNavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const menuItems = [
        { label: "Home", path: "/" },
        { label: "Productos", path: "/products" },
        { label: "Nosotros", path: "/about" },
    ];

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    zIndex: 20,
                }}
            >
                <Toolbar sx={{ minHeight: { xs: 64, md: 80 } }}>
                    {/* LOGO */}
                    <IconButton
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            padding: 0,
                        }}
                    >
                        <img
                            src="/flowlogo.svg"
                            alt="Logo"
                            width={isMobile ? 80 : 100}
                            height={isMobile ? 40 : 50}
                            style={{
                                filter:
                                    "invert(18%) sepia(54%) saturate(1822%) hue-rotate(216deg) brightness(93%) contrast(89%)",
                            }}
                        />
                    </IconButton>

                    {/* Escritorio */}
                    {!isMobile && (
                        <Box sx={{ ml: "auto", display: "flex", gap: 2, alignItems: "center" }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    color="inherit"
                                >
                                    {item.label}
                                </Button>
                            ))}

                            <Button className="contact-button" component={Link} to="/contact">
                                Contáctenos
                            </Button>
                        </Box>
                    )}

                    {/* Móvil */}
                    {isMobile && (
                        <Box sx={{ ml: "auto" }}>
                            <IconButton onClick={toggleMenu} sx={{ color: "#304797" }}>
                                <FaBars size={24} />
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            {/* Panel desplegable móvil */}
            {isMobile && menuOpen && (
                <Paper
                    elevation={6}
                    sx={{
                        position: "fixed",
                        top: 64,
                        right: 10,
                        left: 10,
                        borderRadius: 3,
                        bgcolor: "white",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                        zIndex: 15,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        borderTop: "3px solid #304797",
                    }}
                >
                    {menuItems.map((item) => (
                        <Button
                            key={item.label}
                            component={Link}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            sx={{
                                color: "#2b4894",
                                textTransform: "none",
                                justifyContent: "flex-start",
                                fontSize: "1rem",
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}

                    <Button
                        className="contact-button"
                        component={Link}
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        sx={{
                            mt: 1.5,
                            textTransform: "none",
                            fontSize: "1rem",
                        }}
                    >
                        Contáctenos
                    </Button>
                </Paper>
            )}
        </>
    );
}
