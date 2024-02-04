import React from "react";
import styles from "./mark.module.css";
const Mark = ({ children, color = "soft" }) => {
  return (
    <strong className={`${styles.mark} ${styles[color]}`}>{children}</strong>
  );
};

export default Mark;
