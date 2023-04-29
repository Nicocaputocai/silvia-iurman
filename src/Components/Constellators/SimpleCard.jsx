import React from 'react'
import { Card, Col } from 'react-bootstrap'

export const SimpleCard = ({image, className=''}) => {
  return (
    <Col>
          <Card>
            <Card.Img className={`img-fluid ${className}`} src={image}/>
            <Card.Body className='text-center'>
              <Card.Title>Nombre y Apellido</Card.Title>

            </Card.Body>
          </Card>
    </Col>
  )
}
