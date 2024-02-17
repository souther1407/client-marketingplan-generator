import React from "react";
import styles from "./footerMenu.module.css";
import Text from "../../../../components/atoms/Text/Text";
const FooterMenu = ({ onAnt, onNext, numPage, maxPages }) => {
  return (
    <div className={styles.footerMenu}>
      <button onClick={onAnt}>{"<---- Previous"}</button>
      <Text color="soft">{`${numPage} of 14`}</Text>
      <button onClick={onNext}>{"Next ---->"}</button>
    </div>
  );
};

export default FooterMenu;
