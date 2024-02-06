import React from "react";
import styles from "./growYourBusiness.module.css";
import Text from "../../components/atoms/Text/Text";
import Mark from "../../components/atoms/Mark/Mark";
import Icon from "../../components/atoms/Icon/Icon";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
const GrowYourBusiness = () => {
  return (
    <div className={styles.growYourBusiness}>
      <div className={styles.container}>
        <Text textAlign="center">Which best describes you?</Text>
        <section className={styles.options}>
          <div className={styles.option}>
            <button className={`${styles.check} ${styles.checked}`}></button>
            <Icon type={"bulb"} size={"4rem"} />
            <Text>
              I want the <Mark color="inherit">TOOLS</Mark> to execute this plan
            </Text>
          </div>
          <div className={styles.option}>
            <button className={`${styles.check} ${styles.checked}`}></button>
            <Icon type={"bulb"} size={"4rem"} />
            <Text>
              I want <Mark color="inherit">HELP</Mark> to execute this plan
            </Text>
          </div>
        </section>
        <section>
          <IconTextButton></IconTextButton>
        </section>
      </div>
    </div>
  );
};

export default GrowYourBusiness;
