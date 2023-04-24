import React from 'react'
import { useState, useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
import {Button,Form,Container,Image, Modal, NavItem} from 'react-bootstrap'
import activitiesDataServices from "../../../../Services/ActivitiesServices";

export const EditActivity = () => {
  const { id } = useParams();
  // console.log("id: ", id);
  const initialFormActivity = {
    day: "",
    name: "",
    description: "",
    price: "",
    img: "",
    modality: "",
    city: "",
    important: "",
    archived: ""
  };
  const createFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return formData;
  };

  const [editActivity, setEditActivity] = useState(initialFormActivity);
  const [submitted, setSubmitted] = useState();
  const [show, setShow] = useState(false);

  const [selectedImage, setSelectedImage] = useState(); // Vista previa de la imagen

  const handleClose = () => setShow(false); //Modal de confirmación
  const handleShow = () => setShow(true); //Modal de confirmación

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditActivity({ ...editActivity, [name]: value });
  };

  const handleInputFileChange = (e) => {
    //Vista previa de la foto
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    const { name, files } = e.target;
    setEditActivity({ ...editActivity, [name]: files[0] });
  };

  useEffect(() => {
    const retrieveActivity = () => {
      activitiesDataServices.getById(id)
        .then((response) => {
          setEditActivity(response.data.activity);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    retrieveActivity();
    }, []);

    const save = () => {
      let data = {
        name: editActivity.name,
        day: editActivity.day,
        description: editActivity.description,
        price: editActivity.price,
        img: editActivity.img,
        modality: editActivity.modality,
        city: editActivity.city,
        important: editActivity.important,
        archived: editActivity.archived
      };
      console.log({data});

      activitiesDataServices.editActivity(id, createFormData(data))
      .then((response) => {
        setEditActivity({
          name: response.data.name,
          day: response.data.day,
          description: response.data.description,
          price: response.data.price,
          img: response.data.img,
          modality: response.data.modality,
          city: response.data.city,
          important: response.data.important,
          archived: response.data.archiverd
        });
        setSubmitted(true);
        handleShow(true);
      })
      .catch((err) => console.log(err));
  };



  return (
    <>
      {submitted ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edición realizada</Modal.Title>
          </Modal.Header>
          <Modal.Body>Actividad modificada correctamente</Modal.Body>
          <Modal.Footer>
            <Button variant="info" href="/">
              Home
            </Button>
            <Button variant="success" href="/admin">
              Volver al administrador
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Container>
        <Form>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control
            defaultValue={editActivity.name}
              name="name"
              type="text"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="img">
            <Form.Label>Foto</Form.Label>
            <Form.Control
            defaultValue={editActivity.img}
              type="file"
              name="img"
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
              src={`https://api-silvia.divisioncode.net.ar/img/${editActivity.img}`}
                fluid= "true"
            ></Image>
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              defaultValue={editActivity.day.substring(0, 16)}
              type="datetime-local"
              name="day"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              defaultValue={editActivity.description}
              name="description"
              as="textarea"
              rows={10}
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              defaultValue={editActivity.price}
              name="price"
              type="text"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> Modalidad</Form.Label>
            <Form.Select
              name="modality"
              onChange={handleInputChange}
              type="select"
              defaultValue={editActivity.modality}
            >
              <option value="#" disabled>
                Seleccione la modalidad.....
              </option>
              <option value="Presencial">Presencial</option>
              <option value="Virtual">Virtual</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
            defaultValue={editActivity.city}
              name="city"
              type="text"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label> ¿Importante?</Form.Label>
            <Form.Select
              name="important"
              onChange={handleInputChange}
              type="select"
              defaultValue={editActivity.important}
            >
              <option value="#" disabled>
                Seleccionar si es importante...
              </option>
              <option value="0">No</option>
              <option value="1">Si</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label> ¿Archivar?</Form.Label>
            <Form.Select
              name="archived"
              onChange={handleInputChange}
              type="select"
              defaultValue={editActivity.archived}
            >
              <option value="#" disabled>
                Seleccionar si es importante...
              </option>
              <option value="0">No</option>
              <option value="1">Si</option>
            </Form.Select>
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
            onClick={save}
          >
            Editar actividad
          </Button>
        </Form>
        </Container>
      )}
    </>
  );
};
