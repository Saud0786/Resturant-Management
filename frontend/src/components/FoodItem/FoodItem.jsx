import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'

function FoodItem({id,name,price,description,image}) {
 
    const {cartItems,addToCart,removeFormCart}=useContext(StoreContext)

  return (
    <div className='food-item'>
         <div className="fooditem-img-container">
              <img className='food-item-image' src={image} alt=""/>
              {
                !cartItems[id]? <img onClick={()=>addToCart(id)} className='add' src={assets.add_icon_white}/>
                : <div className='foot-item-counter'>
                        <img onClick={()=>removeFormCart(id)} src={assets.remove_icon_red} alt=""/>
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
                </div>
              }
         </div>
         <div className='food-item-info'>
             <div className='food-item-rating'>
                 <p>{name}</p>
                 <img src={assets.rating_starts} alt=""/>
             </div>
             <p className='food-iteam-desc'>{description}</p>
             <p className='food-item-price'>${ price}</p>
         </div>
    </div>
  )
}

export default FoodItem
