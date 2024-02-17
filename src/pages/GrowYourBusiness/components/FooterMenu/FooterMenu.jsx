import React from "react";
import styles from "./footerMenu.module.css";
import Text from "../../../../components/atoms/Text/Text";
const FooterMenu = ({ onAnt, onNext, numPage, maxPages }) => {
  return (
    <div className={styles.footerMenu}>
      <button>{"<---- Previous"}</button>
      <Text color="soft">{"1 of 14"}</Text>
      <button>{"Next ---->"}</button>
    </div>
  );
};

export default FooterMenu;
