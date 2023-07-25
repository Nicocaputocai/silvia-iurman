import { useState } from "react";
import activitiesDataServices from "../../../Services/ActivitiesServices";
import { Alert, Button, Form, Image, Modal, Spinner } from "react-bootstrap";
import { createFormData } from "../../../helpers";
import {useActivities, useCourses, useModules} from '../../../hooks'
import { useForm } from 'react-hook-form'
import { ACTIVITY, TYPE_PURCHASE } from "../../../types/TYPES";
import { errorAlert, sucessAlert } from "../../SweetAlert/Alerts";

const AddActivity = () => {
  const {activitiesDispatch} = useActivities()
  const { register, handleSubmit, formState:{errors}, reset} = useForm()
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [typeOption, setTypeOption] = useState(null);
  const {courses} = useCourses()
  const {modules} = useModules()

  const [selectedImage, setSelectedImage] = useState(); // Vista previa de la imagen

  const getAssociated = (e)=> {
    setTypeOption(e.target.value)
    switch(e.target.value){
      case TYPE_PURCHASE.COURSE:
        setOptions(courses.data)
        break;
      case TYPE_PURCHASE.MODULE:
        setOptions(modules.data)
        break;
      default:
        setOptions([])
    }
  }
  
  const handleInputFileChange = (e) => {
    //Vista previa de la foto
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    /* const { name, files } = e.target;
    setCreateActivity({ ...createActivity, [name]: files[0] }); */
  };

  const save = async (dataForm) => {
    setLoading(true);
    let dataToSend = {}
    if(typeOption !== '#'){
      dataToSend = {
        title: dataForm.title,
        day: dataForm.day,
        description: dataForm.description,
        pricePesos: dataForm.pricePesos,
        priceDolar: dataForm.priceDolar,
        img: selectedImage,
        modality: dataForm.modality,
        city: dataForm.city,
        important: dataForm.important,
        associate: dataForm.associate,
        associateModel:typeOption,
      }
    } else {
      dataToSend = {
        title: dataForm.title,
        day: dataForm.day,
        description: dataForm.description,
        pricePesos: dataForm.pricePesos,
        priceDolar: dataForm.priceDolar,
        img: selectedImage,
        modality: dataForm.modality,
        city: dataForm.city,
        important: dataForm.important,
      }
    }
   /*  dataToSend = {
      ...dataForm,
      associateModel: typeOption ? typeOption : null, 
      img: selectedImage} */

    try {
      const {data} = await activitiesDataServices.createActivity(createFormData(dataToSend))
      activitiesDispatch({type: ACTIVITY.ADD, payload: data.activity})
      sucessAlert('Actividad creada con éxito')
      reset()
    } catch (error) {
      console.log(error)
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
              {...register("title", { 
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
          <div className="d-flex w-100 justify-content-between gap-2">
            <Form.Group className="w-50">
              <Form.Label>Asociado a </Form.Label>
              <Form.Select
                type="select"
                onChange={getAssociated}
              >
                <option value='#'>
                  Sin asociación
                </option>
                <option value={TYPE_PURCHASE.COURSE}>Taller</option>
                <option value={TYPE_PURCHASE.MODULE}>Modúlo</option>
              </Form.Select>
              
            </Form.Group>
            <Form.Group className="w-50">
              <Form.Label>Asocie el id</Form.Label>
              <Form.Select
                disabled={options.length === 0}
                type="select"
                {...register("associate")}
              >
                {
                  options.map(option => (
                    <option key={option._id} value={option._id}>{option.title}</option>
                  ))
                }
              </Form.Select>
              
            </Form.Group>
          </div>
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
            <Form.Label>Precio en Pesos</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              type="text"
              {...register("pricePesos", {
                required: {
                  value: true,
                  message: 'El precio en pesos es requerido'
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
            <Form.Label>Precio en dolares</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              type="text"
              {...register("priceDolar", {
                required: {
                  value: true,
                  message: 'El precio en dolares es requerido'
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
