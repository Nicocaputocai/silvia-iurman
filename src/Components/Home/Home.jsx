import { Container, Row, Image } from "react-bootstrap"
import React from 'react';
import { bannerPC} from "../../assets/images"
import { HelmetPage } from "../components";
import { Bio } from "./Bio";
import { Activities } from "./Activities";

const Home = () => {

  return (
    <>
      {/*  */}
      <HelmetPage section='Inicio' content='Home de la página de Silvia Iurman - Nuevas Constelaciones Familiares Argentina'/>
      
        <Row className="align-items-center">
          <Image fluid="true" src={bannerPC} alt="banner"/>
          {/* <img className="smallscreen" src={bannerCEL} alt="banner" /> */}
        </Row>
        {/* <br /> */}
        <Container>

        {/* Componente bio */}
        <Bio/>

        <br />
          <h2 className='title rounded'>Próximas actividades</h2>
        <br />

        {/* container de tarjetas */}
        <Activities/>

      </Container>
      <br />
    </>
  );
};

export default Home