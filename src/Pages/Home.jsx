import { Container, Row, Col, Image, CardGroup, Card } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet"
import logo from "../assets/logo1.jpg"
import silvia from "../assets/Silvia.jpg"
import bannerPC from "../assets/A BANNER HORIZONTAL NUEVO.jpg"
import bannerCEL from "../assets/banner2.jpg"
import activity from "../assets/actividad.png"

const Home = () => {

  return (
    <>
    <Helmet>
      <title>Silvia Iurman - Home</title>
      <meta name="description" content="Home de la página de Silvia Iurman - Nuevas Constelaciones Familiares Argentina"/>
    </Helmet>
      
        <Container fluid>

        
      <Row className="aligh-items-center">
        </Row>
        <Row className="aligh-items-center">
          <img className="img-fluid"  src={bannerPC} alt="banner" style={{ borderRadius: "2%"}}/>
          {/* <img className="smallscreen" src={bannerCEL} alt="banner" /> */}
        </Row>
        </Container>
        <Container>
        <br />
        <br />

        <Row>
        <Col lg="4">
            <Image className="img-fluid" src={silvia} style={{width:'400', height:'400px', borderRadius: "2%"}}/>
          </Col>
          <Col lg="4">
            <h2 style={{ borderRadius: "3%"}}>Silvia Iurman</h2>
            <p>Lorem ipsum dolor. Harum sapiente dolor amet earum quos illo temporibus facilis atque! Temporibus deserunt quia quidem iste? Dignissimos beatae sunt id saepe totam rem odit porro minus omnis debitis repellat neque exercitationem sint sapiente eum aliquid tempora commodi doloremque voluptatum, magnam vel laborum necessitatibus magni odio! Voluptatibus iste ratione aliquam amet assumenda dicta, ipsam maiores nulla totam libero qui tempora inventore accusamus tempore at, dolorum a voluptas quibusdam doloremque perspiciatis quisquam voluptatem officia. Id, provident dolores? Ea delectus unde ad, praesentium ullam iusto eum nam dignissimos qui? Culpa, impedit.</p>
          </Col>
          <Col lg="4">
          <iframe style={{ borderRadius: "2%"}} width="400" height="400px" src="https://www.youtube.com/embed/Pe_tb5iKR-Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Col>
        </Row>
        <br />
        <div align="center">
        
        </div>
        <h2 style={{ borderRadius: "3%"}}>Próximas actividades</h2>
        <br />
        <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
          <Card>
          <Card.Img variant="top" src={activity} />
            <Card.Body>
            <Card.Title>Actividad </Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </Container>
    </>
  );
};

export default Home