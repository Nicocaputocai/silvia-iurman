import React from 'react'
import { useCheckout } from '../../hooks/useCheckout';
import { Button, Modal } from 'react-bootstrap';

export const Checkout = () => {
    const {checkout, addToCheckout, closeModal} = useCheckout();
  return (

      <Modal show={checkout.modal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{checkout.product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {checkout.product.description}
            <p className='text-end fs-2'>Total: ${checkout.total}</p>
            <div className='w-100 d-flex flex-column gap-2'>
                <Button variant='warning'>Paypal</Button>
                <Button variant='primary'>Mercado Pago</Button>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
