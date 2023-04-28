import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import styles from './dashboard.module.css'
import { useCheckout } from '../../hooks/useCheckout'

const modules = [
    {
        _id: 1,
        title: 'Módulo 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        price: 100,
        pay: false
    },
    {
        _id: 2,
        title: 'Módulo 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        price: 200,
        pay: true
    },
    {
        _id: 3,
        title: 'Módulo 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        price: 300,
        pay: true
    },
    {
        _id: 4,
        title: 'Módulo 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        price: 400,
        pay:false
    },
    {
        _id: 5,
        title: 'Módulo 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        price: 500,
        pay: false
    },
    {
        _id: 6,
        title: 'Módulo 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        price: 600,
        pay: true
    },
]

export const Sidebar = () => {
    const {addToCheckout} = useCheckout()
  return (
    <div className={`me-auto ${styles.sidebar_size}`}>
          <ListGroup defaultActiveKey="#link1">
            
              {
                modules.map(module => (
                <ListGroup.Item key={module._id}>
                    <Card>
                        <Card.Header>{module.title}</Card.Header>
                        <Card.Body className='d-flex justify-content-between'>
                        <Button variant="warning" disabled={module.pay} onClick={() => addToCheckout(module)}>Comprar</Button>
                        <Button variant="primary" disabled={!module.pay}>Continuar</Button>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
                ))
              }
           
            
            <ListGroup.Item>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body className='d-flex justify-content-between'>
                  <Button variant="warning">Comprar</Button>
                  <Button variant="primary" disabled>Continuar</Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>

            <ListGroup.Item>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body className='d-flex justify-content-between'>
                  <Button variant="warning">Comprar</Button>
                  <Button variant="primary" disabled>Continuar</Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>

            <ListGroup.Item>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body className='d-flex justify-content-between'>
                  <Button variant="warning">Comprar</Button>
                  <Button variant="primary" disabled>Continuar</Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>

            <ListGroup.Item>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body className='d-flex justify-content-between'>
                  <Button variant="warning">Comprar</Button>
                  <Button variant="primary" disabled>Continuar</Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>

            <ListGroup.Item>
              <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body className='d-flex justify-content-between'>
                  <Button variant="warning">Comprar</Button>
                  <Button variant="primary" disabled>Continuar</Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>
        </ListGroup>
      </div>
  )
}
