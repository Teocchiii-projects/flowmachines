import { AppBar, Box, Button, Container, IconButton, Toolbar, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "/public/home/0000018261IM01.jpg";
import { useState } from "react";

export function AppNavBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    bgColor: "black",
                    opacity: 0.9,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 10
                }}
            >
                <Toolbar sx={{ bgcolor: "transparent" }}>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        component={Link}
                        to={"/"}
                        sx={{
                            mr: 5,
                            bgcolor: "white",
                            padding: 1.5,

                        }}
                    >
                        <img src={logo} width={100} height={50} />
                    </IconButton>

                    <Container sx={{ display: "flex", flexDirection: "column" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end", // los manda a la derecha
                                alignItems: "center",
                                gap: 2,
                                mb: 1 // un pequeño margen inferior
                            }}
                        >

                            <Box display="flex" gap={1}>
                                <IconButton
                                    href="https://www.facebook.com/flowmach#"
                                    target="_blank"
                                    sx={{
                                        bgcolor: "grey.700",
                                        color: "white",
                                        "&:hover": { bgcolor: "grey.500" },
                                        p: 1
                                    }}
                                >
                                    <FaFacebookF size={18} />
                                </IconButton>
                                <IconButton
                                    href="https://x.com/flowmachsac"
                                    target="_blank"
                                    sx={{
                                        bgcolor: "grey.700",
                                        color: "white",
                                        "&:hover": { color:"black", bgcolor: "grey.500" },
                                        p: 1
                                    }}
                                >
                                    <FaSquareXTwitter size={18} />
                                </IconButton>
                                <IconButton
                                    href="https://www.youtube.com/channel/UCiwvF1J73ghwpwW6wI5nEpQ"
                                    target="_blank"
                                    sx={{
                                        bgcolor: "grey.700",
                                        color: "white",
                                        "&:hover": { color:"red", bgcolor: "grey.500" },
                                        p: 1
                                    }}
                                >
                                    <FaYoutube size={18} />
                                </IconButton>
                                <IconButton
                                    href=""
                                    target="_blank"
                                    sx={{
                                        bgcolor:"grey.700",
                                        color: "white",
                                        "&:hover":{  color:"forestgreen",bgcolor:"grey.500"}
                                    }}
                                >
                                    <FaWhatsapp size={18}/>
                                </IconButton>
                            </Box>

                            {/* Número de teléfono */}
                            <Box sx={{ color: "white", fontWeight: "bold" }}>
                                +511 389 3039
                            </Box>
                        </Box>

                        {/* Segunda fila */}
                        <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
                            <Button component={Link} to={"/"} color="inherit">
                                Home
                            </Button>

                            {/* Botón con hover desplegable */}
                            <Box onMouseEnter={handleMenuOpen}>
                                <Button
                                    color="inherit"
                                    aria-controls={anchorEl ? "products-menu" : undefined}
                                    aria-haspopup="true"
                                    component={Link}
                                    to={"/products"}
                                >
                                    Productos ▼
                                </Button>
                                <Menu
                                    id="products-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    MenuListProps={{
                                        onMouseLeave: handleMenuClose,
                                    }}
                                >
                                    <MenuItem onClick={handleMenuClose}>Filtros Industriales</MenuItem>
                                    <MenuItem onClick={handleMenuClose}>Decantadores Centrífugos</MenuItem>
                                    <MenuItem onClick={handleMenuClose}>Polímeros Floculantes y Coagulantes</MenuItem>
                                    <MenuItem onClick={handleMenuClose}>Enzimas y Bacterias</MenuItem>
                                    <MenuItem onClick={handleMenuClose}>Bombas para Agua</MenuItem>
                                    <MenuItem onClick={handleMenuClose}>Mezcladores de Polímero</MenuItem>
                                </Menu>
                            </Box>

                            <Button component={Link} to={"/treatment"} color="inherit">
                                Tratamiento de aguas residuales
                            </Button>
                            <Button component={Link} to={"/about"} color="inherit">
                                Nosotros
                            </Button>
                            <Button component={Link} to={"/contact"} color="inherit">
                                Contáctenos
                            </Button>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    );
}
