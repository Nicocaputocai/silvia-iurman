import React from "react";
import {Button,Form,Container,Image, NavItem, Alert, Spinner} from 'react-bootstrap'
import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'
import UserDataServices from "../../Services/UserServices";
import {useForm} from 'react-hook-form'
import { PageLoader } from '../components/PageLoader';
import { createFormData } from '../../helpers';
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';
import { errorAlert, sucessAlert } from '../SweetAlert/Alerts';
import { USER } from "../../types/TYPES";
import { TYPES } from "../../context/auth/AuthReducer";

export const UserProfile = () => {
    const {auth, authDispatch} = useAuth()
    // console.log(auth);
    const [loading, setLoading] = useState(false);
    const [editUser, setEditUser] = useState({
        data: {},
        isLoading: true,
      });
      const {register, formState:{errors, defaultValues}, handleSubmit, reset} = useForm({defaultValues:{...auth.user, birthday: auth.user.dateOfBirth}});
      const [selectedImage, setSelectedImage] = useState(null); // Vista previa de la imagen
      const navigate = useNavigate();
      const handleInputFileChange = (e) => {
        //Vista previa de la foto
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
        const { name, files } = e.target;
        setEditUser({ ...editUser, [name]: files[0] });
      };

    const save = async (data) => {
        setLoading(true)
        Swal.fire({
          title: 'Quieres editar?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Editar!'
        }).then(async (result) => {
          if (result.isConfirmed) {
  
            try {
              const updateData = {
                ...data,
                avatar: selectedImage ? selectedImage : editUser.data.avatar,
              }
              console.log(updateData);
              const response = await UserDataServices.updateUser(createFormData(updateData))
              // const responseUser = await UserDataServices.relogin();
              authDispatch({type: TYPES.UPDATE , payload: response.data.user})
              localStorage.setItem("user",JSON.stringify(response.data.user))
              // console.log(responseUser.data.user);
              // console.log(auth.user);
              sucessAlert('Usuario actualizado con éxito')
              reset()
              navigate('/', {replace:true}) //Evita que se vuelva al login
            } catch (error) {
              console.log(error);
              errorAlert('No se pudo actualizar el usuario')
            }
            finally{
              setLoading(false)
            }
            
          }
        })
  // console.log(data);
      
    };

    // useEffect(() => {
    //   defaultValues({...auth.user, birthday: auth.user.dateOfBirth})
    //   }, []);
    
      // if (editUser.isLoading) {
      //   return <PageLoader/>;
      // }

  return (
  <>
  <Container>
    <h2>Editar perfil de usuario</h2>
    {/* <span>{auth.user.firstName}</span> */}
    <Form onSubmit={handleSubmit(save)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              // defaultValue={auth.user.firstName}
              {...register("firstName", {
                required: {
                  value: true,
                  message: "El nombre es requerido",
                },
              })}
            />
            {
              errors.firstName && <Alert 
                            variant='danger'
                            className='p-2 mt-2'>
                            {errors.firstName.message}
                            </Alert>
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              // defaultValue={auth.user.lastName}
              {...register("lastName", {
                required: {
                  value: true,
                  message: "El apellido es requerido",
                },
              })}
            />
            {
              errors.lastName && <Alert 
                            variant='danger'
                            className='p-2 mt-2'>
                            {errors.lastName.message}
                            </Alert>
            }
          </Form.Group>
          <Form.Group controlId="avatar">
            <Form.Label>Foto</Form.Label>
            <Form.Control
              type="file"
              name='avatar'
              label="Foto de perfil"
              accept="image/*"
              onChange={handleInputFileChange}
            />
            {selectedImage ? (
              <div
              >
                <Image
                  style={{ maxWidth: "100%", maxHeight: 320 }}
                  src={URL.createObjectURL(selectedImage)}
                  alt="Thumb"
                  fluid= "true"
                />
              </div>
            ): 
            <Image
              src={`https://api-silvia.divisioncode.net.ar/img/${editUser.data?.avatar}`}
              //src={`http://localhost:4000/img/${editUser.data?.avatar}`}
              fluid= "true"
            ></Image>
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              type="date"
              // defaultValue={auth.user.dateOfBirth}
              name="birthday"
              {...register("birthday", {
                required: {
                  value: true,
                  message: "La fecha de nacimiento es requerida",
                  },
                }
                )
              }
              
            ></Form.Control>
            {
              errors.dateOfBirth && <Alert 
                              variant='danger'
                              className='p-2 mt-2'>
                              {errors.dateOfBirth.message}
                            </Alert>
            }
            
          </Form.Group>
          <Form.Group>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              // defaultValue={auth.user.phone}
              {...register("phone", {
                required: {
                  value: true,
                  message: "El teléfono es requerido",
                }
                })
              }
            ></Form.Control>
            {
              errors.phone && <Alert 
                                      variant='danger'
                                      className='p-2 mt-2'>
                                      {errors.phone.message}
                                    </Alert>
            }
          </Form.Group>
          <Form.Group>
            <Form.Label>País</Form.Label>
            <Form.Control
              type="text"
              // defaultValue={auth.user.country}
              {...register("country", {
                required: {
                  value: true,
                  message: "El país es requerido",
                }
                })
              }
            ></Form.Control>
            {
              errors.country && <Alert 
                                      variant='danger'
                                      className='p-2 mt-2'>
                                      {errors.country.message}
                                    </Alert>
            }
          </Form.Group>
          <br />
          <NavItem as={Link} to={`/admin`}>
            <Button 
            className="mb-3" 
            type={Link} size="lg" v
            ariant="danger"
            disabled={loading}
            >
              Cancelar
            </Button>
          </NavItem>
          <Button
            className="mb-3 float-end"
            size="lg"
            variant="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? <Spinner 
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                          /> : "Editar perfil"}
          </Button>
        </Form>
  </Container>


  </>
  );
};
