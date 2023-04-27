import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
// import {Silvia, SilviaCuadrada} from "../../assets/images"
import { Silvia, SilviaCuadrada } from '../../assets/images'
export const Constellators = () => {
  return (
    <>
    <Container className='text-center'>
      <h1 className='mt-3 mb-3'style={{color:'#9d6b6c'}}>Consteladores acreditados</h1>
    <Row xs={2} md={4} className="g-4 mb-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img className="img-fluid " src={Silvia}/>
            <Card.Body className='text-center'>
              <Card.Title>Nombre y Apellido</Card.Title>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <Row xs={2} md={4} className="g-4 mb-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img className="img-fluid " src={SilviaCuadrada}/>
            <Card.Body className='text-center'>
              <Card.Title>Nombre y Apellido</Card.Title>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

     <Row xs={2} md={5} className="g-4 mb-3">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img className="img-fluid rounded-circle w-100 h-auto" src={Silvia}/>
            <Card.Body className='text-center'>
              <Card.Title>Nombre y Apellido</Card.Title>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <Row xs={2} md={5} className="g-4 mb-3">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
          <Card.Img className="img-fluid " src={SilviaCuadrada}/>
            <Card.Body className='text-center'>
              <Card.Title>Nombre y Apellido</Card.Title>

            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
   
    </Container>
    </>
  )
}
