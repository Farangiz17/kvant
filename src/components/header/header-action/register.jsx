import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <div className="register_icon">
        <IoPersonOutline style={{fontWeight: "100"}} />
      </div>
      <div className="register_div">
      <p className="voyti register_div--p"><Link to='/accaunt/login'>Войти</Link></p>
      <p className="registratsiya register_div--p"><Link to='/accaunt/register'>Регистрация</Link></p>

      </div>
    </div>
  );
}
