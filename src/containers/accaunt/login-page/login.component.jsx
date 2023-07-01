import React from "react";
import LoginFormContainer from "./login-form.container";
import AccauntTop from "../../../components/commons/accaunt-top/accaunt-top";

export default function LoginComponent() {
  return (
    <div>
      <form className="ps-form--account ant-form">
        <AccauntTop />
        <LoginFormContainer />
      </form>
    </div>
  );
}
