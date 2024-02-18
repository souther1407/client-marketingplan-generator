import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import RadioButton from "../../../../components/atoms/RadioButton/RadioButton";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./profileOptionLast12.module.css";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const ProfiteOptionLast12 = ({ changeView }) => {
  const { setForm, form } = useGrowFormStore((state) => state);
  const handleSelectOption = (id, value) => {
    setForm(id, value);
    changeView("ProfitLast3");
  };
  return (
    <GrowBussinesOption
      numOfPage={6}
      onAnt={() => changeView("AnnualRevenue")}
      onNext={() => form.profitLast12 && changeView("ProfitLast3")}
      renderTitle={() => (
        <Text textAlign="center">
          How much profit (EBITDA) did your business earn over the past 12
          months?
        </Text>
      )}
    >
      <div className={styles.container}>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast12 === "0-1M"}
            name={"profitLast12"}
            value={"0-1M"}
            id={"profitLast12"}
            onChange={handleSelectOption}
            label="$0 - $1M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast12 === "1M-3M"}
            name={"profitLast12"}
            value={"1M-3M"}
            id={"profitLast12"}
            onChange={handleSelectOption}
            label="$1M - $2M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast12 === "2M-3M"}
            name={"profitLast12"}
            value={"2M-3M"}
            id={"profitLast12"}
            onChange={handleSelectOption}
            label="$2M - $3M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast12 === "3M-5M"}
            name={"profitLast12"}
            value={"3M-5M"}
            id={"profitLast12"}
            onChange={handleSelectOption}
            label="$3M - $5M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast12 === "5M-10M"}
            name={"profitLast12"}
            value={"5M-10M"}
            id={"profitLast12"}
            onChange={handleSelectOption}
            label="$5M - $10M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast12 === "10M+"}
            name={"profitLast12"}
            value={"10M+"}
            id={"profitLast12"}
            onChange={handleSelectOption}
            label="$10M+"
          />
        </div>
      </div>
    </GrowBussinesOption>
  );
};

export default ProfiteOptionLast12;
