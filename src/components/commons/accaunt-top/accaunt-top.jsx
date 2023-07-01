import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function AccauntTop() {
    const [active, setActive] = useState(true)
    
    function activeFunc() {
      setActive(!active)
    }

  return (
    <ul className="ps-tab-list">
    <li onClick={activeFunc}>
      <Link className={(active) ? 'active': ''} to="/accaunt/login">
        Войти
      </Link>
    </li>
    <li onClick={activeFunc}>
      <Link to="/accaunt/register" className={(!active) ? 'active' : ''}>Регистрация</Link>
    </li>
    </ul>
  )
}
