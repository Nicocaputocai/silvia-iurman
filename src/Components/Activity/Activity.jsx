import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Stack, Form, Modal, Button, Spinner } from "react-bootstrap";
import ActivitiesDataServices from '../../Services/ActivitiesServices';
import styles from './Activity.module.css'
import { HelmetPage } from "../components";
import { ModalWorkshop } from "../Workshop/modalWorkshop/ModalWorkshop";
import useAuth from "../../hooks/useAuth";
import { TYPE_PURCHASE } from "../../types/TYPES";
import { Link } from "react-router-dom";
import { useCourses } from "../../hooks/useCourses";

export const Activity = () => {
    const {id} = useParams();
    const [activity ,setActivity] = useState([])
    const {auth} = useAuth();
    const navigate = useNavigate();
    const {courses} = useCourses();
    // Modal
    const [show, setShow] = useState(false);
    const [isLoading,setIsLoading] = useState(false)

    //linkExists
    const [linkExists, setLinkExists] = useState(null);

    const handleSetModal = () => {
      if(!auth.isLogged){
        navigate('/login')
      }
      setShow(!show);

    }
    const retrieveActivity= () => {
      setIsLoading(true)
      ActivitiesDataServices.getById(id)
        .then(response => {
            setActivity(response.data.activity);
            if(!response.data.activity.associateModel){
              setLinkExists(null)
              setIsLoading(false)
            }
            if(response.data.activity.associateModel === TYPE_PURCHASE.COURSE){
              const course = courses.data.find(course => course._id === response.data.activity.associate);
              if(course._id === '63d2d339dc2d95cfd1095bdf'){
                setLinkExists('/talleres-presenciales')
              }
              else {
                setLinkExists('/talleres-virtuales')
              }
              setIsLoading(false)
            }
            if(response.data.activity.associateModel === TYPE_PURCHASE.MODULE){
              setLinkExists('/dashboard')
              setIsLoading(false)
            }
            
        })
        .catch( err => {
          setIsLoading(false)
          console.log(err)
        });
    };
    useEffect(() => {
      retrieveActivity();
    }, []);
    if(isLoading){
      <div className="d-flex justify-content-center align-items-center w-full h-full">
        <Spinner animation="border" role="status"/>
      </div>
    }
    return(
        <>
        <HelmetPage
          section={activity.title}
          content= {activity.description}
        />
        <Container>
            <Row>
                <Col className="justify-content-md-center">
                    <Image  className={`mx-auto d-block ${styles.imgActivity}`} fluid="true" src={`https://api-silvia.divisioncode.net.ar/img/${activity.img}`} />
                </Col>
            </Row>
            <Row >
                <Col className="m-3">
                    <h1> {activity.name} </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className={`m-3 ${styles.pActivity}`} >{activity.description}</p>
                </Col>
            </Row>
            <br />
            <Stack gap={2} className="col-md-5 mx-auto">
            {
              isLoading ? 
                <div className="w-full d-flex justify-content-center align-items-center">
                  <Spinner animation="border" role="status"/>
                </div>
                :
                (
                  !linkExists ? 
                  <Button
                    className={styles.btn_baseColor}
                    variant="secondary"
                    size="lg"
                    onClick={handleSetModal}
                  >
                    Inscribite
                  </Button>
                  :
                  <Button
                    className='bgColor'
                    variant="secondary"
                    size="lg">
                    <Link to={linkExists} className="text-decoration-none text-white">
                      Inscribite
                    </Link>
                  </Button>
                )
            }
          
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