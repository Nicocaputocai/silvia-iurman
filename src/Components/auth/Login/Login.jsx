import { Button, Container, Form, Row, Col, Spinner, Alert } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { sucessAlert, errorAlert } from '../../SweetAlert/Alerts';
import UserDataServices from '../../../Services/UserServices';
import useAuth from '../../../hooks/useAuth';
import { TYPES } from '../../../context/auth/AuthReducer';
import {useForm} from 'react-hook-form';
import { useEffect, useState } from "react";

export const Login = () => {
  const {formState:{errors}, register, handleSubmit, reset} = useForm();
  const [loading, setLoading] = useState(false);
  const {auth, authDispatch} = useAuth();
  const navigate = useNavigate();

  const onSubmit= async (data) =>{
    
    try {
      setLoading(true);
      const response = await UserDataServices.login(data);
      authDispatch({type:TYPES.LOGIN, payload:response.data.user});
      localStorage.setItem('token', response.data.token);
      sucessAlert('Bienvenido');
      navigate('/');

    } catch (error) {
      console.error(error);
      errorAlert(error.response?.data.msg);
    } finally {
      setLoading(false);
      reset();
    }
    
  }

  useEffect(() => {
    if(auth.isLogged){
      navigate('/');
    }
  }, [auth.isLogged])

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="text-center">Iniciar sesión</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuario"
                {...register("user", {
                  required: {
                    value: true,
                    message: 'Campo requerido'
                  },
                  minLength: {
                    value: 4,
                    message: 'Mínimo 4 caracteres'
                  },
                })
                }
              />
              {
                  errors.user && (<Alert 
                                      variant='danger'
                                      className='p-2 mt-2'>
                                      {errors.user.message}
                                      </Alert>)
              }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: {
                    value: true,
                    message: 'Campo requerido'
                  },
                  minLength: {
                    value: 4,
                    message: 'Mínimo 4 caracteres'
                  },
                  maxLength: {
                    value: 15,
                    message: 'Máximo 15 caracteres'
                  }
                })
                }
              />
              {
                  errors.password && (<Alert 
                                      variant='danger'
                                      className='p-2 mt-2'>
                                      {errors.password.message}
                                      </Alert>)
              }
            </Form.Group>
            <Button 
            variant="primary" 
            type="submit" 
            className="w-100"
            disabled={loading}>
              {
                loading ? <Spinner animation="border" variant="light" /> : 'Iniciar sesión'
              }
            </Button>
            <Form.Text className="text-muted text-center mt-2">
              ¿No tienes cuenta? <Link to="/registro">Registrate</Link>
            </Form.Text>
          </Form>

          {alert.msg && <Alerta msg={alert.msg} />}
          
        </Col>
      </Row>
    </Container>

  )
}
