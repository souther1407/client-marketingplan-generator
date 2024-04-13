import React from "react";
import PaddawanLogo from "@/assets/Paddawan Logo.svg";
import styles from "./logo.module.css";
const Logo = () => {
  return <img src={PaddawanLogo} alt="logo" className={styles.logo} />;
};

export default Logo;
