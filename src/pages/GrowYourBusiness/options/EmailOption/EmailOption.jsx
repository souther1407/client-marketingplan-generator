import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Input from "../../../../components/atoms/Input/Input";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./emailOption.module.css";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const EmailOption = ({ changeView }) => {
  const { setForm, form } = useGrowFormStore((state) => state);
  const handleChange = (id, value) => {
    setForm(id, value);
  };
  return (
    <GrowBussinesOption
      numOfPage={13}
      onAnt={() => changeView("PhoneNumber")}
      onNext={() => form.email && changeView("Confirm")}
      renderTitle={() => (
        <Text textAlign="center">What's Your Contact Email?</Text>
      )}
    >
      <div className={styles.container}>
        <Input
          id={"email"}
          onChange={handleChange}
          size="100%"
          onError={() => {}}
          placeholder="example@example.com"
        />
      </div>
    </GrowBussinesOption>
  );
};

export default EmailOption;
