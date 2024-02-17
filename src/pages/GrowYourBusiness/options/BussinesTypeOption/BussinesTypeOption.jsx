import React from "react";

import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Text from "../../../../components/atoms/Text/Text";
import RadioButton from "../../../../components/atoms/RadioButton/RadioButton";
import styles from "./bussinesTypeOption.module.css";
const BussinesTypeOption = () => {
  return (
    <GrowBussinesOption
      numOfPage={4}
      renderTitle={() => (
        <Text textAlign="center">What type of business do you have?</Text>
      )}
    >
      <div className={styles.container}>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"bussinesType"}
            value={"service"}
            id={"bussinesType"}
            onChange={(id, value) => console.log(id, value)}
            label="Service"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"bussinesType"}
            value={"BrickMortar"}
            id={"bussinesType"}
            onChange={(id, value) => console.log(id, value)}
            label="Brick & Mortar"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"bussinesType"}
            value={"ecommerce"}
            id={"bussinesType"}
            onChange={(id, value) => console.log(id, value)}
            label="Ecommerce"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"bussinesType"}
            value={"software"}
            id={"bussinesType"}
            onChange={(id, value) => console.log(id, value)}
            label="Software"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"bussinesType"}
            value={"e-learning"}
            id={"bussinesType"}
            onChange={(id, value) => console.log(id, value)}
            label="E-Learning"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"bussinesType"}
            value={"others"}
            id={"bussinesType"}
            onChange={(id, value) => console.log(id, value)}
            label="Others"
          />
        </div>
      </div>
    </GrowBussinesOption>
  );
};

export default BussinesTypeOption;
