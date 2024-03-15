import React, { useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import Order from './Order';

const showOrders = (props) =>{
  return(<div>
    {props.orders.map(el =>{
                      <Order key={el.id} item={el}/>
    })}
  </div>)
}

const showNothing = () =>{
  return (<div className='empty'>
      <h2>Корзина пуста</h2>
  </div>)
}


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>BookStore</span>
            <ul className='nav'>
                <li>About Us</li>
                <li>Contacts</li>
                <li>Home</li>
            </ul>
            <CiShoppingCart onClick={()  => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.lenght > 0 ?
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
