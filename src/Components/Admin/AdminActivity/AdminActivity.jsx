import { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Image,
    NavItem,
  } from "react-bootstrap";
import { Link } from "react-router-dom";
import activitiesDataServices from "../../../Services/ActivitiesServices";
//Falta hacer las funciones de eliminar asincrónicas
const AdminActivity = () =>{
    const [activities, setActivities] = useState([]);
    const retrieveActivities = () =>{
        activitiesDataServices.getAllActivities()
            .then(response =>{
                setActivities(response.data.activities);
            })
            .catch(error =>{console.log(error)})
    };
    useEffect(() =>{
        retrieveActivities()
    }, []);

    const deleteActivity = (id) =>{
        //Faltaría deshabilitar los botones mientras está eliminando y sumar una alerta
        activitiesDataServices.deleteActivity(id)
        //Este THEN debería setearme de nuevos las actividades sin la eliminada
        .then(response =>{
            setActivities.filter(activity =>response.data.activity._id != activity.id)
        })
        .catch(error =>{console.log(error)})
    }
    const truncate = (str) => {
        return str.length > 50 ? str.substring(0, 150) + " [...]" : str;
      };

    return (
        <>
            {activities.map((activity)=>(
                <Container>
                    <Row className="align-items-center">
                        <Image
                        src={`https://api-silvia.divisioncode.net.ar/img/${activity.img}`}
                        style={{ height: "200px", width: "400px" }}
                        >
                        </Image>
                        <Col lg="6">
                            <h3>{activity.name}</h3>

                            <span >{truncate(activity.description)}</span> <br /> <br />
                            {/* Chequear la ruta */}
                            <NavItem as={Link} to={`/admin/editar-actividad/${activity._id}`}>
                            <Button
                            type="button"
                            variant='warning'
                            size="lg"
                            >
                                Editar
                            </Button>
                            </NavItem>
                            <Button
                                className="float-end"
                                variant='danger'
                                size="lg"
                                onClick={ ()=> deleteActivity(activity._id)}
                            >
                                Borrar
                            </Button>
                        </Col>
                    </Row>
                    <hr />
                </Container>
                
            ))}
        </>
    )
}

export default AdminActivity