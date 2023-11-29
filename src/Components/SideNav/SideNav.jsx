import React from "react";
import "./style.css";
import { ReactComponent as MenuIcon } from "../../Utils/images/icon-wrapper-14px.svg";
import { ReactComponent as LogOutIcon } from "../../Utils/images/logout.svg";
import { clearSession } from "../../Utils/Services/sessionService";
import { useNavigate } from "react-router-dom";

function SideNav() {
  const navigate = useNavigate();

  const logOut = () => {
    clearSession();
    navigate("/");
  };
  return (
    <div className={"side-nav-container"}>
      <div className={"main-continer"}>
        <div>
          <div className={"logo-side-bar"}>Logo</div>
          <div className={"menu-container"}>
            <span>
              <MenuIcon />
            </span>
            <span className={"text-menu-name"}>Songs</span>
          </div>
        </div>

        <div className="display_last" onClick={logOut}>
          <LogOutIcon /> <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
