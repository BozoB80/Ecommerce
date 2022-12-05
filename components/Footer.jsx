import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022, BB Digital Store - All Rights Reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <BsFacebook />
        <BsLinkedin />
      </p>
    </div>
  )
}

export default Footer