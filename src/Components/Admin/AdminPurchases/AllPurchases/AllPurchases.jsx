import { useState } from "react";
import {
  Button,
  Col,
  Container,

  NavItem,

  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { usePurchases } from "../../../../hooks/usePurchase";
import { truncate } from "../../../../helpers/truncate";
import { PageLoader } from "../../../components/PageLoader";
import { errorAlert, sucessAlert } from "../../../SweetAlert/Alerts";
import Swal from "sweetalert2";


const AllPurchases = () => {
  const {purchases} = usePurchases();
console.log(purchases);
  if(purchases.isLoading){
    return <PageLoader />
  }
  
  return (
    <>
      {purchases.data.map((purchase) =>(
        <Container key={purchase._id}>
            <Row className="align-items-center">
              <Col sm={9}>
                <h3>{`${purchase.firstName} ${purchase.lastName}`}</h3>
                <br />
                <span>{`País de origen: ${purchase.country}`}</span> <br />
                <span>{`Fecha de nacimiento: ${purchase.dateOfBirth}`}</span>
                <br />
                <span>{`Email: ${purchase.email}`}</span>
                <br />
                <span>{`Teléfono: ${purchase.phone}`}</span>
                <br />
                <span>{`Medio de pago: ${purchase.wayToPay}`}</span>
                <br />
                <span>{`¿Pagó?: ${purchase.pay ? "Si" : "No"}`}</span>
                <br />
                <span>{`¿Finalizó?: ${purchase.finish ? "Si" : "No"}`}</span>
                <br />
                <span>{`Se inscribió a: ${purchase.inscription} `}</span>
                <br />
                {/* Chequear la ruta */}
                <NavItem
                  as={Link}
                  to={`/admin/administrar-inscripto/${purchase._id}`}
                >
                  <Button type="button" variant="warning" size="lg">
                    Editar
                  </Button>
                </NavItem>
              </Col>
            </Row>
            <hr />
          </Container>
      ))}
    </>
  )
}

export default AllPurchases