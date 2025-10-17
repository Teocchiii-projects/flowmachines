import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function WhatsAppButton() {
    //TODO: CAMBIAR EL NUMERO DE TELEFONO Y MENSAJE PREDETERMINADO
    const phoneNumber = "51999999999";
    const message = "Hola, quisiera más información sobre FlowMachines";

    return (
        <Fab
            color="success"
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                position: "fixed",
                bottom: 20,
                right: 20,
                backgroundColor: "#25D366",
                "&:hover": { backgroundColor: "#1ebe5b" },
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
        >
            <WhatsAppIcon sx={{ color: "white", fontSize: 30 }} />
        </Fab>
    );
}
