import { useState } from 'react'
import { Button, Container, Form } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { Alerta } from '../../Alert';
import AdminUserDataServices from '../../../Services/AdminUserServices';
import useAuth from '../../../hooks/useAuth';
import { useForm } from '../../../hooks/useForm';

export const Login = () => {
  const [alert,setAlert] = useState({});
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  const handleShowAlert = (msg, time = true) => {
    setAlert({
      msg
    });
    if(time){
      setTimeout(() => {
        setAlert({});
      }, 3000);
    }
    reset()
  };

  const {formValues,handleInputChange,reset} = useForm({
    username:"",
    passwords: ""
  });
  const {username,password} = formValues

  const handleSubmit= async (e) =>{
    e.preventDefault();

    if ([username, password].includes("")) {
      handleShowAlert("Todos los campos son obligatorios");
      return null;
    }

    try {
    //  const {data} = await clientAxios.post('/auth/login',{
    //     username,
    //     password
    //   })
    const {data} = await AdminUserDataServices.login({username, password})
      // console.log(data);
      setAuth(data.user)
      localStorage.setItem('token', data.token) //Cuando cierro el navegador se borra. Para que no se borre va en localStorage
      navigate('/admin')

    } catch (error) {
      console.log(error);
      handleShowAlert(error.response?.data.msg)
    }
    
  }

  return (
    <>
    <Container className="mt-3 mb-3">
    {
      alert.msg && <Alerta  {...alert} />
    }
    <Form  onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <Form.Label>Usuario</Form.Label>
      <Form.Control type="text" 
      placeholder="Ingresar usuario" 
      id='username' 
      name="username" 
      value={username} 
      onChange={handleInputChange}
      />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control 
      type="password"
      placeholder="Ingrese su contraseña" 
      id='password' 
      name="password" 
      value={password} 
      onChange={handleInputChange}/>
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Container>
  </>
  )
}
