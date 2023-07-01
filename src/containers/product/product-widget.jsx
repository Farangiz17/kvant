import React from 'react'
import {BsGlobe} from 'react-icons/bs'
import {Tb3DRotate} from 'react-icons/tb'
import {LuReceipt} from 'react-icons/lu'
import {SlBubbles} from 'react-icons/sl'

export default function ProductWidget() {
  return (
    <div className='product-widget'>
      <p> <i className='icon-network'><BsGlobe/></i>   Бесплатная доставка по Ташкенту</p>
      <p> <i className='icon-3dRotate'><Tb3DRotate/> </i>  90 дней возврата если товар имеет проблемы</p>
      <p> <i className='icon-peceipt' ><LuReceipt/></i>   Безопасная оплата 100% безопасный платеж</p>
      <p> <i className='icon-bubbles' ><SlBubbles/></i>   Поддержка 24/7</p>
    </div>
  )
}
