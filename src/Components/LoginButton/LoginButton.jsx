import React from "react";
import "./style.css";

function LoginButton({ name = "", onButtonClick }) {
  return (
    <button onClick={onButtonClick} className={"button-login-vilot"}>
      {name}
    </button>
  );
}

export default LoginButton;
