import { Container, ListGroup } from 'react-bootstrap';
import { useModules } from '../../../hooks/useModules';
import { PageLoader } from '../../components/PageLoader';

export const BuyPresencialModules = () => {
  const { modules } = useModules();

  if(modules.isLoading){
    return <PageLoader/>
  }

  return (
    <>
    <Container className='text-center'>
    <h1 className='mt-3 mb-3'style={{color:'#9d6b6c'}}>Comprar módulos en directo</h1>
    <ListGroup as="ol" >

          {
            modules.data.map((module) => (
              module.typeModule === 'presencial' &&
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
