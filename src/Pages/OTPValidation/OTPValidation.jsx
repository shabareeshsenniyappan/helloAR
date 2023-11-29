import React, { useState } from "react";
import LoginHeading from "../../Components/LoginHeading/LoginHeading";
import "./style.css";
import LoginSubText from "../../Components/LoginSubText/LoginSubText";
import PhoneNumberInput from "../../Components/PhoneNumberInput/PhoneNumberInput";
import LoginButton from "../../Components/LoginButton/LoginButton";
import OTPInput from "../../Components/OTPInput/OTPInput";
function OTPValidation() {
  return (
    <div className={"sign-in-container"}>
      <div className="left">
        <LoginHeading heading={"OTP Verification"} />
      </div>

      <LoginSubText
        text={
          "We have sent and OTP to +919889898989. Please enter the code received to verify."
        }
      />
      <OTPInput />
      <LoginButton name={"Verify"} />
    </div>
  );
}

export default OTPValidation;
