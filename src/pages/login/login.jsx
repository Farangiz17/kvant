import React from "react";
import LoginContainer from "../../containers/accaunt/login-page/login.container";
import CrumbContainer from "../../components/commons/seaction-top-crumb/ps-breadCrumb.container";

export default function Login() {
  return (
    <div>
      <CrumbContainer glavni="Главная" this="Войти" />
      <LoginContainer />
    </div>
  );
}
