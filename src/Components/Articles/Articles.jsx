import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap"
import BlogDataService from '../../Services/BlogServices'
import { CardArticle } from "./CardArticle";
import { HelmetPage } from "../components";

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

  return (
    <>
      <HelmetPage
        section='Artículos'
        content='Artículos de Silvia Iurman - Nuevas Constelaciones Familiares Argentina'
      />
      <Container>
        <br />
        <Row xs={1} md={3} className="g-4">
          {articles.map((article) => (
            <CardArticle article={article} key={article._id} />
          ))}
        </Row>
        <br />
      </Container>
    </>
  )
}

export default Articles