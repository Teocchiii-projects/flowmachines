import { Box, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export function NotFound() {

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80vh",
                bgcolor: "#f4f6f9",
                p: 2,
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    p: 4,
                    borderRadius: 3,
                    textAlign: "center",
                    maxWidth: 400,
                    bgcolor: "#fff",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#304797", mb: 2 }}
                >
                    Ruta inválida
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, color: "#333" }}>
                    La página que intentas visitar no existe o fue movida.
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "#304797",
                        color: "white !important",
                        "&:hover": { bgcolor: "#25357a" },
                    }}
                    component={Link}
                    to={"/"}
                >
                    Volver al inicio
                </Button>
            </Paper>
        </Box>
    );
}
