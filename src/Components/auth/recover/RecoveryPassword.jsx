import React, { useState } from 'react'
import { Alert, Container, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import UserDataServices from '../../../Services/UserServices';
import { errorAlert, sucessAlert } from '../../SweetAlert/Alerts';
import { useNavigate } from 'react-router-dom';

export const RecoveryPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {uuid} = useParams();
  const {formState:{errors}, register, handleSubmit,reset} = useForm();
    const navigate = useNavigate()

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
        const response = await UserDataServices.recoveryPassword({
            password: data.password,
            uuid
        })
        console.log(response)
        sucessAlert(response.data.msg);
        reset();
        navigate('/login',{replace:true})
    } catch (error) {
        console.log(error)
        errorAlert(error.response.data.msg)
    } finally {
        setIsLoading(false)
    }
  }
  return (
    <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <h4>Recupera tu contraseña</h4>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ingresa tu nueva contraseña</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password"
            {...register('password',{
                required:{
                    value: true,
                    message: 'Este campo es requerido'
                },
                minLength:{
                    value: 6,
                    message: 'Minimo 6 caracteres'
                }
            })} />
            {errors.password && <Alert variant="danger" className='mt-2 p-2'>{errors.password.message}</Alert>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Ingrese nuevamente la contraseña</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password again"
            {...register('password2',{
                required:{
                    value: true,
                    message: 'Este campo es requerido'
                },
                minLength:{
                    value: 6,
                    message: 'Minimo 6 caracteres'
                },
                validate: (value) => {
                    if (value === document.getElementById('formBasicPassword').value) {
                        return true
                    } else {
                        return 'Las contraseñas no coinciden'
                    }
                }
            })} />
            {errors.password2 && <Alert variant="danger" className='mt-2 p-2'>{errors.password2.message}</Alert>}
        </Form.Group>
        <Button 
        variant="primary" 
        type="submit"
        disabled={isLoading}>
            {isLoading ? <Spinner animation="border" role="status"/> : 'Cambiar contraseña'}
        </Button>
        </Form>

    </Container>
  );
}
