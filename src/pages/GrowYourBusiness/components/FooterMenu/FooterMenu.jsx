import React from "react";
import styles from "./footerMenu.module.css";
import Text from "../../../../components/atoms/Text/Text";
const FooterMenu = ({ onAnt, onNext, numPage, maxPages, final }) => {
  return (
    <div className={styles.footerMenu}>
      <button onClick={onAnt}>{"<---- Previous"}</button>
      <Text color="soft">{`${numPage} of 14`}</Text>
      <button onClick={onNext} className={final && styles.final}>
        {final ? "Submit" : "Next ----->"}
      </button>
    </div>
  );
};

export default FooterMenu;
