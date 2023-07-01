import React from 'react'
import LoginFormComponent from './login-form.component'

export default function LoginFormContainer() {
  return (
    <div className="form-tab active"  id='sign-in' >
        <LoginFormComponent/>
    </div>
  )
}
