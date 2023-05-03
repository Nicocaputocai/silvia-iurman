import { useState } from "react";
import activitiesDataServices from "../../../Services/ActivitiesServices";
import { Alert, Button, Form, Image, Modal, Spinner } from "react-bootstrap";
import { createFormData } from "../../../helpers";
import { useActivities } from "../../../hooks/useActivities";
import {useForm} from 'react-hook-form'
import { ACTIVITY } from "../../../types/TYPES";
import { errorAlert, sucessAlert } from "../../SweetAlert/Alerts";

const AddActivity = () => {
  const {activitiesDispatch} = useActivities()
  const { register, handleSubmit, formState:{errors}, reset} = useForm()
  const [loading, setLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState(); // Vista previa de la imagen

  const handleInputFileChange = (e) => {
    //Vista previa de la foto
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    const { name, files } = e.target;
    setCreateActivity({ ...createActivity, [name]: files[0] });
  };

  const save = async (dataForm) => {
    setLoading(true);
    try {
      const {data} = await activitiesDataServices.createActivity(createFormData({...dataForm, img: selectedImage}))
      activitiesDispatch({type: ACTIVITY.ADD, payload: data.activity})
      sucessAlert('Actividad creada con éxito')
      reset()
    } catch (error) {
      errorAlert('No se pudo crear la actividad')
    } finally {
      setLoading(false);
    }
  };

  return (
        <Form onSubmit={handleSubmit(save)}>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              {...register("name", { 
                required: {
                  value: true,
                  message: 'El nombre es requerido'
                } 
                })
              }
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
              name="img"
              label="Foto de portada"
              accept="image/*"
              onChange={handleInputFileChange}
            />
            {selectedImage && (
              <div
                style={{
                  marginTop: 50,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  style={{ maxWidth: "100%", maxHeight: 320 }}
                  src={URL.createObjectURL(selectedImage)}
                  alt="Thumb"
                />
              </div>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="datetime-local"
              {
                ...register("day", {
                  required: {
                    value: true,
                    message: 'La fecha es requerida'
                  }
              })
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
                  message: 'La descripción es requerida'
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
            <Form.Label>Precio</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              type="text"
              {...register("price", {
                required: {
                  value: true,
                  message: 'El precio es requerido'
                }
              })
              }
            ></Form.Control>
            {
              errors.price && <Alert 
                              variant='danger'
                              className='p-2 mt-2'>
                              {errors.price.message}
                            </Alert>
            }
          </Form.Group>
          <Form.Group>
            <Form.Label> Modalidad</Form.Label>
            <Form.Select
              type="select"
              {...register("modality", {
                required: {
                  value: true,
                  message: 'La modalidad es requerida'
                }
              })
              }
            >
              <option value='#' selected hidden>
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
                  message: 'La ciudad es requerida'
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
              type="select"
              defaultValue={"#"}
              {...register("important", {
                required: {
                  value: true,
                  message: 'La importancia es requerida'
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

          <Button 
          className="mb-3" 
          size="lg" 
          variant="danger" 
          type="reset"
          disabled={loading}>
            Resetear formulario
          </Button>
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
              className="me-2"
            />
             : "Publicar actividad"}
          </Button>
        </Form>
      )
  }


export default AddActivity;
