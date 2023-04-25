import { Container, Row, Col, Image, CardGroup, Card } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet"
import {Silvia, bannerPC, bannerCEL, activity} from "../../assets/images"
import ActivitiesDataServices from '../../Services/ActivitiesServices';
import { Link } from "react-router-dom";
import moment from "moment";

const Home = () => {

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

  return (
    <>
    <Helmet>
      <title>Silvia Iurman - Home</title>
      <meta name="description" content="Home de la página de Silvia Iurman - Nuevas Constelaciones Familiares Argentina"/>
    </Helmet>
      
        <>
        <Row className="aligh-items-center">
          <Image fluid="true"  src={bannerPC} alt="banner" style={{ borderRadius: "2%"}}/>
          {/* <img className="smallscreen" src={bannerCEL} alt="banner" /> */}
        </Row>
        </>
        {/* <br /> */}
        <Container>

        <Row>
        <Col lg="4" style={{marginTop:"15px"}}>
            <Image className="img-fluid rounded-circle w-100 h-auto" src={Silvia}/>
          </Col>
          <Col lg="8" style={{marginTop:"30px"}}>
            <h2 style={{ borderRadius: "3%"}}>Silvia Iurman</h2>
            <p>Lorem ipsum dolor. Harum sapiente dolor amet earum quos illo temporibus facilis atque! Temporibus deserunt quia quidem iste? Dignissimos beatae sunt id saepe totam rem odit porro minus omnis debitis repellat neque exercitationem sint sapiente eum aliquid tempora commodi doloremque voluptatum, magnam vel laborum necessitatibus magni odio! Voluptatibus iste ratione aliquam amet assumenda dicta, ipsam maiores nulla totam libero qui tempora inventore accusamus tempore at, dolorum a voluptas quibusdam doloremque perspiciatis quisquam voluptatem officia. Id, provident dolores? Ea delectus unde ad, praesentium ullam iusto eum nam dignissimos qui? Culpa, impedit.</p>
          </Col>

          {/* <Col lg="4" style={{marginTop:"15px"}}>
          <iframe  style={{ borderRadius: "2%"}} width="400vw" height="400px" src="https://www.youtube.com/embed/Pe_tb5iKR-Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Col> */}
        </Row>
        <br />
        <div align="center">
        
        </div>
        <h2 style={{ borderRadius: "3%"}}>Próximas actividades</h2>
        <br />
        <Row xs={1} md={3} className="g-4">
      {activities.slice(0,6).map((activity) =>(
        activity.important && !activity.archived && <Col>
        <Card>
        <Link style={{ textDecoration: 'none', color:'black'}} to={`/calendario/${activity._id}`}>
          <Card.Img variant="top" style={{height:"300px"}} src={`https://api-silvia.divisioncode.net.ar/img/${activity.img}`} />

          <Card.Body>
            <Card.Title>{activity.name}</Card.Title>
            <Card.Text> <b>Fecha:</b> {moment(activity.day).format("DD/MM/YYYY [a las]  h:mm A [(hora Argentina (GTM -3))]")}</Card.Text>
            <Card.Text> {truncate(activity.description)}</Card.Text>
          </Card.Body>

          </Link>
        </Card>
      </Col> 
      ))}
    </Row>
      </Container>
      <br />
    </>
  );
};

export default Home