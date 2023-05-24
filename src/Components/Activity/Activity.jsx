import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Stack, Form, Modal, Button } from "react-bootstrap";
import ActivitiesDataServices from '../../Services/ActivitiesServices';
import './Activity.css'
import { HelmetPage } from "../components";
import { ModalWorkshop } from "../Workshop/modalWorkshop/ModalWorkshop";
import useAuth from "../../hooks/useAuth";
import { TYPE_PURCHASE } from "../../types/TYPES";

export const Activity = () => {
    const {id} = useParams();
    const [activity ,setActivity] = useState([])
    const {auth} = useAuth();
    const navigate = useNavigate();
    // Modal
    const [show, setShow] = useState(false);

    const handleSetModal = () => {
      if(!auth.isLogged){
        navigate('/login')
      }
      setShow(!show);

    }
    const retrieveActivity= () => {
      ActivitiesDataServices.getById(id)
        .then(response => {
            console.log(response);
            setActivity(response.data.activity);
        })
        .catch( err => console.log(err));
    };

    useEffect(() => {
      retrieveActivity();
    }, []);

    

    return(
        <>
        <HelmetPage
          section={activity.name}
          content= {activity.description}
        />
        <Container>
            <Row>
                <Col className="justify-content-md-center">
                    <Image  className="mx-auto d-block" fluid="true"  style={{ height: "500px", width: "1300px" }} src={`https://api-silvia.divisioncode.net.ar/img/${activity.img}`} />
                </Col>
            </Row>
            <Row >
                <Col className="m-3">
                    <h1> {activity.name} </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="m-3" style={{ whiteSpace: "pre-wrap" }}>{activity.description}</p>
                </Col>
            </Row>
            <br />
            <Stack gap={2} className="col-md-5 mx-auto">
          <Button
            variant="secondary"
            style={{ backgroundColor: "#9d6b6c" }}
            size="lg"
            onClick={handleSetModal}
          >
            Inscribite
          </Button>
          <br />
        </Stack>
          <ModalWorkshop 
            handleSetModal={handleSetModal}
            show={show}
            workshop={activity}
            type={TYPE_PURCHASE.ACTIVITY}
          />
        </Container>
        
        </>
  )
}
export default Activity;