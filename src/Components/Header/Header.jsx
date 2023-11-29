import React from "react";
import "./style.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopUpAdd from "../PopUpAdd/PopUpAdd";

function Header() {
  return (
    <div className={"header-hero-container"}>
      <div>
        <span className={"hidden-menu-text-header"}>
          First-level Menu / Second-level Menu /
        </span>
        <span className={"non-hidden-menu-text-header"}>{" Current Page"}</span>
      </div>
      <div>
        <PopUpAdd />
      </div>
    </div>
  );
}

export default Header;
