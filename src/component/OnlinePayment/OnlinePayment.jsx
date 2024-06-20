import React, { useContext } from 'react'
import styles from './OnlinePayment.module.css'
import { CartContext } from '../../context/cartContext'
import { Helmet } from 'react-helmet';
import AddressForm from '../AddressForm/AddressForm';

export default function OnlinePayment() {
  const {onlineOrder} = useContext(CartContext);
  async function onlinePayment(id,value){
    const{data}=await onlineOrder(
      id,
      "http://localhost:3000",
      value
    );
    if(data?.status === "success"){
      window.location.href = data.session.url;
    }
  }
  return (
    <>
      <Helmet>
        <title>OnlineAddressForm</title>
        <meta name="description" content="OnlineAddressForm Page" />
      </Helmet>
      <AddressForm submitFn={onlinePayment} btnTxt="Pay Online"/>
    </>
  )
}
