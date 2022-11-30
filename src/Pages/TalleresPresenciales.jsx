import { Helmet } from "react-helmet"
import { Container, Col, Row, Button, Stack, Image } from "react-bootstrap"
import activity from "../assets/actividad.png"

const CursosPresenciales = ()=>{
    return(
        <>
         <Helmet>
      <title>Silvia Iurman - Talleres Presenciales</title>
      <meta name="description" content="Talleres presenciales de Silvia Iurman - Nuevas Constelaciones Familiares Argentina"/>
    </Helmet>
    <Container>
    <h2 >Talleres presenciales</h2>
                <Row>
                    <Col md={6} sm={12}>
                        <Image className="img-fluid" src={activity} alt="" />
                    </Col>

                    <Col md={6} sm={12}>
                        <h3 style={{backgroundColor:"#ffffff", color:"#9d6b6c", textAlign:"left"}}>Próximo curso: 29 de noviembre 2022</h3>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis praesentium temporibus ex asperiores neque. Voluptatem laborum dicta harum sit itaque quisquam nam. Totam eaque, ipsum ipsa magni aliquam culpa at laudantium amet, blanditiis, recusandae officiis rerum ratione dicta quis dolorem architecto. Sunt deserunt ipsum tempora, ipsam optio vero iste ut sapiente magni sed suscipit commodi nemo magnam aut sint quia! Sit cumque itaque neque magni quas deleniti quasi, unde illo quaerat accusamus tenetur nulla eaque excepturi aspernatur eius aut obcaecati, autem sapiente accusantium. Officiis neque nesciunt, eveniet molestias fuga saepe ad ex, nam magnam sit esse. Nulla numquam maiores porro optio et dolores in quibusdam illum blanditiis suscipit expedita reprehenderit praesentium dolorum assumenda, nemo aspernatur, eius ipsum sunt placeat dolorem ipsam totam ab. Facere odio ut sapiente molestiae voluptate incidunt necessitatibus. Doloribus impedit vel eveniet assumenda expedita placeat eum, cupiditate voluptatibus! Ipsum repudiandae asperiores ab dolorum similique aut molestiae. Aliquam laudantium quo nam ullam temporibus, consequuntur molestiae quod, esse iure, adipisci aut nostrum rerum. Sint, a? Deserunt suscipit fugiat placeat, architecto labore repudiandae hic quod voluptates temporibus beatae nulla quisquam officia commodi aspernatur ex dolorum laboriosam repellat veritatis nemo! Inventore doloribus dolorum ipsa qui voluptates quibusdam minima aliquid, odit ratione rerum sed tempore vitae corrupti aperiam debitis assumenda odio minus dicta in vel cupiditate quidem eos officiis amet.</p>
                    </Col>
                </Row>
                <br />
                <Stack gap={2} className="col-md-5 mx-auto">
                <Button variant="secondary"  style={{backgroundColor: "#9d6b6c"}} size="lg">
                    Inscribite
                </Button>
                <br />
                </Stack>
                


                
            </Container>

        </>
    )
}

export default CursosPresenciales