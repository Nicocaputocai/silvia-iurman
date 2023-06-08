import {  Container } from "react-bootstrap"
import { HelmetPage } from "../components";
import { Activities } from "./Activities";

const Calendar = ()=>{

    return(
      <>
        <HelmetPage
          section='Actividades'
          content='Actividades de Silvia Iurman - Nuevas Constelaciones Familiares Argentina'
        />
        <Container>
          <br />
          <Activities />
          <br />
        </Container>
      </>
    )
}

export default Calendar