import React from 'react'
import FooterTopComponent from './footer-top.component'
import FooterBottomComponent from './footer-bottom.component'

export default function FooterContainer() {
  return (
    <div className='footer-container'>
      <FooterTopComponent/>
      <FooterBottomComponent/>
    </div>
  )
}
