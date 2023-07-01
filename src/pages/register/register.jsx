import React from 'react'
import RegisterContainer from '../../containers/accaunt/register-page/register.container'
import CrumbContainer from '../../components/commons/seaction-top-crumb/ps-breadCrumb.container'

export default function Register() {
  return (
    <div>
      <CrumbContainer glavni="Главная" this="Регистрация" />
        <RegisterContainer/>
    </div>
  )
}
