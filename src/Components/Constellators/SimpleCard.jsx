import React from 'react'
import { Card, Col } from 'react-bootstrap'

export const SimpleCard = ({constellation}) => {
  return (
    <Col className='mb-4'>
          <Card data-aos="fade-up" className='shadow-sm rounded-2 position-relative'>
            <Card.Img className='img-fluid object-fit-cover' src={constellation.avatar}/>
            <Card.Body className='text-center position-absolute bottom-0 bg-white opacity-75 w-100'>
              <Card.Title
              className='fw-bold fs-5'
              >
              {`${constellation.firstName} ${constellation.lastName}`}
              </Card.Title>

            </Card.Body>
          </Card>
    </Col>
  )
}
