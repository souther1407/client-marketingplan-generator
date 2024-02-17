import React from "react";
import styles from "./growBussinesOption.module.css";
import FooterMenu from "../FooterMenu/FooterMenu";
const GrowBussinesOption = ({ onOptionSelect, renderTitle, children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div className={styles.title}>{renderTitle()}</div>
        <section>{children}</section>
      </main>
      <footer className={styles.footer}>
        <FooterMenu />
      </footer>
    </div>
  );
};

export default GrowBussinesOption;
