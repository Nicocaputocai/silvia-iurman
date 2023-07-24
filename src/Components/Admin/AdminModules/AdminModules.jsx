import { Container, Row, Col, Button, Image, NavItem } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import { useModules } from "../../../hooks";

export const AdminModules = () => {
  const { modules } = useModules();

  return (
    <>
      {modules.data.map((modulo) => (
        <Container key={modulo._id}>
          <Row className="align-items-center">
            <Col lg="12">
              <h3> {modulo.title}</h3>

              <span>{`Proxima fecha: ${moment(modulo.date).zone("+00").format(
                "DD/MM/YYYY [a las] HH:mm a")}`}
                </span>
              <br />
              <span>{`Precio en pesos: $ ${modulo.pricePesos}`}</span>
              <br />
              <span>{`Precio en dólares: u$s ${modulo.priceDolar}`}</span>
              <br />
              {/* Chequear la ruta */}
              <NavItem as={Link} to={`/admin/editar-modulo/${modulo._id}`}>
                <br />
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
  );
};
