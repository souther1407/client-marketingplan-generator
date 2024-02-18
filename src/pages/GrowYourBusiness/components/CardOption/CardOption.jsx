import React from "react";
import Icon from "../../../../components/atoms/Icon/Icon";
import styles from "./cardOption.module.css";
const CardOption = ({ icon, id, children, onClick, marked }) => {
  return (
    <div
      className={`${styles.option} ${marked && styles.marked}`}
      onClick={() => onClick(id)}
    >
      <Icon type={icon} size={"4rem"} color="var(--primary)" />
      {children}
    </div>
  );
};

export default CardOption;
