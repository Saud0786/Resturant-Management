import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/context/StoreContext'

function PlaceOrder() {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
   <form className='place-order'>
        <div className="place-order-left">
            <p className='title'>Delivery Information</p>
            <div class="multi-fields">
              <input type="text" placeholder='First name'/>
              <input type="text" placeholder='Last name'/>
            </div>
            <input type="email" placeholder='Email adress'/> 
            <input type="text" placeholder='Street'/>
            <div class="multi-fields">
              <input type="text" placeholder='City'/>
              <input type="text" placeholder='State'/>
            </div>
            <div class="multi-fields">
              <input type="text" placeholder='Pin code'/>
              <input type="text" placeholder='Country'/>
            </div>
            <input type="number" placeholder='Phone'/>
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>$${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button>
        </div>

        </div>
   </form>
  )
}

export default PlaceOrder
