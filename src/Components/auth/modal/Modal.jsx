import { Alert, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form';
import UserDataServices from '../../../Services/UserServices';

export const ModalRecovery = ({handleSetModal, show}) => {
  const {formState:{errors}, handleSubmit, register, reset} = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const [res, setRes] = useState(null);

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      const response = await UserDataServices.recovery(data);
      setRes({
        ok:true,
        msg: response.data.msg
      })
    } catch (error) { 
      setRes({
        ok:false,
        msg: error.response.data.msg
      })
    } finally {
      setIsLoading(false)
      reset();
    }
  }

  return (
      <Modal show={show} onHide={handleSetModal}>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar mi cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingrese su correo</Form.Label>
            <Form.Control
              type="text"
              placeholder="name@example.com"
              autoFocus
              {...register('email', {
                required: 'Este campo es requerido',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Correo invalido'
                }
              })}
            />
              {
                res && <Alert
                  variant={res?.ok ? "success" : "danger"}
                  className="mt-2">
                    {res?.msg}
                </Alert>
              }
            {errors.email && <Alert
              variant="danger"
              className="mt-2">
              {errors.email.message}
            </Alert>}
            </Form.Group>
            <div className='d-flex justify-content-around'>
                <Button 
                variant="secondary" 
                disabled={isLoading}
                onClick={handleSetModal}>
                    Cancelar
                </Button>
                <Button 
                variant="primary" 
                disabled={isLoading}
                type='submit'>
                    {isLoading ? <Spinner animation="border" role="status"/> : 'Recuperar'}
                </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
  );
}