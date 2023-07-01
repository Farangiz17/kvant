import React from 'react'

export default function FooterBottomComponent() {
  return (
    <div className='footer-bottom-component'>
       <p>
        © 2023 
        <a href="http://soff.uz/" target='_blank'>Soff IT Company</a>
        . Все права защищены</p>

        <p>
          <span>Мы используем безопасный платеж для:</span>
          <a href="#">
            <img src="../../images/click (2).png" alt="click" />
          </a>
          <a href="#">
            <img src="../../images/payme-01.png" alt="payme" />
          </a>
        </p>
    </div>
  )
}
