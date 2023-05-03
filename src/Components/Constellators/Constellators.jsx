import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Silvia, SilviaCuadrada } from '../../assets/images'
import { SimpleCard } from './SimpleCard'

export const Constellators = () => {
  return (
    <>
    <Container className='text-center'>
      <h1 className='mt-3 mb-3 textColor'>Consteladores acreditados</h1>

    <Row xs={2} md={4} className="g-4 mb-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <SimpleCard image={Silvia} key={idx}/>
      ))}
    </Row>

    <Row xs={2} md={4} className="g-4 mb-3">
      {Array.from({ length: 4 }).map((_, idx) => (
        <SimpleCard image={SilviaCuadrada} key={idx}/>
      ))}
    </Row>

     <Row xs={2} md={5} className="g-4 mb-3">
      {Array.from({ length: 5 }).map((_, idx) => (
        <SimpleCard 
          image={Silvia} 
          className='rounded-circle w-100 h-auto'
          key={idx}
        />
      ))}
    </Row>

    <Row xs={2} md={5} className="g-4 mb-3">
      {Array.from({ length: 5 }).map((_, idx) => (
        <SimpleCard 
          image={SilviaCuadrada}
          key={idx}
        />
      ))}
    </Row>
   
    </Container>
    </>
  )
}
