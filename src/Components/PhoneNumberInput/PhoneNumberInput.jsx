import React, { useState } from "react";
import "./style.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function PhoneNumberInput({ onValuechange }) {
  const [value, setValue] = useState();
  return (
    <div>
      <PhoneInput
        international
        placeholder="Enter phone number"
        value={value}
        onChange={(e) => {
          onValuechange(e);
        }}
        defaultCountry={"IN"}
      />
    </div>
  );
}

export default PhoneNumberInput;
