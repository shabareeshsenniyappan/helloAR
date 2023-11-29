import React, { useState } from "react";
import LoginHeading from "../../Components/LoginHeading/LoginHeading";
import "./style.css";
import LoginSubText from "../../Components/LoginSubText/LoginSubText";
import PhoneNumberInput from "../../Components/PhoneNumberInput/PhoneNumberInput";
import LoginButton from "../../Components/LoginButton/LoginButton";
import OTPInput from "../../Components/OTPInput/OTPInput";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setSession } from "../../Utils/Services/sessionService";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [phoneNo, setphoneNo] = useState("");
  const [OTP, setOTP] = useState("");

  const onButtonClick = () => {
    handleLogin();
  };
  const phoneNochange = (e) => {
    setphoneNo(e);
  };

  const onChangeOTP = (e) => {
    setOTP(e?.join(""));
  };
  const onVerifyClick = () => {
    if (OTP === "5678") {
      const userData = { phoneNo, role: "user" }; // Replace with actual user data
      setSession(userData);
      navigate("/home");
    } else {
      toast.warn("Invalid OTP", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://dev.api.goongoonalo.com/v1/auth/login",
        {
          phoneNumber: phoneNo,
        }
      );

      if (response?.data?.message) {
        toast.success(response?.data?.message + "!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsSignIn((e) => !e);
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };
  return (
    <div className={"sign-in-container"}>
      <div className="left">
        <LoginHeading heading={isSignIn ? "Sign In" : "OTP Verification"} />
      </div>

      <LoginSubText
        text={
          isSignIn
            ? "Please enter your mobile number to login. We will send an OTP to verify your number."
            : `We have sent and OTP to ${phoneNo}. Please enter the code received to verify.`
        }
      />
      {isSignIn ? (
        <PhoneNumberInput onValuechange={phoneNochange} />
      ) : (
        <OTPInput onValuechange={onChangeOTP} />
      )}

      <LoginButton
        onButtonClick={() => {
          isSignIn ? onButtonClick() : onVerifyClick();
        }}
        name={isSignIn ? "Sign In" : "Verify"}
      />
      {!isSignIn && (
        <>
          <span className="lasy">Resend OTP</span>
          <span className="lasy" onClick={onButtonClick}>
            Use another number
          </span>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default SignIn;
