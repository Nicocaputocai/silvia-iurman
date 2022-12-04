import { Helmet } from "react-helmet"
import { Card, Col, Container, Row } from "react-bootstrap"

import activity from "../assets/actividad.png";
const Articulos = ()=>{
    return(
        <>
         <Helmet>
      <title>Silvia Iurman - Artículos</title>
      <meta name="description" content="Artículos de Silvia Iurman - Nuevas Constelaciones Familiares Argentina"/>
    </Helmet>
    <Container fluid>
        <h2>Articulos</h2>
        </Container>
        <Container>
        <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={activity} />
            <Card.Body>
              <Card.Title>Nombre de la nota</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
        </>
    )
}

export default Articulos