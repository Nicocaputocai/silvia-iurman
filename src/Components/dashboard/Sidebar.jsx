import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup, Accordion } from 'react-bootstrap'
import styles from './dashboard.module.css'
import { useCheckout, useModules, useAuth } from '../../hooks'
import { TYPE_PURCHASE } from '../../types/TYPES'



export const Sidebar = ({setContent}) => {
    const [habilited, setHabilited] = useState([])
    const {modules} = useModules();
    const {addToCheckout} = useCheckout();
    const {auth} = useAuth();

    const getHabilitedModules = () => {
        const hab = auth.user.modules.map(module => module._id)
        setHabilited(hab)
    }

    useEffect(() => {
      getHabilitedModules()
    },[auth])
  return (
    <div className={`me-auto ${styles.sidebar_size}`}>
    <Accordion defaultActiveKey="1">
    <Accordion.Item eventKey="1">
        <Accordion.Header>Modulos En Directo</Accordion.Header>
        <Accordion.Body>
          <ListGroup defaultActiveKey="#link1">
              
              {
                modules.data.map(module => (
                module.typeModule === 'sincronico' &&
                <ListGroup.Item key={module._id}>
                    <Card>
                        <Card.Header>{module.title}</Card.Header>
                        <Card.Body className='d-flex justify-content-center'>
                        <Button className='p-1 h6' variant="warning" disabled={habilited.includes(module._id)} onClick={() => addToCheckout(module, TYPE_PURCHASE.MODULE)}>Comprar</Button>
                        <Button 
                        className='p-1 h6 mx-2'
                        variant="primary" 
                        onClick={() => {setContent({module, link:false})}}>
                        Introducción
                        </Button>
                        <Button className='p-1 h6' variant="primary" disabled={!habilited.includes(module._id)} onClick={() => {setContent({module, link:true})}}>Continuar</Button>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
                ))
              }
          
        </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Modulos Grabados</Accordion.Header>
        <Accordion.Body>
          <ListGroup defaultActiveKey="#link1">
              
              {
                modules.data.map(module => (
                  module.typeModule === 'asincronico' &&
                <ListGroup.Item key={module._id}>
                    <Card>
                        <Card.Header>{module.title}</Card.Header>
                        <Card.Body className='d-flex justify-content-center'>
                        <Button 
                        className='p-1 h6'
                        variant="warning" 
                        disabled={habilited.includes(module._id)} 
                        onClick={() => addToCheckout(module, TYPE_PURCHASE.MODULE)}>
                        Comprar
                        </Button>
                        
                        <Button 
                        className='p-1 h6 mx-2'
                        variant="primary" 
                        onClick={() => {setContent({module, link:false})}}>
                        Introducción
                        </Button>

                        <Button 
                        className='p-1 h6'
                        variant="primary" 
                        disabled={!habilited.includes(module._id)}
                        onClick={() => {setContent({module, link:true})}}>
                        Continuar
                        </Button>
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
