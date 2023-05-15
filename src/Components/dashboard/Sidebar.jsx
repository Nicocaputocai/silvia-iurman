import React from 'react'
import { Button, Card, ListGroup, Accordion } from 'react-bootstrap'
import styles from './dashboard.module.css'
import { useCheckout } from '../../hooks/useCheckout'
import { useModules } from '../../hooks/useModules'



export const Sidebar = () => {
    const {modules} = useModules();
    const {addToCheckout} = useCheckout()
  return (
    <div className={`me-auto ${styles.sidebar_size}`}>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Modulos Virtuales</Accordion.Header>
        <Accordion.Body>
          <ListGroup defaultActiveKey="#link1">
              
              {
                modules.data.map(module => (
                  module.typeModule === 'virtual' &&
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
          
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Modulos Presenciales</Accordion.Header>
        <Accordion.Body>
          <ListGroup defaultActiveKey="#link1">
              
              {
                modules.data.map(module => (
                module.typeModule === 'presencial' &&
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
          
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          
      </div>
  )
}
