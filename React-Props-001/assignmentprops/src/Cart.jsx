import React from 'react'
import './Cart.css'
const Cart = (props) => {
  return (
    <div className='cartBox'>
        <div className='colorDiv' style={{backgroundColor:props.colorcode}}></div>
        <div className='nameDiv'>
            <h2>{props.colorcode}</h2>
            <p style={{color:props.colorcode}}>{props.name}</p>
        </div>
    </div>
  )
}
export default Cart;