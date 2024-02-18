import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import RadioButton from "../../../../components/atoms/RadioButton/RadioButton";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./profitLast3Option.module.css";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const ProfitLast3Option = ({ changeView }) => {
  const { setForm, form } = useGrowFormStore((state) => state);
  const handleSelectOption = (id, value) => {
    setForm(id, value);
    changeView("OwnerEquility");
  };
  return (
    <GrowBussinesOption
      numOfPage={7}
      onAnt={() => changeView("ProfitLast12")}
      onNext={() => form.profitLast3 && changeView("OwnerEquility")}
      renderTitle={() => (
        <Text textAlign="center">
          How much profit (EBITDA) did your business earn over the past 3
          months?
        </Text>
      )}
    >
      <div className={styles.container}>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast3 === "0-250k"}
            name={"profitLast3"}
            value={"0-250k"}
            id={"profitLast3"}
            onChange={handleSelectOption}
            label="$0 - $250k"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast3 === "250k-500k"}
            name={"profitLast3"}
            value={"250k-500k"}
            id={"profitLast3"}
            onChange={handleSelectOption}
            label="$250K - $500K"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast3 === "500k-750k"}
            name={"profitLast3"}
            value={"500k-750k"}
            id={"profitLast3"}
            onChange={handleSelectOption}
            label="$500K - $750K"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast3 === "750K-1.25M"}
            name={"profitLast3"}
            value={"750K-1.25M"}
            id={"profitLast3"}
            onChange={handleSelectOption}
            label="$750K - $1.25M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast3 === "1.25M-2.5M"}
            name={"profitLast3"}
            value={"1.25M-2.5M"}
            id={"profitLast3"}
            onChange={handleSelectOption}
            label="$1.25M - $2.5M"
          />
        </div>
        <div className={styles.radioContainer}>
          <RadioButton
            checked={form.profitLast3 === "2.5M+"}
            name={"profitLast3"}
            value={"2.5M+"}
            id={"profitLast3"}
            onChange={handleSelectOption}
            label="$2.5M+"
          />
        </div>
      </div>
    </GrowBussinesOption>
  );
};

export default ProfitLast3Option;
