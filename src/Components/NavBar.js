import React from "react";
import styles from "../Styles/NavBar.module.css";
import PrimaryButton from "./PrimaryButton";
import logo from "../assets/shared/desktop/logo.svg";

const NavBar = () => {
  return (
    <div className={styles["ParentDiv"]}>
      <div className="HomeLogo">
        <img src={logo} />
      </div>
      <div className={styles["NavLinks"]}>
        <div>STORIES</div>
        <div>FEATURES</div>
        <div>PRICING</div>
      </div>
      <div className="ActionButtonsDiv">
        <PrimaryButton label="GET AN INVITE" />
      </div>
    </div>
  );
};

export default NavBar;
