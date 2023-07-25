import {
    Button,
    Col,
    Container,
    NavItem,
    Row,
  } from "react-bootstrap";
import { PageLoader } from "../../../components/PageLoader";
import { usePurchases } from "../../../../hooks";
import { Link } from "react-router-dom";
import moment from "moment/moment";
export const FilterView = ({_id, user_id, wayToPay, pay, finish, inscription, firstName, lastName, country, dateOfBirth, email, phone}) => {
    const {purchases} = usePurchases();
    if(purchases.isLoading){
        return <PageLoader />
      }
  return (
    <>
            <Container key={_id}>
              {user_id ? (
              <Row className="align-items-center">
              <Col>
                <h3>{`${user_id.firstName} ${user_id.lastName}`}</h3>
                <br />
                <span>{`País de origen: ${user_id.country}`}</span> <br />
                <span>{`Fecha de nacimiento: ${moment(user_id.dateOfBirth).format("DD/MM/YYYY")}`}</span>
                <br />
                <span>{`Email: ${user_id.email}`}</span>
                <br />
                <span>{`Teléfono: ${user_id.phone}`}</span>
                <br />
                <span>{`Medio de pago: ${wayToPay}`}</span>
                <br />
                <span>{`¿Pagó?: ${pay ? "Si" : "No"}`}</span>
                <br />
                <span>{`¿Finalizó?: ${finish ? "Si" : "No"}`}</span>
                <br />
                <span>{`Se inscribió a: ${inscription?.title} `}</span>
                <br />
                {/* Chequear la ruta */}
                <NavItem
                  as={Link}
                  to={`/admin/administrar-inscripto/${_id}`}
                >
                  <Button type="button" variant="warning" size="lg">
                    Editar
                  </Button>
                </NavItem>
              </Col>
            </Row>) : (<Row className="align-items-center">
              <Col>
                <h3>{`${firstName} ${lastName}`}</h3>
                <br />
                <span>{`País de origen: ${country}`}</span> <br />
                <span>{`Fecha de nacimiento: ${moment(dateOfBirth).format("DD/MM/YYYY")}`}</span>
                <br />
                <span>{`Email: ${email}`}</span>
                <br />
                <span>{`Teléfono: ${phone}`}</span>
                <br />
                <NavItem
                  as={Link}
                  to={`/admin/administrar-inscripto/${_id}`}
                >
                  <Button type="button" variant="warning" size="lg">
                    Editar
                  </Button>
                </NavItem>
              </Col>
            </Row>)}
            
            <hr />
          </Container>
          </>
  )
}
