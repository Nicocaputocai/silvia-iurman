import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {Link} from 'react-router-dom'
import {Button,Form,Container, Modal, NavItem} from 'react-bootstrap'
import PurchasesDataServices from "../../../../Services/PurchasesServices";


export const EditPurchase = () => {
  const { id } = useParams();

  const initialFormPurchase = {
    firstName: "",
    lastName: "",
    country: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    inscription: "",
    wayToPay: "",
    pay: "",
    finish: ""
  };

  const createFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    return formData;
  };
  
  const [editPurchase, setEditPurchase] = useState(initialFormPurchase);
  const [submitted, setSubmitted] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); //Modal de confirmación
  const handleShow = () => setShow(true); //Modal de confirmación

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditPurchase({ ...editPurchase, [name]: value });
  };

  useEffect(() => {
    const retrievePurchase = () => {
      PurchasesDataServices.getById(id)
        .then((response) => {
          setEditPurchase(response.data.purchase);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    retrievePurchase();
    }, []);

    const save = () => {
      let data = {
        firstName: editPurchase.firstName,
        lastName: editPurchase.lastName,
        country: editPurchase.country,
        dateOfBirth: editPurchase.dateOfBirth,
        email: editPurchase.email,
        phone: editPurchase.phone,
        wayToPay: editPurchase.wayToPay,
        pay: editPurchase.pay,
        finish: editPurchase.finish,
        inscription: editPurchase.inscription,
      };
      console.log({data});

      PurchasesDataServices.editPurchase(id, createFormData(data))
      .then((response) =>{
        setEditPurchase({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          country: response.data.country,
          dateOfBirth: response.data.dateOfBirth,
          email: response.data.email,
          phone: response.data.phone,
          wayToPay: response.data.wayToPay,
          pay: response.data.pay,
          finish: response.data.finish,
          inscription: response.data.inscription
        });
        setSubmitted(true);
        handleShow(true);
      })
      .catch((err) => console.log(err));
  };

  // console.log(save);

  return (
    <>
    {submitted ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edición realizada</Modal.Title>
          </Modal.Header>
          <Modal.Body>Inscripción modificada correctamente</Modal.Body>
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
          <Form.Label>Nombre</Form.Label>
            <Form.Control
            defaultValue={editPurchase.firstName}
              name="firstName"
              type="text"
              onChange={handleInputChange}
            />
            <Form.Label>Apellido</Form.Label>
            <Form.Control
            defaultValue={editPurchase.lastName}
              name="lastName"
              type="text"
              onChange={handleInputChange}
            />
            <Form.Label>País de residencia</Form.Label>
            <Form.Control
            defaultValue={editPurchase.country}
              name="country"
              type="text"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              defaultValue={editPurchase.dateOfBirth}
              type="text"
              name="dateOfBirth"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>email</Form.Label>
            <Form.Control
              defaultValue={editPurchase.email}
              name="email"
              rows={10}
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Teléfono</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              defaultValue={editPurchase.phone}
              name="phone"
              type="text"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Se inscribió en</Form.Label>
            <Form.Text></Form.Text>
            <Form.Control
              defaultValue={editPurchase.inscription}
              name="inscription"
              type="text"
              onChange={handleInputChange}
            ></Form.Control>
            </Form.Group>
          <Form.Group>
            <Form.Label>Forma de pago</Form.Label>
            <Form.Control
            defaultValue={editPurchase.wayToPay}
              name="wayToPay"
              type="text"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label> ¿Pagó?</Form.Label>
            <Form.Select
              name="pay"
              onChange={handleInputChange}
              type="select"
              defaultValue={editPurchase.pay}
            >
              <option value="#" disabled>
                Seleccionar si es importante...
              </option>
              <option value="0">No</option>
              <option value="1">Si</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label> ¿Finalizó?</Form.Label>
            <Form.Select
              name="pay"
              onChange={handleInputChange}
              type="select"
              defaultValue={editPurchase.finish}
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
            Editar inscripción
          </Button>
        </Form>
        </Container>
      )}
    </>
  )
}
