import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Text from "../../../../components/atoms/Text/Text";
import RadioButton from "../../../../components/atoms/RadioButton/RadioButton";
import styles from "./annualRevenue.module.css";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const AnnualRevenueOption = ({ changeView }) => {
  const { setForm, form } = useGrowFormStore((state) => state);
  const handleSelectRevenue = (id, value) => {
    setForm(id, value);
    changeView("ProfitLast12");
  };
  return (
    <GrowBussinesOption
      numOfPage={5}
      onAnt={() => changeView("BussinesType")}
      onNext={() => form.annualRevenue && changeView("ProfitLast12")}
      renderTitle={() => <Text textAlign="center">Annual Revenue?</Text>}
    >
      <div className={styles.container}>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.annualRevenue === "0-1M"}
            name={"annualRevenue"}
            value={"0-1M"}
            id={"annualRevenue"}
            onChange={handleSelectRevenue}
            label="$0 - $1M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"annualRevenue"}
            value={"1M-3M"}
            checked={form.annualRevenue === "1M-3M"}
            id={"annualRevenue"}
            onChange={handleSelectRevenue}
            label="$1M - $3M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"annualRevenue"}
            value={"3M-5M"}
            checked={form.annualRevenue === "3M-5M"}
            id={"annualRevenue"}
            onChange={handleSelectRevenue}
            label="$3M - $5M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"annualRevenue"}
            value={"5M-10M"}
            checked={form.annualRevenue === "5M-10M"}
            id={"annualRevenue"}
            onChange={handleSelectRevenue}
            label="$5M - $10M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"annualRevenue"}
            value={"10M-20M"}
            checked={form.annualRevenue === "10M-20M"}
            id={"annualRevenue"}
            onChange={handleSelectRevenue}
            label="$10M - $20M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            name={"annualRevenue"}
            value={"20M+"}
            checked={form.annualRevenue === "20M+"}
            id={"annualRevenue"}
            onChange={handleSelectRevenue}
            label="$20M+"
          />
        </div>
      </div>
    </GrowBussinesOption>
  );
};

export default AnnualRevenueOption;
