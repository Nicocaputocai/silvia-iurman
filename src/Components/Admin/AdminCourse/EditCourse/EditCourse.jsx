import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {Link} from 'react-router-dom'
import {Button,Form,Container, Modal, NavItem} from 'react-bootstrap'
import coursesDataServices from "../../../../Services/CoursesServices";

const EditCourse = () => {
  const { id } = useParams();

  const initialFormCourse = {
    name: "",
    day:"",
    hour: "",
    pricePesos:"",
    priceAnticipedPesos:"",
    priceDolar:"",
    linkMP: "",
    linkPP:""
  }
  const createFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return formData;
  };

  const [editCourse, setEditCourse] = useState(initialFormCourse);
  const [submitted, setSubmitted] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false); //Modal de confirmación
  const handleShow = () => setShow(true); //Modal de confirmación

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditCourse({ ...editCourse, [name]: value });
  };


  useEffect(() => {
    const retrieveCourse = () => {
      coursesDataServices.getById(id)
        .then((response) => {
          setEditCourse(response.data.course);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    
    retrieveCourse();
    }, []);

    const save = () => {
      let data = {
        name: editCourse.name,
        day: editCourse.day,
        hour: editCourse.hour,
        pricePesos: editCourse.pricePesos,
        priceAnticipedPesos: editCourse.priceAnticipedPesos,
        priceDolar: editCourse.priceDolar,
        linkMP: editCourse.linkMP,
        linkPP: editCourse.linkPP
      };
      console.log({data});

      coursesDataServices
      .editCourse(id, createFormData(data))
      .then((response) => {
        setEditCourse({
          name: response.data.name,
          day: response.data.day,
          hour: response.data.hour,
          pricePesos: response.data.pricePesos,
          priceAnticipedPesos: response.data.priceAnticipedPesos,
          priceDolar: response.data.priceDolar,
          linkMP: response.data.linkMP,
          linkPP: response.data.linkPP
        });
        setSubmitted(true);
        handleShow(true);
      })
      .catch((err) => console.log(err));
  };
  // const day = editCourse.day
  // let hour = editCourse.day.split('T')[1]
  // console.log(day);
  // console.log(hour);
  let  split_at_index =  function(value, index)
{

  return  value.substring(0, index);
}

// console.log(split_at_index(day, 16));

  return (
    <>
    {submitted ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edición realizada</Modal.Title>
          </Modal.Header>
          <Modal.Body>Curso modificado correctamente</Modal.Body>
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
            defaultValue={editCourse.name}
              name="name"
              type="text"
              onChange={handleInputChange}
            />
          </Form.Group>
    
          <Form.Group>
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              defaultValue={editCourse.day.split('T')[0]}
              name="day"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Horario</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              defaultValue={editCourse.hour}
              name="hour"
              type="text"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          
          <Form.Group>
            <Form.Label>Precio en pesos</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              defaultValue={editCourse.pricePesos}
              name="pricePesos"
              type="text"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio anticipado en pesos</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              defaultValue={editCourse.priceAnticipedPesos}
              name="priceAnticipedPesos"
              type="text"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio en dólares</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              defaultValue={editCourse.priceDolar}
              name="priceDolar"
              type="text"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Link Mercado Pago</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              defaultValue={editCourse.linkMP}
              name="linkMP"
              type="text"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Link PayPal</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              defaultValue={editCourse.linkPP}
              name="linkPP"
              type="text"
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
            Editar curso
          </Button>
        </Form>
        </Container>
      )}


    </>
  )
}

export default EditCourse