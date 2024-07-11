import React, { useContext } from 'react';
import "./Cart.css"
import { StoreContext } from '../../Context/StoreContext';
import { food_list } from '../../assets/assets';
import {useNavigate} from "react-router-dom"


const Cart = () => {

  const{cartItem, removeFromCart ,getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-item-title'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br/>
      <hr/>
      {food_list.map((item, index) => {
        if(cartItem[item._id]>0){
        return (
          <>
          <div className='cart-item-title cart-item-item'>
            <img className='item-img' src={item.image}></img>
            <p >{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItem[item._id]}</p>
            <p>{item.price * cartItem[item._id]}</p>
            <p onClick={()=>{removeFromCart(item._id)}} className='cross'>X</p>
          </div>
          <hr/>
          </>
          )
        }
      })}
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Sub-Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
            <hr/>
          </div>
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a Promo Code ,Enter it here</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='Promo Code here'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  );
}

export default Cart;
