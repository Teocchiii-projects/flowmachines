import { Box, Stack, Container } from "@mui/material";
import SimpleGrid from "../components/SimpleGrid";
// Logos are served from public/ at runtime. Use absolute paths in the clientes array below.

const clientes = [
    { name: "CFG", logo: "/assets/components/clients/CFG.png", url: "https://www.copeinca.com/" },
    { name: "TASA", logo: "/assets/components/clients/Tasa.jpg", url: "https://www.tasa.com.pe/" },
    { name: "AUSTRAL", logo: "/assets/components/clients/AustralGroup.png", url: "https://www.austral.com.pe/" },
    { name: "CONDESTABLE", logo: "/assets/components/clients/Condestable.png", url: "https://www.condestable.com.pe/" },
    { name: "COPEINCA", logo: "/assets/components/clients/Copeinca.jpeg", url: "https://www.copeinca.com/" },
    { name: "EXALMAR", logo: "/assets/components/clients/Exalmar.png", url: "https://www.exalmar.com.pe/" },
    { name: "HAYDUK", logo: "/assets/components/clients/Hayduk.png", url: "https://www.hayduk.com.pe/" },
    { name: "CENTINELA", logo: "/assets/components/clients/PesqueraCentinela.png", url: "https://www.centinelapesquera.com/" },
    { name: "DIAMANTE", logo: "/assets/components/clients/PesqueraDiamante.png", url: "https://www.diamante.com.pe/" },
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
            <Container sx={{}}>
                <h3 style={{textAlign:"center", marginBottom:16}}>Nuestros Clientes</h3>
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
    
            </Container>
    
        <SimpleGrid container spacing={3} justifyContent={'center'} alignItems={'center'}>
        <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" flexWrap="wrap">
            {clientes.map((cliente) => (
                <Box
                    key={cliente.name}
                    component="a"
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
        </SimpleGrid>
         </Container>
        </>
    );
}