import React, { useState } from 'react'
import { useCheckout } from '../../hooks/useCheckout';
import { Button, Modal, Spinner } from 'react-bootstrap';
import checkoutServices from '../../Services/CheckoutServices'
import {mp, pp} from '../../assets/images'
import Styles from './Styles.module.css'
import { errorAlert } from '../SweetAlert/Alerts';

export const Checkout = () => {
    const {checkout, addToCheckout, closeModal} = useCheckout();
    const [isLoading, setIsLoading] = useState(false)

    const handleCheckoutMP = async (product) => {
      setIsLoading(true)
      try {
        const response = await checkoutServices.mp({
          product,
          idPurchase: localStorage.getItem('purchase')
        });
        window.location.href = response.data.init_url;
      } catch (error) {
        if(!error.response.data.ok){
          errorAlert(error.response.data.msg)
        }
        closeModal()
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    const handleCheckoutPP = async (product) => {
      setIsLoading(true)
      try {
        const response = await checkoutServices.pp(product);
        window.location.href = response.data.link;
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
  return (
      <Modal show={checkout.modal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{checkout.product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {checkout.product.description}
            <p className='text-end fs-2'>Total: ${checkout.total}</p>
            <div className='w-100 d-flex flex-column gap-2'>
                <button
                className={Styles.pp}
                onClick={() => handleCheckoutPP(checkout.product)}
                disabled={isLoading}
                >
                  {isLoading ? 
                  <Spinner 
                  animation="border"
                  variant="light"
                  size="sm"
                  />
                  : <img src={pp} alt="" />}
                </button>

                <button 
                className={Styles.mp}
                onClick={() => handleCheckoutMP(checkout.product)}
                disabled={isLoading}
                >
                  {isLoading ?
                  <Spinner
                  animation="border"
                  variant="light"
                  size="sm"
                  />
                  :<img src={mp} alt="" />}
                </button>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
