import {Link} from 'react-router-dom'
import {Button,Form,Container, NavItem, Alert} from 'react-bootstrap'
import coursesDataServices from "../../../Services/CoursesServices";
import {useForm} from 'react-hook-form'

export const AddCourse = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();


    const save = async (data) => {
      const response = await coursesDataServices.createCourse({
        ...data,
        pricePesos: +data.pricePesos,
        priceAnticipedPesos: +data.priceAnticipedPesos,
        priceDolar: +data.priceDolar,
      });
  };


  return (
    
            <Container>
        <Form onSubmit={handleSubmit(save)}>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control
              name="name"
              type="text"
              {...register("name", {
                required: {
                    value: true,
                    message: 'El título es requerido'
                }
                })}
            />
            {
              errors.name && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.name.message}
                              </Alert>
            }
          </Form.Group>
    
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              {...register('day', {
                required: {
                    value: true,
                    message: 'La fecha es requerida'
                    }
                })}
            />
            {
              errors.day && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.day.message}
                              </Alert>
            }
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Horario</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              type="number"
                {...register('hour', {
                    required: {
                        value: true,
                        message: 'El horario es requerido'
                    },
                    pattern: {
                        value: /^[0-9]*$/,
                        message: 'El horario debe ser un número'
                    },
                    min: {
                        value: 0,
                        message: 'El horario debe ser mayor a 0'
                    },
                    max: {
                        value: 23,
                        message: 'El horario debe ser menor a 23'
                    }
                })}
            />
            {
              errors.hour && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.hour.message}
                              </Alert>
            }
          </Form.Group>

          
          <Form.Group>
            <Form.Label>Precio en pesos</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              type="number"
                {...register('pricePesos', {
                    required: {
                        value: true,
                        message: 'El precio es requerido'
                    },
                })}
            />
            {
              errors.pricePesos && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.pricePesos.message}
                              </Alert>
            }
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio anticipado en pesos</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              {...register('priceAnticipedPesos', {
                required: {
                    value: true,
                    message: 'El precio anticipado es requerido'
              }
                })}
              type="number"
            />
            {
              errors.priceAnticipedPesos && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.priceAnticipedPesos.message}
                              </Alert>
            }
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio en dólares</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              type="number"
                {...register('priceDolar', {
                    required: {
                        value: true,
                        message: 'El precio en dólares es requerido'
                    }
                })}
            />
            {
              errors.priceDolar && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.priceDolar.message}
                              </Alert>
            }
          </Form.Group>

          <Form.Group>
            <Form.Label>Link Mercado Pago</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              type="text"
                {...register('linkMP', {
                    required: {
                        value: true,
                        message: 'El link de Mercado Pago es requerido'
                    }
                })}
            />
            {
              errors.linkMP && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.linkMP.message}
                              </Alert>
            }
          </Form.Group>

          <Form.Group>
            <Form.Label>Link PayPal</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              type="text"
                {...register('linkPP', {
                    required: {
                        value: true,
                        message: 'El link de PayPal es requerido'
                    }
                })}
            />
            {
              errors.linkPP && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.linkPP.message}
                              </Alert>
            }
          </Form.Group>

          <br />
          <NavItem as={Link} to={`/admin`}>
          <Button className="mb-3" type={Link} size="lg" variant="danger">
            
            Cancelar
          </Button>
          </NavItem>
          <Button
            className="mb-3 float-end"
            size="lg"
            variant="primary"
            type="submit"
          >
            Crear curso
          </Button>
        </Form>
        </Container>
  )
}