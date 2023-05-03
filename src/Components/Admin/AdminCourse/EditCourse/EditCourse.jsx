import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Button,Form,Container, Modal, NavItem, Alert, Spinner} from 'react-bootstrap'
import coursesDataServices from "../../../../Services/CoursesServices";
import { useForm } from "react-hook-form";
import { useCourses } from "../../../../hooks/useCourses";
import { COURSE } from "../../../../types/TYPES";
import {errorAlert, sucessAlert} from '../../../SweetAlert/Alerts'
import Swal from "sweetalert2";
import { PageLoader } from "../../../components/PageLoader";

const EditCourse = () => {
  const { id } = useParams();
  const {coursesDispatch} = useCourses()
  const {register, handleSubmit, formState:{errors}, reset} = useForm();
  const [loading, setLoading] = useState(false);
  const [editCourse, setEditCourse] = useState({
    data:{},
    isLoading: true,
  });

  const navigate = useNavigate()

  const retrieveCourse = () => {
    coursesDataServices.getById(id)
      .then((response) => {
        setEditCourse({
          data: response.data.course,
          isLoading: false,
        });
        reset(response.data.course)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    retrieveCourse();
    }, []);

    const save = async (dataForm) => {
      setLoading(true)

      Swal.fire({
        title: 'Seguro quieres editar el curso?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Editar!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const {data} = await coursesDataServices.editCourse(id, {
              ...dataForm,
              day:dataForm.day ? dataForm.day : editCourse.data.day,
              pricePesos: +dataForm.pricePesos,
              priceAnticipedPesos: +dataForm.priceAnticipedPesos,
              priceDolar: +dataForm.priceDolar,
            })
      
            coursesDispatch({
              type: COURSE.EDIT,
              payload: data.courseUpdated
            })
    
            sucessAlert('Curso editado correctamente')
      
            navigate('/admin')
          } catch (error) {
            errorAlert('Error al editar el curso')
          } finally{
            setLoading(false)
          }
          
        }
      })

  };

  if (editCourse.isLoading) {
    return <PageLoader/>
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(save)}>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            {...register('name', {
              required: {
                  value: true,
                  message: 'El título es requerido'
                  },
              }
            )}
            disabled
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
            {...register('day')}
          ></Form.Control>
          {/* {
            errors.day && <Alert 
                            variant='danger'
                            className='p-2 mt-2'>
                            {errors.day.message}
                          </Alert>
          } */}
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
                min: {
                  value: 0,
                  message: 'El horario debe ser igual 0 mayor a 0'
                },
                max: {
                  value: 23,
                  message: 'El horario debe ser igual 23 menor a 23'
                }
            })}
          ></Form.Control>
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
              }
            )}
          ></Form.Control>
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
            type="number"
            {...register('priceAnticipedPesos', {
              required: {
                  value: true,
                  message: 'El precio anticipado es requerido'
                  },
              }
            )}
          ></Form.Control>
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
                  message: 'El precio es requerido'
                  },
              }
            )}
          ></Form.Control>
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
                  message: 'El link es requerido'
                  },
              }
            )}
          ></Form.Control>
          {
            errors.day && <Alert 
                            variant='danger'
                            className='p-2 mt-2'>
                            {errors.day.message}
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
                  message: 'El link es requerido'
                  },
              }
            )}
          ></Form.Control>
        </Form.Group>

        <br />
        <NavItem as={Link} to={`/admin`}>
          <Button className="mb-3" type={Link} size="lg" variant="danger" disabled={loading}>

            Cancelar
          </Button>
        </NavItem>
        <Button
          className="mb-3 float-end"
          size="lg"
          variant="primary"
          type="submit"
          disabled={loading}
        >
          {loading ? 
            <Spinner 
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
           : 
           'Editar curso'}
        </Button>
      </Form>
    </Container>
  )
}

export default EditCourse