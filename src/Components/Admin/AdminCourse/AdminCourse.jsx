import { useState, useEffect } from 'react';
import CoursesDataServices from '../../../Services/CoursesServices'
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

const AdminCourse = () =>{
    const [courses, setCourses] = useState([]);
    const retrieveCourses = () =>{
        CoursesDataServices.getAllCourses()
        .then((response) => {
          setCourses(response.data.courses)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        retrieveCourses()
      }, [])
    return(
        <> 
        {courses.map((course) =>(
                        <Container>
                        <Row className="align-items-center">
                         
                          <Col lg="12">
                            <h3> {course.name}</h3>
                           
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