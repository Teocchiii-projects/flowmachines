import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";

export function ContactUs() {
    const [form, setForm] = useState({
        nombre: "",
        empresa: "",
        telefono: "",
        correo: "",
        comentarios: "",
    });

    const [isVerified, setIsVerified] = useState(false);

    // cambio en inputs
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // reCAPTCHA
    const handleCaptchaChange = (value: string | null) => {
        setIsVerified(!!value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            !form.nombre ||
            !form.correo ||
            !form.empresa ||
            !form.telefono ||
            !form.comentarios
        ) {
            Swal.fire({
                icon: "warning",
                title: "Todos los campos son obligatorios",
                text: "Por favor, complete todos los campos del formulario.",
                confirmButtonColor: "#304797",
            });
            return;
        }

        if (!isVerified) {
            Swal.fire({
                icon: "warning",
                title: "Verificación requerida",
                text: "Por favor, completa el reCAPTCHA antes de enviar.",
                confirmButtonColor: "#304797",
            });
            return;
        }

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Mensaje enviado",
                    text: "Gracias por contactarnos.",
                    confirmButtonColor: "#304797",
                });
                setForm({
                    nombre: "",
                    empresa: "",
                    telefono: "",
                    correo: "",
                    comentarios: "",
                });
                setIsVerified(false);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Error al enviar el mensaje",
                    text: `Ocurrió un error al enviar el mensaje: ${error.text}`,
                    confirmButtonColor: "#304797",
                });
            });
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80vh",
                bgcolor: "#f7f7f7",
                p: 2,
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: 2,
                    overflow: "hidden",
                    width: "80%",
                    maxWidth: 1000,
                    minHeight: 400,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        p: 3,
                        bgcolor: "white",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 2,
                            color: "#304797",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Contáctenos
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            label="Nombre y Apellidos"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                            required
                        />
                        <TextField
                            label="Empresa"
                            name="empresa"
                            value={form.empresa}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                            required
                        />
                        <TextField
                            label="Teléfono"
                            name="telefono"
                            value={form.telefono}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                            required
                        />
                        <TextField
                            label="Correo Electrónico"
                            name="correo"
                            type="email"
                            value={form.correo}
                            onChange={handleChange}
                            fullWidth
                            margin="dense"
                            required
                        />
                        <TextField
                            label="Comentarios"
                            name="comentarios"
                            value={form.comentarios}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={3}
                            margin="dense"
                            required
                        />

                        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                            <ReCAPTCHA
                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                onChange={handleCaptchaChange}
                            />
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={!isVerified}
                            sx={{
                                mt: 2,
                                color: "white !important",
                                bgcolor: isVerified ? "#304797" : "#9ea7b3",
                                "&:hover": {
                                    bgcolor: isVerified ? "#25357a" : "#9ea7b3",
                                },
                                transition: "background-color 0.3s ease",
                            }}
                        >
                            Enviar
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9201103107052!2d-77.01222792416188!3d-11.980029740663385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5626dcb19fd%3A0xb064df1c82a5435b!2sFlow%20Machines%20S.A.C.%20(flowmach)!5e0!3m2!1ses-419!2spe!4v1755928823648!5m2!1ses-419!2spe"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación FlowMach"
                    />
                </Box>
            </Paper>
        </Box>
    );
}
