import {
    Container,
    Row,
    Col,
    Button,
    Image,
    NavItem,
  } from "react-bootstrap";
  import moment from "moment";
import { Link } from 'react-router-dom';
import { useCourses } from '../../../hooks';

const AdminCourse = () =>{
    const {courses} = useCourses()

    return(
        <> 
        {courses.data.map((course) =>(
                        <Container key={course._id}>
                        <Row className="align-items-center">
                         
                          <Col lg="12">
                            <h3> {course.title}</h3>
                           
                            <span>{`Proxima fecha: ${moment(course.day).format(
                              "DD/MM/YYYY"
                            )} a las ${course.hour}`}</span><br />
                            <span>{`Precio pago anticipado: $ ${course.priceAnticipedPesos}`}</span><br />
                            <span>{`Precio en pesos: $ ${course.pricePesos}`}</span><br />
                            <span>{`Precio en dólares: u$s ${course.priceDolar}`}</span><br />
                            <span>{`Link mercado pago: ${course.linkMP}`}</span><br />
                            <span>{`Link PayPal: ${course.linkPP}`}</span>
                            <br />
                            {/* Chequear la ruta */}
                            <NavItem as={Link} to={`/admin/editar-curso/${course._id}`}>
                                <br />
                                <Button
                            type="button"
                            variant='warning'
                            size="lg"
                            >
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

export default AdminCourse