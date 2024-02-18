import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Text from "../../../../components/atoms/Text/Text";
import RadioButton from "../../../../components/atoms/RadioButton/RadioButton";
import styles from "./bussinesTypeOption.module.css";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const BussinesTypeOption = ({ changeView }) => {
  const { setForm, form } = useGrowFormStore((state) => state);
  const handleSelectBussinesType = (id, value) => {
    console.log(id, value);
    setForm(id, value);
    changeView("AnnualRevenue");
  };
  return (
    <GrowBussinesOption
      numOfPage={4}
      onAnt={() => changeView("Location")}
      onNext={() => form.bussinesType && changeView("AnnualRevenue")}
      renderTitle={() => (
        <Text textAlign="center">What type of business do you have?</Text>
      )}
    >
      <div className={styles.container}>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.bussinesType === "service"}
            name={"bussinesType"}
            value={"service"}
            id={"bussinesType"}
            onChange={handleSelectBussinesType}
            label="Service"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.bussinesType === "BrickMortar"}
            name={"bussinesType"}
            value={"BrickMortar"}
            id={"bussinesType"}
            onChange={handleSelectBussinesType}
            label="Brick & Mortar"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.bussinesType === "ecommerce"}
            name={"bussinesType"}
            value={"ecommerce"}
            id={"bussinesType"}
            onChange={handleSelectBussinesType}
            label="Ecommerce"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.bussinesType === "software"}
            name={"bussinesType"}
            value={"software"}
            id={"bussinesType"}
            onChange={handleSelectBussinesType}
            label="Software"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.bussinesType === "e-learning"}
            name={"bussinesType"}
            value={"e-learning"}
            id={"bussinesType"}
            onChange={handleSelectBussinesType}
            label="E-Learning"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.bussinesType === "others"}
            name={"bussinesType"}
            value={"others"}
            id={"bussinesType"}
            onChange={handleSelectBussinesType}
            label="Others"
          />
        </div>
      </div>
    </GrowBussinesOption>
  );
};

export default BussinesTypeOption;
