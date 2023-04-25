
import { useEffect,useState } from 'react'
import { Button, Col, Container, NavItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PurchasesDataServices from '../../../Services/PurchasesServices'
import CoursesDataServices from '../../../Services/CoursesServices'
import activitiesDataServices from "../../../Services/ActivitiesServices";
import moment from 'moment'

export const AdminPurchases = () => {
    const [purchases, setPurchases] = useState([]);
    const [courses, setCourse] = useState([])
    const [activities, setActivity] = useState([]);

    const retrievePurchases = () =>{
        PurchasesDataServices.getAllPurchases()
        .then(response =>{
            setPurchases(response.data.purchases);
        })
        .catch(error =>{console.log(error)})
    }

    const retrieveCourse = () =>{
        CoursesDataServices.getAllCourses()
        .then((response) => {
          setCourse(response.data.courses)
        })
        .catch(err => console.log(err))
    }
    // useEffect(() => {

    //   }, [])

      const retrieveActivities = () =>{
        activitiesDataServices.getAllActivities()
            .then(response =>{
                setActivity(response.data.activities);
            })
            .catch(error =>{console.log(error)})
    };
    // useEffect(() =>{

    // }, []);
    useEffect(() =>{
        retrievePurchases()
        retrieveCourse()
        retrieveActivities()
    }, [])
  return (
    <>
    {purchases.map((purchase)=>(
                <Container>
                    <Row className="align-items-center">
                        <Col >
                            <h3>{`${purchase.firstName} ${purchase.lastName}`}</h3>
                            <br />
                            <span>{`País de origen: ${purchase.country}`}</span> <br />
                            <span>{`Fecha de nacimiento: ${purchase.dateOfBirth}`}</span><br />
                            <span>{`Email: ${purchase.email}`}</span><br />
                            <span>{`Teléfono: ${purchase.phone}`}</span><br />
                            <span>{`Medio de pago: ${purchase.wayToPay}`}</span><br />
                            <span>{`¿Pagó?: ${purchase.pay? "Si" : "No"}`}</span><br />
                            <span>{`¿Finalizó?: ${purchase.finish? "Si" : "No"}`}</span><br />
                            <span>{`Se inscribió a: ${purchase.inscription} `}</span><br />
                            {/* Chequear la ruta */}
                            <NavItem as={Link} to={`/admin/administrar-inscripto/${purchase._id}`}>
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
