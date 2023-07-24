import React from 'react'
import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Button,Form,Container,Image, NavItem, Alert, Spinner} from 'react-bootstrap'
import activitiesDataServices from "../../../../Services/ActivitiesServices";
import {useForm} from 'react-hook-form'
import { PageLoader } from '../../../components/PageLoader';
import { createFormData } from '../../../../helpers';
import { useActivities } from '../../../../hooks';
import { ACTIVITY } from '../../../../types/TYPES';
import Swal from 'sweetalert2';
import { errorAlert, sucessAlert } from '../../../SweetAlert/Alerts';

export const EditActivity = () => {
  const {activitiesDispatch} = useActivities();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [editActivity, setEditActivity] = useState({
    data: {},
    isLoading: true,
  });
  const {register, formState:{errors, defaultValues}, handleSubmit, reset} = useForm();

  const [selectedImage, setSelectedImage] = useState(null); // Vista previa de la imagen
  const navigate = useNavigate();
  const handleInputFileChange = (e) => {
    //Vista previa de la foto
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    const { name, files } = e.target;
    setEditActivity({ ...editActivity, [name]: files[0] });
  };

  const retrieveActivity = async () => {
    setEditActivity({ ...editActivity, isLoading: true });
    try {
      const {data} = await activitiesDataServices.getById(id)
      setEditActivity({
        data: data.activity,
        isLoading: false,
      });
      reset({
        ...data.activity,
        day: data.activity.day.split(':')[0] + ':' + data.activity.day.split(':')[1],
      });
    } catch (error) {
      console.log(error);
    } 
  };

    const save = async (data) => {
      setLoading(true)
      Swal.fire({
        title: 'Quieres editar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Editar!'
      }).then(async (result) => {
        if (result.isConfirmed) {

          try {
            const updateData = {
              ...data,
              img: selectedImage ? selectedImage : editActivity.data.img,
            }
            const response = await activitiesDataServices.editActivity(id, createFormData(updateData))
            activitiesDispatch({type: ACTIVITY.EDIT , payload: response.data.activity})
            sucessAlert('Actividad actualizada con éxito')
            navigate('/admin')
          } catch (error) {
            console.log(error);
            errorAlert('No se pudo actualizar la actividad')
          }
          finally{
            setLoading(false)
          }
          
        }
      })

      
  };

  useEffect(() => {
    retrieveActivity();
  }, [id]);

  if (editActivity.isLoading) {
    return <PageLoader/>;
  }
  return (
      (<Container>
        <Form onSubmit={handleSubmit(save)}>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "El título es requerido",
                },
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
          <Form.Group controlId="img">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              type="file"
              name='img'
              label="Foto de portada"
              accept="image/*"
              onChange={handleInputFileChange}
            />
            {selectedImage ? (
              <div
              >
                <Image
                  style={{ maxWidth: "100%", maxHeight: 320 }}
                  src={URL.createObjectURL(selectedImage)}
                  alt="Thumb"
                  fluid= "true"
                />
              </div>
            ): 
            <Image
              src={`https://api-silvia.divisioncode.net.ar/img/${editActivity?.data.img}`}
              fluid= "true"
            ></Image>
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="datetime-local"
              name="day"
              {...register("day", {
                required: {
                  value: true,
                  message: "La fecha es requerida",
                  },
                }
                )
              }
              
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
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              {...register("description", {
                required: {
                  value: true,
                  message: "La descripción es requerida",
                }
                })
              }
            ></Form.Control>
            {
              errors.description && <Alert 
                                      variant='danger'
                                      className='p-2 mt-2'>
                                      {errors.description.message}
                                    </Alert>
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio en Pesos</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              type="text"
              {...register("pricePesos", {
                required: {
                  value: true,
                  message: "El precio en pesos es requerido",
                }
                
                })
              }
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
            <Form.Label>Precio en Dolares</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              type="text"
              {...register("priceDolar", {
                required: {
                  value: true,
                  message: "El precio en dolares es requerido",
                }
                
                })
              }
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
            <Form.Label> Modalidad</Form.Label>
            <Form.Select
              type="select"
              {...register("modality", 
              {
                required: {
                  value: true,
                  message: "La modalidad es requerida",
                }
              })
              }
            >
              <option value="#" disabled hidden>
                Seleccione la modalidad.....
              </option>
              <option value="Presencial">Presencial</option>
              <option value="Virtual">Virtual</option>
            </Form.Select>
            {
              errors.modality && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.modality.message}
                              </Alert>
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="text"
              {...register("city", {
                required: {
                  value: true,
                  message: "La ciudad es requerida",
                }
                })
              }
            ></Form.Control>
            {
              errors.city && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.city.message}
                              </Alert>
            }
          </Form.Group>

          <Form.Group>
            <Form.Label> ¿Importante?</Form.Label>
            <Form.Select
              defaultValue={editActivity.data.important}
              name="important"
              type="select"
              {...register("important", {
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

          <Form.Group>
            <Form.Label> ¿Archivar?</Form.Label>
            <Form.Select
              defaultValue={editActivity.data.archived}
              name="archived"
              type="select"
              {...register("archived", {
                required: {
                  value: true,
                  message: "Desear archivar la actividad?",
                }
                })
              }
            >
              <option value='#' selected hidden>
                Seleccionar si es importante...
              </option>
              <option value={false}>No</option>
              <option value={true}>Si</option>
            </Form.Select>
            {
              errors.archived && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.archived.message}
                              </Alert>
            }
          </Form.Group>
          <br />
          <NavItem as={Link} to={`/admin`}>
            <Button 
            className="mb-3" 
            type={Link} size="lg" v
            ariant="danger"
            disabled={loading}
            >
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
            {loading ? <Spinner 
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                          /> : "Editar actividad"}
          </Button>
        </Form>
        </Container>
      )
  );
};
