import { Container, Row, Col, Image, Card, Button, NavItem } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet"
import {Silvia, bannerPC} from "../../assets/images"
import ActivitiesDataServices from '../../Services/ActivitiesServices';
import { Link } from "react-router-dom";
import moment from "moment";

const Home = () => {

  const [activities, setActivities] = useState([]);

  const retrieveActivities = () =>{
    ActivitiesDataServices.getAllActivities()
    .then(response =>{
      setActivities(response.data.activities)
    })
    .catch(err => console.log(err))    
  };

  useEffect(() =>{
    retrieveActivities()
  }, []);

  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + " [Seguir leyendo...]" : str;
  };

  return (
    <>
    <Helmet>
      <title>Silvia Iurman - Home</title>
      <meta name="description" content="Home de la página de Silvia Iurman - Nuevas Constelaciones Familiares Argentina"/>
    </Helmet>
      
        <>
        <Row className="aligh-items-center">
          <Image fluid="true"  src={bannerPC} alt="banner" style={{ borderRadius: "2%"}}/>
          {/* <img className="smallscreen" src={bannerCEL} alt="banner" /> */}
        </Row>
        </>
        {/* <br /> */}
        <Container>

        <Row>
        <Col lg="4" style={{marginTop:"15px"}}>
            <Image className="img-fluid rounded-circle w-100 h-auto" src={Silvia}/>
          </Col>
          <Col lg="8" style={{marginTop:"30px"}}>
            <h1 style={{ borderRadius: "3%"}}>Silvia Iurman</h1>
            <p>
            Inicié mí búsqueda consciente en mi adolescencia. A partir de entonces, he transitado por diferentes escuelas filosóficas y psicológicas, he recorrido caminos que me condujeran en lo personal y en lo clínico hacia lo Transpersonal, tomando de grandes maestros occidentales y orientales. <br/><br/>
            La creación de Eneagrama Escuela de Vida me permitió incluir un dinamismo, neuropsicobiológico y transpersonal apoyado en el ala psicológica y espiritual del eneagrama, cuya piedra angular es la filosofía de vida de las Fuerzas del Amor de las Nuevas Constelaciones Familiares. <br/><br/>
            Mi camino es contribuir y posibilitar, desde este sistema integrativo, espacios para una vida consciente y saludable en todos los órdenes y para esto incluyo el trabajo con trauma, estrés y las comprensiones de las Neurociencias aplicadas.  <br/><br/>
            Amo mi formación de grado como psicóloga clínica y agradezco a cada formación, escuela y recorrido transitado, que me dan la posibilidad de crear un sistema integrativo, en esta trama que es la vida, al servicio de una vida consciente y de la consciencia  colectiva. 
            </p>
            <NavItem as={Link} to="/conoceme">
            <Button variant="secondary" style={{ backgroundColor: "#9d6b6c" }} className="float-end">Leer biografía completa</Button>
            </NavItem>
          </Col>
          

          {/* <Col lg="4" style={{marginTop:"15px"}}>
          <iframe  style={{ borderRadius: "2%"}} width="400vw" height="400px" src="https://www.youtube.com/embed/Pe_tb5iKR-Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Col> */}
        </Row>
        <br />
        <div align="center">
        
        </div>
        <h2 style={{ borderRadius: "3%"}}>Próximas actividades</h2>
        <br />
        <Row xs={1} md={3} className="g-4">
      {activities.slice(0,6).map((activity) =>(
        activity.important && !activity.archived && <Col key={activity._id}>
        <Card>
        <Link style={{ textDecoration: 'none', color:'black'}} to={`/calendario/${activity._id}`}>
          <Card.Img variant="top" style={{height:"300px"}} src={`https://api-silvia.divisioncode.net.ar/img/${activity.img}`} />

          <Card.Body>
            <Card.Title>{activity.name}</Card.Title>
            <Card.Text> <b>Fecha:</b> {moment(activity.day).format("DD/MM/YYYY [a las]  h:mm A [(hora Argentina (GTM -3))]")}</Card.Text>
            {/* <Card.Text> {truncate(activity.description)}</Card.Text> */}
            <Button variant="secondary" style={{ backgroundColor: "#9d6b6c" }} className="float-end mb-3">Ver actividad</Button> 
          </Card.Body>

          </Link>
        </Card>
      </Col> 
      ))}
    </Row>
      </Container>
      <br />
    </>
  );
};

export default Home