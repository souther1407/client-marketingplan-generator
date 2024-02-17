import React from "react";
import Icon from "../../../../components/atoms/Icon/Icon";
import styles from "./cardOption.module.css";
const CardOption = ({ icon, id, children, onClick }) => {
  return (
    <div className={styles.option} onClick={() => onClick(id)}>
      <Icon type={icon} size={"4rem"} color="var(--primary)" />
      {children}
    </div>
  );
};

export default CardOption;
