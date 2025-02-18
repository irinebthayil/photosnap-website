import React from "react";
import styles from "../Styles/PrimaryButton.module.css";

const PrimaryButton = (props) => {
  return <div className={styles["ButtonDiv"]}>{props.label}</div>;
};

export default PrimaryButton;
