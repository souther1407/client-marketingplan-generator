import React from "react";
import Icon from "../../../../components/atoms/Icon/Icon";
import styles from "./cardOption.module.css";
const CardOption = ({ icon, children }) => {
  return (
    <div className={styles.option}>
      <Icon type={icon} size={"4rem"} color="var(--primary)" />
      {children}
    </div>
  );
};

export default CardOption;
