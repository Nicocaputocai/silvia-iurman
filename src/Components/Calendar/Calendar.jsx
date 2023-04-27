import { useState, useEffect } from "react";
import { Helmet } from "react-helmet"
import { Card, Col, Container, Row } from "react-bootstrap"
import {activity} from "../../assets/images";
import ActivitiesDataServices from '../../Services/ActivitiesServices';
import moment from "moment/moment";

const Calendar = ()=>{

  const [activities, setActivities] = useState([]);

  const retrieveActivities = () =>{
    ActivitiesDataServices.getAllActivities()
    .then(response =>{
      setActivities(response.data.activities)
    })
    .catch(err => console.log(err))    
  };

  useEffect(() =>{
    retrieveActivities()
  }, []);

  const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + " [Seguir leyendo]" : str;
  };

    return(
        <>
         <Helmet>
      <title>Silvia Iurman - Artículos</title>
      <meta name="description" content="Artículos de Silvia Iurman - Nuevas Constelaciones Familiares Argentina"/>
    </Helmet>
        <Container>
          <br />
        <Row xs={1} md={4} className="g-4">
      {activities.map((activity) => (
        !activity.archived && (
        <Col key={activity._id}>
          <Card>
          <a style={{ textDecoration: 'none', color:'black'}} href={`/calendario/${activity._id}`} >
            <Card.Img variant="top" style={{height:"300px"}} src={`https://api-silvia.divisioncode.net.ar/img/${activity.img}`} />

            <Card.Body>
              <Card.Title>{activity.name}</Card.Title>
              <Card.Text> <b>Fecha:</b> {moment(activity.day).format("DD/MM/YYYY [a las]  h:mm A [(hora Argentina (GTM -3))]")}</Card.Text>
              <Card.Text> {truncate(activity.description)}</Card.Text>
            </Card.Body>

            </a>
          </Card>
        </Col>
        )
      ))}
    </Row>
    <br />
    </Container>
        </>
    )
}

export default Calendar