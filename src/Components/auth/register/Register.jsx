import React,{useRef} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import {Link} from 'react-router-dom'
export const Register = () => {
    const captcha = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        const token = captcha.current.getValue();
        if(!token){
            alert('Por favor verifica el captcha')
        }else{
            alert('Formulario enviado')
        }
    }

    return (
        <Container className='my-5'>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Usuario"
                                name="username"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                                />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirma tu contraseña"
                                name="password"
                                />
                        </Form.Group>

                        <div className='w-full d-flex justify-content-center align-items-center my-2'>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey={import.meta.env.VITE_RECAPTCHA}
                                
                            />
                        </div>

                        <Button 
                        className='w-100'
                        variant="primary" type="submit">
                            Registrarse
                        </Button>

                        <Form.Text className="text-muted text-center">
                        ¿Ya tienes una cuenta? <Link to="/registro">Accedé</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
    }


