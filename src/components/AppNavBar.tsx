import { AppBar, Box, Button, Container, IconButton, Toolbar, Menu, MenuItem, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { useState } from "react";   
import './ComponentStyles.css';


export function AppNavBar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const toggleMobileProducts = () => {
        setMobileProductsOpen(!mobileProductsOpen);
    };


    const mobileMenuItems = [
        { label: "Home", path: "/" },
        { label: "Productos", path: "/products" },
        { label: "Nosotros", path: "/about" },
        { label: "Contáctenos", path: "/contact" }
    ];

    const productItems = [
        "Decantadores Centrífugos",
        "Planta de Tratamiento de Aguas Residuales e Industriales",
        "Máquina Preparadora de Sulfato Férrico",
        "Máquina Preparadora de Polímeros",
        "Sistema de Homogenización por Eductores para Tanque Ecualizador",
        "Sistema de Generación de Microburbujas para Flotación",
        "Bombas Centrífugas y Mezcladores Estáticos"
    ];

    const normalizePath = (str: string) => 
  str
    .normalize("NFD")               // separa letra de la tilde
    .replace(/[\u0300-\u036f]/g, "")// elimina las tildes
    .toLowerCase()
    .replace(/\s+/g, "-");          // espacios por guiones



    return (
        <>
            <AppBar
                position="static"
                sx={{
                    opacity: 0.9,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 10,
                    backgroundColor: "white"
                }}
                
            >
                <Toolbar sx={{  minHeight: { xs: 64, md: 80 } }}>
                    <IconButton
                        color="secondary"
                        aria-label="menu"
                        component={Link}
                        to={"/"}
                        sx={{
                            mr: { xs: 2, md: 5 },
                            padding: { xs: 1, md: 2 }
                        }}
                    >
                        <img
                            src="/flowlogo.svg"
                            width={isMobile ? 80 : 100}
                            height={isMobile ? 40 : 50}
                            alt="Logo"
                            style={{
                                filter:
                                "invert(18%) sepia(54%) saturate(1822%) hue-rotate(216deg) brightness(93%) contrast(89%)",
                            }}
                        />
                    </IconButton>

                       
                    {isMobile ? ( //Mobile menu
                        <>
                            <Box sx={{ flexGrow: 1 }} />
                            <IconButton
                                color="inherit"
                                onClick={toggleMobileDrawer}
                                sx={{ color: "white" }}
                            >
                                <FaBars size={24} />
                            </IconButton>
                        </>
                    ) : (

                        //Full Menu for Desktop
                        <Container sx={{ display: "flex", flexDirection: "column" }}>
                            

                            <Box sx={{ ml: "auto", display: "flex", gap: 2 }}>
                                <Button component={Link} to={"/"} color="inherit">
                                    Home
                                </Button>

                                <Box>
                                <Button
                                    color="inherit"
                                    aria-controls={anchorEl ? "products-menu" : undefined}
                                    aria-haspopup="true"
                                    onClick={handleMenuOpen}   
                                >
                                    Productos ▼
                                </Button>
                                <Menu
                                    id="products-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    {productItems.map((item) => (
                                    <MenuItem
                                        key={item}
                                        component={Link}  
                                        to={`/products/${normalizePath(item)}`}
                                        onClick={handleMenuClose}
                                    >
                                        {item}
                                    </MenuItem>
                                    ))}
                                </Menu>
                                </Box>

                               
                               <Box
                               sx={{justifyContent:"left", display:"flex", alignItems:"center"}}>
                                  <Button component={Link} to={"/about"} color="inherit" sx={{mr:20}}>
                                    Nosotros
                                </Button>
                               
                                <Button className={"contact-button"}component={Link} to={"/contact"} color="inherit">
                                        Contáctenos
                                </Button>
                               </Box>


                              

                            </Box>
                        </Container>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileDrawerOpen}
                onClose={toggleMobileDrawer}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: 280,
                        bgcolor: 'grey.900',
                        color: 'white'
                    }
                }}
            >
                <Box sx={{ p: 2 }}>
                 

                    <List>
                        {mobileMenuItems.map((item) => (
                            <ListItem
                                key={item.label}
                                component={Link}
                                to={item.path}
                                onClick={toggleMobileDrawer}
                                sx={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    '&:hover': { bgcolor: 'grey.800' }
                                }}
                            >
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}

                        {/* Products with submenu */}
                        <ListItem
                            onClick={toggleMobileProducts}
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                '&:hover': { bgcolor: 'grey.800' }
                            }}
                        >
                            <ListItemText primary={`Productos ${mobileProductsOpen ? '▲' : '▼'}`} />
                        </ListItem>

                        {mobileProductsOpen && (
                            <Box sx={{ pl: 2 }}>
                                {productItems.map((item) => (
                                    <ListItem
                                        key={item}
                                        onClick={toggleMobileDrawer}
                                        sx={{
                                            color: 'grey.300',
                                            fontSize: '0.9rem',
                                            '&:hover': { bgcolor: 'grey.800' }
                                        }}
                                    >
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </Box>
                        )}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}