import React from "react";
import styles from "./logoNav.module.css";
import Logo from "../atoms/Logo/Logo";
import IconTextButton from "../molecules/IconTextButton/IconTextButton";
const LogoNav = () => {
  return (
    <div className={styles.logoNav}>
      <Logo />
      <IconTextButton variant="bordered" size="180px">
        Log In
      </IconTextButton>
    </div>
  );
};

export default LogoNav;
