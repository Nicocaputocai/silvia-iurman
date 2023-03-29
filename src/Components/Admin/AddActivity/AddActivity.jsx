import { useState } from "react";
import activitiesDataServices from "../../../Services/ActivitiesServices";
import { Button, Form, Image, Modal } from "react-bootstrap";

const AddActivity = () => {
  const initialFormActivity = {
    day: "",
    name: "",
    description: "",
    price: "",
    img: "",
    modality: "",
    city: "",
    important: "",
    //Falta archived para el edit
  };
  const createFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return formData;
  };

  const [createActivity, setCreateActivity] = useState(initialFormActivity);
  const [submitted, setSubmitted] = useState();
  const [show, setShow] = useState(false);

  const [selectedImage, setSelectedImage] = useState(); // Vista previa de la imagen

  const handleClose = () => setShow(false); //Modal de confirmación
  const handleShow = () => setShow(true); //Modal de confirmación

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateActivity({ ...createActivity, [name]: value });
  };

  const handleInputFileChange = (e) => {
    //Vista previa de la foto
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    const { name, files } = e.target;
    setCreateActivity({ ...createActivity, [name]: files[0] });
  };

  const save = () => {
    let data = {
      name: createActivity.name,
      day: createActivity.day,
      description: createActivity.description,
      price: createActivity.price,
      img: createActivity.img,
      modality: createActivity.modality,
      city: createActivity.city,
      important: createActivity.important,
      //Falta archived para el edit
    };
    // console.log(data);
    activitiesDataServices
      .createActivity(createFormData(data))
      .then((response) => {
        setCreateActivity({
          name: response.data.name,
          day: response.data.day,
          description: response.data.description,
          price: response.data.price,
          img: response.data.img,
          modality: response.data.modality,
          city: response.data.city,
          important: response.data.important,
        });
        setSubmitted(true);
        handleShow(true);
      })
      .catch((err) => console.log(err));
  };

  const newActivity = () => {
    setCreateActivity(initialFormActivity);
    setSubmitted(false);
  };

  

  return (
    <>
      {submitted ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Actividad creada correctamente</Modal.Body>
          <Modal.Footer>
            <Button variant="info" href="/">
              Home
            </Button>
            <Button variant="success" onClick={newActivity}>
              Agregar otra actividad
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Form>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control
              name="name"
              type="text"
              onChange={handleInputChange}
            />
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
              name="day"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
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
              defaultValue={"#"}
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
              defaultValue={"#"}
            >
              <option value="#" disabled>
                Seleccionar si es importante...
              </option>
              <option value="0">No</option>
              <option value="1">Si</option>
            </Form.Select>
          </Form.Group>
          <br />

          <Button className="mb-3" size="lg" variant="danger" type="reset">
            Resetear formulario
          </Button>
          <Button
            className="mb-3 float-end"
            size="lg"
            variant="primary"
            onClick={save}
          >
            Publicar actividad
          </Button>
        </Form>
      )}
    </>
  );
};

export default AddActivity;
