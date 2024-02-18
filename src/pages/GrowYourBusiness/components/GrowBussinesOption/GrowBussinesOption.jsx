import React from "react";
import styles from "./growBussinesOption.module.css";
import FooterMenu from "../FooterMenu/FooterMenu";
const GrowBussinesOption = ({
  renderTitle,
  numOfPage,
  onNext,
  onAnt,
  final = false,
  children,
}) => {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div className={styles.title}>{renderTitle()}</div>
        <section>{children}</section>
      </main>
      <footer className={styles.footer}>
        <FooterMenu
          numPage={numOfPage}
          onNext={onNext}
          onAnt={onAnt}
          final={final}
        />
      </footer>
    </div>
  );
};

export default GrowBussinesOption;
