import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { useModules } from '../../../hooks'
import { PageLoader } from '../../components/PageLoader';

export const BuyFilmedModules = () => {
  const {modules} = useModules();
  if(modules.isLoading){
    return <PageLoader/>
  }
  return (
    <>
    <Container className='text-center'>
    <h1 className='mt-3 mb-3 textColor'>Comprar módulos grabados</h1>
    <ListGroup as="ol" className='mb-3'>

      {
            modules.data.map((module) => (
              module.typeModule === 'virtual' &&
              <ListGroup.Item
                  key={module._id}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  disabled={!module.enabled}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{module.title}</div>
                    {module.enabled ? 'Habilitado' : 'No habilitado'}
                  </div>
              </ListGroup.Item>
            ))
          }
    </ListGroup>
    </Container>
    </>
  )
}
