import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Image, Card, Nav } from "react-bootstrap";
import BlogDataServices from '../../Services/BlogServices';
import moment from "moment";
import { Helmet } from "react-helmet";
import './ArticleDetail.css'

const  ArticleDetail= ()=>{

    const {id} = useParams();
    const [article ,setArticle] = useState([])
    console.log(id)
    const retrieveArticle= () => {
        BlogDataServices.getById(id)
        .then(response => {
            console.log(response);
            setArticle(response.data.article);
            console.log(article)
        })
        .catch( err => console.log(err));
    };

    useEffect(() => {
        retrieveArticle();
    }, []);
    console.log(article);
    return(
        <>
         <Helmet>
      <title>    </title>
      <meta name="description" content=""/>
    </Helmet>
        <Container>
            <Row>
                <Col className="justify-content-md-center">
                    <Image  className="mx-auto d-block" fluid="true"  style={{ height: "500px", width: "1300px" }} src={`https://api-silvia.divisioncode.net.ar/img/${article.img}`} />
                </Col>
            </Row>
            <Row >
                <Col className="m-3">
                    <h2> {article.title} </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="m-3" style={{ whiteSpace: "pre-wrap" }}>{article.paragraph}</p>
                </Col>
            </Row>
            <br />
        </Container>
        </>
    )
};

export default ArticleDetail;