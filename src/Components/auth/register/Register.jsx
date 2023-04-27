import React,{useRef, useState} from 'react'
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import {Link, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import UserDataServices from '../../../Services/UserServices'
import { errorAlert, sucessAlert } from '../../SweetAlert/Alerts'

export const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const {register, handleSubmit, formState: { errors }, reset} = useForm();
    const [alertCaptcha, setAlertCaptcha] = useState(false); //Para mostrar el alert del captcha
    const captcha = useRef(null);

    const onSubmit = async(data) => {
        setLoading(true)
        const token = captcha.current.getValue();
        if(!token){
            setAlertCaptcha(true)
            setLoading(false)
            return null
        }else{
            setAlertCaptcha(false)
        }
        const {password2, ...body} = data;

        try {
            const response = await UserDataServices.register(body)
            sucessAlert(response.data.msg);
            navigate('/login');
        } catch (error) {
            errorAlert(error.response?.data.msg)
        } finally {
            setLoading(false)
            reset()
            captcha.current.reset()
        }
    }

    return (
        <Container className='my-5'>
            <Row className="justify-content-md-center">
                <h1>Registro</h1>
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Usuario"
                                name="username"
                                {...register("username", { 
                                    required:{
                                        value:true,
                                        message:'Campo requerido'
                                    },
                                    minLength:{
                                        value:4,
                                        message:'Mínimo 4 caracteres'
                                    },
                                    maxLength:{
                                        value:15,
                                        message:'Máximo 15 caracteres'
                                    },
                                 })}
                            />
                            {
                                errors.username && (<Alert 
                                                    variant='danger'
                                                    className='p-2 mt-2'>
                                                        {errors.username.message}
                                                    </Alert>)
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required:{
                                        value:true,
                                        message:'Campo requerido'
                                    },
                                    pattern:{
                                        value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                        message:'Email no válido'
                                    }
                                })}
                                />
                            {
                                errors.email && (<Alert 
                                                variant='danger'
                                                className='p-2 mt-2'>
                                                    {errors.email.message}
                                                </Alert>)
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                {...register("password", {
                                    required:{
                                        value:true,
                                        message:'Campo requerido'
                                    },
                                    minLength:{
                                        value:6,
                                        message:'Mínimo 6 caracteres'
                                    },
                                    maxLength:{
                                        value:15,
                                        message:'Máximo 15 caracteres'
                                    },
                                })}
                                />
                            {
                                errors.password && (<Alert 
                                                    variant='danger'
                                                    className='p-2 mt-2'>
                                                        {errors.password.message}
                                                    </Alert>)
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirma tu contraseña"
                                {...register("password2", {
                                    required:{
                                        value:true,
                                        message:'Campo requerido'
                                    },
                                    minLength:{
                                        value:6,
                                        message:'Mínimo 6 caracteres'
                                    },
                                    maxLength:{
                                        value:15,
                                        message:'Máximo 15 caracteres'
                                    },
                                    validate: (value)=>{
                                        if(value === document.getElementById('formBasicPassword').value){
                                            return true
                                        }else{
                                            return 'Las contraseñas no coinciden'
                                        }
                                    }
                                })}
                                />
                            {
                                errors.password2 && (<Alert 
                                                    variant='danger'
                                                    className='p-2 mt-2'>
                                                        {errors.password2.message}
                                                    </Alert>)
                            }
                        </Form.Group>

                        <div className='w-full d-flex flex-column justify-content-center align-items-center my-2'>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey={import.meta.env.VITE_RECAPTCHA}
                                
                            />
                            {
                                alertCaptcha && (<Alert 
                                                    variant='danger'
                                                    className='p-2 mt-2'>
                                                        Por favor, verifica que no eres un robot
                                                    </Alert>)
                            }
                        </div>

                        <Button 
                        className='w-100'
                        variant="primary" type="submit"
                        disabled={loading}>
                            {
                                loading ? (<Spinner animation='border' variant='light' />) : 'Registrarse'
                            }
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


