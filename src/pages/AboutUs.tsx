import {Container} from "@mui/material";

export function AboutUs(){
    return(
        <>
            <Container sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"Center",
            }}>
                <h2 style={{color:"#002f6d"}}>
                    ◈ Nosotros ◈
                </h2>
                <span style={{color:"#002f6d"}}>
                    <strong>FLOW MACHINES SAC </strong>
                    es una empresa peruana especializada en la
                    <strong> venta y mantenimiento de decantadores centrífugos y periféricos, </strong>
                    así como en la
                    <strong> fabricación de equipos automatizados para la preparación de soluciones químicas, </strong>
                    maquinaria y proyectos industriales en general. Contamos con un sistema de <strong>trabajo limpio, ordenado y seguro, </strong>  que garantiza el bienestar de nuestros colaboradores y contratistas.
                </span>
                <br/>



                <span style={{color:"#002f6d"}}>
                </span>


            </Container>

        </>
    )
}