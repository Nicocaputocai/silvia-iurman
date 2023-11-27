import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Form,
  Container,
  Image,
  Modal,
  NavItem,
} from "react-bootstrap";
import blogDataServices from "../../../../Services/BlogServices";

export const EditArticle = () => {
  const { id } = useParams();
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

  const [editArticle, setEditArticle] = useState(initialFormArticle);
  const [submitted, setSubmitted] = useState();
  const [show, setShow] = useState(false);

  const [selectedImage, setSelectedImage] = useState(); // Vista previa de la imagen

  const handleClose = () => setShow(false); //Modal de confirmación
  const handleShow = () => setShow(true); //Modal de confirmación

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditArticle({ ...editArticle, [name]: value });
  };
  const handleInputFileChange = (e) => {
    //Vista previa de la foto
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    const { name, files } = e.target;
    setEditArticle({ ...editArticle, [name]: files[0] });
  };

  useEffect(() => {
    const retrieveArticle = () => {
      blogDataServices
        .getById(id)
        .then((response) => {
          setEditArticle(response.data.article);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    retrieveArticle();
  }, []);

  const save = () => {
    let data = {
      title: editArticle.title,
      img: editArticle.img,
      paragraph: editArticle.paragraph,
    };

    blogDataServices
      .editArticle(id, createFormData(data))
      .then((response) => {
        setEditArticle({
          title: response.data.title,
          img: response.data.img,
          paragraph: response.data.paragraph,
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
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Actividad creada correctamente</Modal.Body>
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
                defaultValue={editArticle.title}
                name="title"
                type="text"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="img">
              <Form.Label>Foto</Form.Label>
              <Form.Control
                defaultValue={editArticle.img}
                type="file"
                name="img"
                label="Foto de portada"
                accept="image/*"
                onChange={handleInputFileChange}
              />
              {selectedImage ? (
                <div>
                  <Image
                    style={{ maxWidth: "100%", maxHeight: 320 }}
                    src={URL.createObjectURL(selectedImage)}
                    alt="Thumb"
                    fluid="true"
                  />
                </div>
              ) : (
                <Image
                  src={`https://api.silviaiurman.com/img/${editArticle.img}`}
                  fluid="true"
                ></Image>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                defaultValue={editArticle.paragraph}
                name="paragraph"
                as="textarea"
                rows={20}
                onChange={handleInputChange}
              ></Form.Control>
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
              Editar artículo
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
};
