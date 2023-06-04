import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import useAuth from '../../../hooks/useAuth';
import UserDataServices from "../../../Services/UserServices";
import { TYPES } from "../../../context/auth/AuthReducer";
import { useCheckout } from "../../../hooks/useCheckout";
import { TYPE_PURCHASE } from "../../../types/TYPES";
import { paises } from "../../../assets/paises";

export const ModalWorkshop = ({show, handleSetModal, workshop, type}) => {
    const {formState:{errors}, register, reset, handleSubmit} = useForm();
    const {auth, authDispatch, authLoading} = useAuth();
    const {checkout, addToCheckout} = useCheckout();
    
    const onSubmit = async (data) => {
        try {
            const response = await UserDataServices.updateUser(data)
            authDispatch({
                type : TYPES.UPDATE,
                payload : response.data.user
            })
            reset()
            addToCheckout(workshop, type);
            handleSetModal()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
    }, [])

    if(authLoading) return (<h1>Cargando...</h1>)
    return (
        <Modal show={show} onHide={handleSetModal}>
            <Modal.Header closeButton>
                <Modal.Title>Inscripción</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* <Form> */}
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control 
                                required 
                                type="text" 
                                autoFocus
                                defaultValue={auth.user?.firstName}
                                {...register('firstName',{
                                    required: {
                                        value: true,
                                        message: 'Campo requerido'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: 'Solo letras'
                                    }
                                })} />
                                {
                                    errors.firstName && (
                                    
                                        (<Alert 
                                            variant='danger'
                                            className='p-2 mt-2'>
                                            {errors.firstName?.message}
                                        </Alert>)
                                    )
                                }
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control 
                                type="text" 
                                required 
                                defaultValue={auth.user?.lastName}
                                {...register('lastName',{
                                    required: {
                                        value: true,
                                        message: 'Campo requerido'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/i,
                                        message: 'Solo letras'
                                    }
                                })}
                                />
                                {
                                    errors.lastName && (
                                    
                                        (<Alert 
                                            variant='danger'
                                            className='p-2 mt-2'>
                                            {errors.lastName?.message}
                                        </Alert>)
                                    )
                                }
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* </Form> */}
                    {/* <Form> */}
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="country">
                                <Form.Label>País</Form.Label>
                                <Form.Select 
                                defaultValue={auth.user?.country}
                                {...register('country',{
                                    required: {
                                        value: true,
                                        message: 'Campo requerido'
                                    }
                                })}>
                                    <option value='#' hidden>Selecciona tu país</option>
                                    {
                                        paises.map((pais, index)=><option value={pais} key={index}>{pais}</option>)
                                    }
                                </Form.Select>
                                {
                                    errors.country && (
                                        (<Alert 
                                            variant='danger'
                                            className='p-2 mt-2'>
                                            Selecciona tu pais
                                        </Alert>)
                                    )
                                }
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="birthday">
                                <Form.Label>Fecha de nacimiento</Form.Label>
                                <Form.Control 
                                type="date" 
                                defaultValue={auth.user?.dateOfBirth}
                                required 
                                {...register('birthday',{
                                    required: {
                                        value: true,
                                        message: 'Campo requerido'
                                    }
                                })}
                                />
                                {
                                    errors.birthday && (
                                    
                                        (<Alert 
                                            variant='danger'
                                            className='p-2 mt-2'>
                                            {errors.birthday?.message}
                                        </Alert>)
                                    )
                                }
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* </Form> */}

                    {/* <Form> */}
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control 
                        type="email" 
                        disabled 
                        defaultValue={auth.user?.email}
                        />
                        <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    </Form.Group>
                    {/* </Form> */}

                    {/* <Form> */}
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label> Teléfono </Form.Label>
                        <Form.Control 
                        type="phone" 
                        defaultValue={auth.user?.phone}
                        required
                        {...register('phone',{
                            required: {
                                value: true,
                                message: 'Campo requerido'
                            },
                            pattern: {
                                value: /^[0-9]+$/i,
                                message: 'Solo números'
                            }
                        })}
                        />
                        {
                            errors.phone && (
                            
                                (<Alert 
                                    variant='danger'
                                    className='p-2 mt-2'>
                                    {errors.phone?.message}
                                </Alert>)
                                )
                        }
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Acepto los términos y condiciones"
                            feedback="Para continuar debe aceptar los términos y condiciones."
                            feedbackType="invalid"
                        />
                    </Form.Group>

                    <Button
                        variant="secondary"
                        onClick={handleSetModal}
                        style={{ marginRight: "10px", position: "end" }}
                    >
                        Cerrar
                    </Button>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    {/* </Form> */}
                </Form>
            </Modal.Body>
        </Modal>
    )
}
