import { useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Image,
    NavItem,
    Spinner,
  } from "react-bootstrap";
import { Link } from "react-router-dom";
import activitiesDataServices from "../../../Services/ActivitiesServices";
import { useActivities } from "../../../hooks/useActivities";
import { truncate } from "../../../helpers/truncate";
import { PageLoader } from "../../components/PageLoader";
import styles from './AdminActivity.module.css'
import {ACTIVITY} from '../../../types/TYPES'
import { errorAlert, sucessAlert } from "../../SweetAlert/Alerts";
//Falta hacer las funciones de eliminar asincrónicas
const AdminActivity = () =>{
    const {activities, activitiesDispatch} = useActivities()
    const [loading, setLoading] = useState(false)

    /* Explicar esto */
    /* setActivities.filter(activity =>response.data.activity._id != activity.id) */

    const deleteActivity = async (id) =>{
        setLoading(true)
        try {
            await activitiesDataServices.deleteActivity(id)
            activitiesDispatch({type: ACTIVITY.DELETE , payload: id})
            sucessAlert('Actividad eliminada con éxito')
        } catch (error) {
            console.log(error)
            errorAlert('No se pudo eliminar la actividad')
        } finally {
            setLoading(false)
        }
    }

    if(activities.isLoading){
        return <PageLoader/>
    }

    return (
        <>
            {activities.data.map((activity)=>(
                <Container key={activity._id}>
                    <Row className="align-items-center">
                        <Image
                        src={`https://api-silvia.divisioncode.net.ar/img/${activity.img}`}
                        className={styles.img_activity}
                        />
                        <Col lg="6">
                            <h3>{activity.name}</h3>

                            <span >{truncate(activity.description)}</span> <br /> <br />
                            {/* Chequear la ruta */}
                            <NavItem as={Link} to={`editar-actividad/${activity._id}`}>
                            <Button
                            type="button"
                            variant='warning'
                            size="lg"
                            disabled={loading}
                            >
                                Editar
                            </Button>
                            </NavItem>
                            <Button
                                className="float-end"
                                variant='danger'
                                size="lg"
                                onClick={ ()=> deleteActivity(activity._id)}
                                disabled={loading}
                            >
                                {loading ? <Spinner 
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                            /> : 'Borrar'}
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