import React, { useEffect, useState } from "react";
import "./style.css";

function OTPInput({ onValuechange }) {
  const [value, setValue] = useState([]);

  const handelChange = (index, val) => {
    setValue([...value, val]);
  };
  useEffect(() => {
    onValuechange(value);
  }, [value]);

  return (
    <div className={"otp-input-conttainer"}>
      {[1, 2, 3, 4].map((e, index) => (
        <input
          key={index}
          className="otp-input"
          type="tel"
          maxLength={1}
          onChange={(e) => handelChange(index, e.target.value)}
        />
      ))}
    </div>
  );
}

export default OTPInput;
