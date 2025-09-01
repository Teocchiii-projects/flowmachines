import {Container} from "@mui/material";

export function AboutUs(){
    return(
        <>
            <Container sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"Center",
            }}>
                <h2 style={{color:"black"}}>
                    ◈ Nosotros ◈
                </h2>
                <span style={{color:"black"}}>
                    FLOW MACHINES S.A.C. es una empresa peruana que reúne la experiencia de todo su personal para ofrecer soluciones de ingeniería a todos los sectores industriales en el área de tratamiento de aguas industriales y residuales.
                </span>
                <img src={"./src/assets/abtUs/pic1.jpg"}/>

                <span style={{color:"black"}}>
                    Nuestro compromiso de satisfacción al cliente se inicia desde la misma etapa de planificación hasta la ejecución y puesta en marcha de los proyectos basándonos en el trabajo de campo. La interacción permanente con el personal involucrado en las áreas de ejecución de los proyectos permite que los resultados de nuestras aplicaciones sean retro alimentados al proceso en un ciclo de mejora continua. Los criterios que adoptamos para diseñar soluciones buscan no sólo ofrecer productos funcionales sino también incorporar factores de gran importancia como son la facilidad de mantenimiento, confiabilidad y adaptación a las condiciones particulares de cada cliente.
                </span>

                <img src={"./src/assets/abtUs/pic2.jpg"}/>
            </Container>

        </>
    )
}