import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Input from "../../../../components/atoms/Input/Input";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./phoneNumberOption.module.css";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const PhoneNumberOption = ({ changeView }) => {
  const { setForm, form } = useGrowFormStore((state) => state);
  const handleChange = (id, value) => {
    setForm(id, value);
  };
  return (
    <GrowBussinesOption
      numOfPage={12}
      onAnt={() => changeView("CompanyWebURL")}
      onNext={() => form.phoneNumber && changeView("Email")}
      renderTitle={() => (
        <Text textAlign="center">What's Your Phone Number?</Text>
      )}
    >
      <div className={styles.container}>
        <Input
          type="number"
          id={"phoneNumber"}
          onChange={handleChange}
          size="100%"
          onError={() => {}}
          placeholder="Please enter a valid phone number"
        />
      </div>
    </GrowBussinesOption>
  );
};

export default PhoneNumberOption;
