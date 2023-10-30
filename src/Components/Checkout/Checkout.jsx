import React, { useState } from 'react'
import { useCheckout } from '../../hooks/useCheckout';
import { Button, Modal, Spinner } from 'react-bootstrap';
import checkoutServices from '../../Services/CheckoutServices'
import {mp, pp} from '../../assets/images'
import Styles from './Styles.module.css'
import { errorAlert, sucessAlert } from '../SweetAlert/Alerts';
import {useAuth} from '../../hooks';
import CheckoutServices from '../../Services/CheckoutServices';

export const Checkout = () => {
    const {checkout, addToCheckout, closeModal} = useCheckout();
    const [isLoading, setIsLoading] = useState(false);
    const [transferLoading, setTransferLoading] = useState(false);
    const {auth} = useAuth()

    const handleCheckoutMP = async (product) => {
      setIsLoading(true)
      const purchase = JSON.parse(localStorage.getItem('purchase'));
      try {
        const response = await checkoutServices.mp({
          product,
          idPurchase: purchase.id,
          type: purchase.type,
        });
        window.location.href = response.data.init_url;
      } catch (error) {
        if(!error.response?.data.ok){
          errorAlert(error.response?.data.msg)
        }
        closeModal()
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    const handleCheckoutPP = async (product) => {
      setIsLoading(true)
      const purchase = JSON.parse(localStorage.getItem('purchase'));
      try {
        const response = await checkoutServices.pp({
          product,
          idPurchase: purchase.id,
          type: purchase.type,

        });
        window.location.href = response.data.link;
      } catch (error) {
        if(!error.response?.data.ok){
          errorAlert(error.response?.data.msg)
        }
        closeModal()
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    const handleCheckoutTransfer = async (product) => {
      setTransferLoading(true)
      const purchase = JSON.parse(localStorage.getItem('purchase'));
      const data = {
        idPurchase: purchase.id,
        type: purchase.type,
        pricePurchase: product.pricePesos,
      }
      try {
        const response = await CheckoutServices.transfer(data)
        if(!response.data.ok){
          errorAlert(response.data.msg)
        }
        sucessAlert(response.data.msg)
        closeModal()
      } catch (error) {
        errorAlert(error.response.data.msg)
      } finally {
        setTransferLoading(false)
      }

    }
  return (
      <Modal show={checkout.modal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{checkout.product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {checkout.product.description?.length < 100 && <p className='fs-5'>{checkout.product.description}</p>}
            <p className='text-end fs-2'>Total: ${checkout.total}</p>
            <div className='w-100 d-flex flex-column gap-2'>
            {/* {
              auth.user?.country === 'Argentina' 
              ? 

                <button 
                className={Styles.mp}
                onClick={() => handleCheckoutMP(checkout.product)}
                disabled={isLoading}
                >
                  {isLoading ?
                  <Spinner
                  animation="border"
                  variant="dark"
                  size="sm"
                  />
                  :<img src={mp} alt="" />}
                </button>
              :
                <button
                className={Styles.pp}
                onClick={() => handleCheckoutPP(checkout.product)}
                disabled={isLoading}
                >
                  {isLoading ? 
                  <Spinner 
                  animation="border"
                  variant="dark"
                  size="sm"
                  />
                  : <img src={pp} alt="" />}
                </button>
            } */}
            {/* {
              auth.user?.country === 'Argentina' && 
              <> */}
                {/* <p className='text-center m-0'>- o -</p> */}
                <p className='text-center m-0'>Abonar por transferencia</p>
                <Button variant="primary" onClick={() => handleCheckoutTransfer(checkout.product)}>
                  {transferLoading ? <Spinner animation="border" variant="light" size="sm" /> : 'Enviar datos al correo'}
                </Button>
             {/*  </>
            } */}
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
