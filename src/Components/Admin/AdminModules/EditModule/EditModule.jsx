import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Button,Form,Container, Modal, NavItem, Alert, Spinner} from 'react-bootstrap'
import modulesDataServices from "../../../../Services/ModulesServices";
import { useForm } from "react-hook-form";
import { useModules } from "../../../../hooks/useModules";
import { MODULE } from "../../../../types/TYPES";
import {errorAlert, sucessAlert} from '../../../SweetAlert/Alerts'
import Swal from "sweetalert2";
import { PageLoader } from "../../../components/PageLoader";

export const EditModule = () => {
    const { id } = useParams();
  const {modulesDispatch} = useModules()
  const {register, handleSubmit, formState:{errors}, reset} = useForm();
  const [loading, setLoading] = useState(false);
  const [editModule, setEditModule] = useState({
    data:{},
    isLoading: true,
  });

  const navigate = useNavigate()

  const retrieveModule = () => {
    modulesDataServices.getById(id)

      .then((response) => {
        setEditModule({
          data: response.data.module,
          isLoading: false,
        });
        reset({
          ...response.data.module,
          date: response.data.module.date.split(':')[0] + ':' + response.data.module.date.split(':')[1],
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    retrieveModule();
    }, []);

    const save = async (dataForm) => {
      setLoading(true)

      Swal.fire({
        title: 'Seguro quieres editar el módulo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Editar!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const {data} = await modulesDataServices.editModule(id, {
              ...dataForm,
            })
      
            modulesDispatch({
              type: MODULE.EDIT,
              payload: data.moduleUpdated
            })
    
            sucessAlert('Módulo editado correctamente')
      
            navigate('/admin')
          } catch (error) {
            errorAlert('Error al editar el módulo')
          } finally{
            setLoading(false)
          }
          
        }
      })

  };

  if (editModule.isLoading) {
    return <PageLoader/>
  }
  return (
    <Container>
    <Form onSubmit={handleSubmit(save)}>
      <Form.Group>
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          {...register('title', {
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
              type="datetime-local"
              name="date"
              {...register("date", {
                required: {
                  value: true,
                  message: "La fecha es requerida",
                  },
                }
                )
              }
              
            ></Form.Control>
            {
              errors.date && <Alert 
                              variant='danger'
                              className='p-2 mt-2'>
                              {errors.date.message}
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
        <Form.Label>Link de introducción</Form.Label>
        <Form.Text></Form.Text>
        <Form.Control
          type="text"
          {...register('link_intro', {
            required: {
                value: true,
                message: 'El link es requerido'
                },
            }
          )}
        ></Form.Control>
        {
          errors.link_intro && <Alert 
                          variant='danger'
                          className='p-2 mt-2'>
                          {errors.link_intro.message}
                        </Alert>
        }
      </Form.Group>

      <Form.Group>
        <Form.Label>Link de video // Link de Zoom </Form.Label>
        <Form.Text></Form.Text>
        <Form.Control
          type="text"
          {...register('link', {
            required: {
                value: true,
                message: 'El link es requerido'
                },
            }
          )}
        ></Form.Control>
        {
          errors.link && <Alert 
                          variant='danger'
                          className='p-2 mt-2'>
                          {errors.link.message}
                        </Alert>
        }
      </Form.Group>

      <Form.Group>
            <Form.Label> Esta abierto el módulo?</Form.Label>
            <Form.Select
              defaultValue={editModule.data.open}
              name="open"
              type="select"
              {...register("open", {
                required: {
                  value: true,
                  message: "La open es requerida",
                }
                })
              }
            >
              <option selected hidden>
                Seleccionar si es importante...
              </option>
              <option value={false}>No</option>
              <option value={true}>Si</option>
            </Form.Select>
            {
              errors.important && <Alert 
                                    variant='danger'
                                    className='p-2 mt-2'>
                                    {errors.important.message}
                                  </Alert>
            }
          </Form.Group>

          <Form.Group>
            <Form.Label> Esta habilitado el módulo?</Form.Label>
            <Form.Select
              defaultValue={editModule.data.enabled}
              name="enabled"
              type="select"
              {...register("enabled", {
                required: {
                  value: true,
                  message: "La importancia es requerida",
                }
                })
              }
            >
              <option selected hidden>
                Seleccionar si es importante...
              </option>
              <option value={false}>No</option>
              <option value={true}>Si</option>
            </Form.Select>
            {
              errors.important && <Alert 
                                    variant='danger'
                                    className='p-2 mt-2'>
                                    {errors.important.message}
                                  </Alert>
            }
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
         'Editar módulo'}
      </Button>
    </Form>
  </Container>
  )
}
