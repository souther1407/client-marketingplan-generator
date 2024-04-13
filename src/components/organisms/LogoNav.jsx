import React from "react";
import styles from "./logoNav.module.css";
import Logo from "../atoms/Logo/Logo";
import IconTextButton from "../molecules/IconTextButton/IconTextButton";
import { useNavigate, useLocation } from "react-router-dom";
import { LOGIN } from "../../constants/routes";
const LogoNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickLogin = () => {
    navigate(LOGIN);
  };
  return (
    <div className={styles.logoNav}>
      <Logo />
      <div
        className={`${styles.loginBtn} ${
          location.pathname === LOGIN && styles.hide
        }`}
      >
        <IconTextButton
          variant="bordered"
          size="180px"
          onClick={handleClickLogin}
        >
          Log In
        </IconTextButton>
      </div>
    </div>
  );
};

export default LogoNav;
