import { Divider } from "@mui/material";

        export function ContactUs() {
            return (
                <>
                    <Divider sx={{ display: "flex", flexDirection: "row" }} />
                    <form>
                    </form>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9201103107052!2d-77.01222792416188!3d-11.980029740663385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5626dcb19fd%3A0xb064df1c82a5435b!2sFlow%20Machines%20S.A.C.%20(flowmach)!5e0!3m2!1ses-419!2spe!4v1755928823648!5m2!1ses-419!2spe"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </>
            );
        }