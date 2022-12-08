import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import bblogo from '../public/bb-logo.png'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return (
    <div className='navbar-container'>
      
      <Link href="/">
        <p className='logo'>
          <Image src={bblogo} alt="logo" width={384} height={33} className="logo-img"/>
        </p>
      </Link>

      
      <button 
        type="button" 
        className='cart-icon'
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar