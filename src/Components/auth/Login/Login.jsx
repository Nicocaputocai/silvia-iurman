import { Button, Container, Form, Row, Col, Spinner, Alert } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { sucessAlert, errorAlert } from '../../SweetAlert/Alerts';
import UserDataServices from '../../../Services/UserServices';
import useAuth from '../../../hooks/useAuth';
import { TYPES } from '../../../context/auth/AuthReducer';
import {useForm} from 'react-hook-form';
import { useEffect, useState } from "react";
import { ModalRecovery } from "../modal/Modal";
import { GoogleLogin } from "../Google/GoogleLogin";
import { HelmetPage } from "../../components";
import { cookies } from "../../../config/cookies";

export const Login = () => {
  const {formState:{errors}, register, handleSubmit, reset} = useForm();
  const [loading, setLoading] = useState(false);
  const {auth, authDispatch} = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSetModal = () => setShow(!show);

  const onSubmit= async (data) =>{
    
    try {
      localStorage.removeItem('token');
      setLoading(true);
      const response = await UserDataServices.login(data);
      localStorage.setItem('token', response.data.token);
      /* cookies.set('token', response.data.token, {path:'/'}) */
      localStorage.setItem('user', JSON.stringify(response.data.user));
      authDispatch({type:TYPES.LOGIN, payload:{user:response.data.user, token:response.data.token}});
      sucessAlert('Bienvenido');
      

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
      navigate(-1)
    }
  }, [auth.isLogged])

  return (
    <>
      <HelmetPage section='Iniciar sesión' content='Inicio de sesión de la página de Silvia Iurman - Nuevas Constelaciones Familiares Argentina'/>
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
              <div className="d-flex justify-content-center align-items-center w-100">
                <b>- O -</b>
              </div>
              {/* Auth with google */}
              <GoogleLogin/>
              <div className="d-flex justify-content-between align-items-center">
                <Form.Text className="text-muted text-center mt-2 fs-6">
                  ¿Es tu primera vez? <Link to="/registro">Registrate</Link>
                </Form.Text>
                <Form.Text className="text-muted text-center mt-2 fs-6">
                  <Link as="Button" onClick={handleSetModal}>Olvide mi contraseña</Link>
                </Form.Text>
              </div>
            </Form>

            {alert.msg && <Alert msg={alert.msg} />}
            
          </Col>
        </Row>
        <ModalRecovery handleSetModal={handleSetModal} show={show}/>
      </Container>
    </>

  )
}
