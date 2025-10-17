import {Container} from "@mui/material";
import Clients from '../components/Clients.tsx';
export function Home(){
    return(
        <>
                <Container sx={{
                    marginTop:"auto",
                    marginBottom:"auto",
                    alignItems:"center"
                }}>

                    <Container sx={{
                        display: "flex",
                        flexDirection:"row",
                        justifyContent:"center"

                    }}>
                        <Clients/>


                    </Container>
                </Container>




        </>
    )
}