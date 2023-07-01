import React from 'react'
import {RiFacebookFill, RiInstagramLine} from 'react-icons/ri'

export default function FooterTopComponent() {
  return (
    <div className='footer-top-component'>
        <p className='footer-top-component--call'>Свяжитесь с нами</p>
       <div>
       <p className='footer-top-component--p'>Звоните нами 24/7</p>
        <p className='footer-top-component--number'>+998(55)511-11-11</p>
        <p className='footer-top-component--p'>Бесплатная доставка по Ташкенту</p>
       </div>
        <div className='footer-top-component-icons'>
           <div className="footer-facebook-icon">
           <RiFacebookFill/> 
           </div>
           <div className="footer-insta-icon">
           <RiInstagramLine/>
           </div>
        </div>
    </div>
  )
}
