import { useState, useEffect } from "react";
import { Helmet } from "react-helmet"
import { Card, Col, Container, Row } from "react-bootstrap"
import {activity} from "../../assets/images"; 
import BlogDataService from '../../Services/BlogServices'
import moment from "moment/moment";

const Articles = ()=>{

  const [articles, setarticles] = useState([]);

  const retrievearticles = () =>{
    BlogDataService.getAllArticles()
    .then(response =>{
      setarticles(response.data.articles)
    })
    .catch(err => console.log(err))    
  };

  useEffect(() =>{
    retrievearticles()
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
        <Row xs={1} md={3} className="g-4">
      {articles.map((article) => (
        <Col>
          <Card>
          <a style={{ textDecoration: 'none', color:'black'}} href={`/articulos/${article._id}`} >
            <Card.Img variant="top" style={{height:"300px", objectFit:'cover'}} src={`https://api-silvia.divisioncode.net.ar/img/${article.img}`} />

            <Card.Body>
              <Card.Title>{article.title}</Card.Title>

              <Card.Text> {truncate(article.paragraph)}</Card.Text>
              <small style={{float: "right"}}> {`Creado el ${moment(article.updatedAt).format("DD/MM/YYYY")}.`} </small>
            </Card.Body>

            </a>
          </Card>
        </Col>
      ))}
    </Row>
    <br />
    </Container>
        </>
    )
}

export default Articles