import { useState } from "react";
import blogDataServices from "../../../Services/BlogServices";
import { Button, Form, Image, Modal } from "react-bootstrap";

const AddArticle = () => {
  const initialFormArticle = {
    title: "",
    img: "",
    paragraph: "",
  };
  const createFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return formData;
  };
  const [createArticle, setCreateArticle] = useState(initialFormArticle);
  const [submitted, setSubmitted] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); //Modal de confirmación
  const handleShow = () => setShow(true); //Modal de confirmación
  const [selectedImage, setSelectedImage] = useState(); // Vista previa de la imagen

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateArticle({ ...createArticle, [name]: value });
  };

  const handleInputFileChange = (e) => {
    //Vista previa de la foto
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    const { name, files } = e.target;
    setCreateArticle({ ...createArticle, [name]: files[0] });
  };

  const save = () => {
    let data = {
      title: createArticle.title,
      img: createArticle.img,
      paragraph: createArticle.paragraph,
    };
    // console.log(data);
    blogDataServices
      .createArticle(createFormData(data))
      .then((response) => {
        setCreateArticle({
          title: response.data.title,
          img: response.data.img,
          paragraph: response.data.paragraph,
        });

        setSubmitted(true);
        handleShow(true);
      })
      .catch((err) => console.log(err));
  };

  const newArticle = () => {
    setCreateArticle(initialFormArticle);
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
            <Button variant="success" onClick={newArticle}>
              Agregar otra actividad
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        <Form>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control
              name="title"
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
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              name="paragraph"
              as="textarea"
              rows={25}
              onChange={handleInputChange}
            ></Form.Control>
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

export default AddArticle;
