import { Box, Stack, Grid, Container} from "@mui/material";
import Austral from "../../public/assets/components/clients/AustralGroup.png";
import CFG from "../../public/assets/components/clients/cfg.png";
import Condestable from "../../public/assets/components/clients/Condestable.png";
import Copeinca from"../../public/assets/components/clients/Copeinca.jpeg";
import Exalmar from "../../public/assets/components/clients/Exalmar.png";
import Hayduk from "../../public/assets/components/clients/Hayduk.png";
import Centinela from "../../public/assets/components/clients/PesqueraCentinela.png";
import Diamante from "../../public/assets/components/clients/PesqueraDiamante.png";
import Tasa from "../../public/assets/components/clients/Tasa.jpg";
//TODO: add animations to the images and links to the companies
const clientes = [
    {name:"CFG", logo:CFG,url:"https://www.copeinca.com/"},
    {name:"TASA", logo:Tasa,url:"https://www.tasa.com.pe/"},
    {name:"AUSTRAL", logo:Austral,url:"https://www.austral.com.pe/"},
    {name:"CONDESTABLE", logo:Condestable,url:"https://www.condestable.com.pe/"},
    {name:"COPEINCA", logo:Copeinca,url:"https://www.copeinca.com/"},
    {name:"EXALMAR", logo:Exalmar,url:"https://www.exalmar.com.pe/"},
    {name:"HAYDUK", logo:Hayduk,url:"https://www.hayduk.com.pe/"},
    {name:"CENTINELA", logo:Centinela,url:"https://www.centinelapesquera.com/"},
    {name:"DIAMANTE", logo:Diamante,url:"https://www.diamante.com.pe/"},
]


export default function Clients(){
    return(
        <>
        <Container
          sx={{
            marginTop: 4,
            marginBottom: 4,
            backgroundColor: "white",
            padding: 2,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
            <h2 style={{textAlign:"center", marginBottom:16}}>Nuestros Clientes</h2>
           <span>
                En <strong>FLOWMACH</strong> nos enorgullece ser aliados estratégicos de las principales empresas del 
                sector pesquero e industrial. Nuestro compromiso con la<strong> eficiencia, puntualidad y 
                atención personalizada 24/7 </strong> nos ha convertido en un socio confiable para proyectos de 
                gran escala y operaciones críticas 
            </span>
             <br/>
            <span>
                Cada cliente que confía en nosotros respalda nuestra<strong> experiencia técnica y capacidad 
                de respuesta inmediata</strong>, garantizando soluciones seguras, de calidad y adaptadas a cada 
                necesidad.
            </span>
            <br/>
            <span>
                Nos motiva construir relaciones sólidas basadas en <strong>la confianza, el acompañamiento 
                constante y resultados comprobados</strong>, porque sabemos que cuando nuestros clientes 
                crecen, nosotros crecemos con ellos.
            </span>
    
        <Grid container spacing={3} justifyContent={'center'} alignItems={'center'}>
        <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" flexWrap="wrap">
            {clientes.map((cliente) => (
                <Box
                    key={cliente.name}
                    component="a"
                    href={cliente.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p:2,
                        transition:"transform 0.3s, boxShadow 0.3S",
                        "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: 3,
                        }
                    }}
                >
                    <Box
                        component="img"
                        src={cliente.logo}
                        alt={cliente.name}
                        sx={{ maxWidth: '100%', maxHeight: 100, objectFit: 'contain' }}
                    />
                </Box>
            ))}
        </Stack>
        </Grid>
         </Container>
        </>
    );
}