import React from 'react'

import RegisterFormContainer from './register-form.container'
import AccauntTop from '../../../components/commons/accaunt-top/accaunt-top'

export default function Registercomponent() {
   
  return (
    <div>
        <form className="ps-form--account ant-form">
            <AccauntTop/>
            <RegisterFormContainer/>
      </form>
    </div>
  )
}
