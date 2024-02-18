import React from "react";
import styles from "./firstLastNameOption.module.css";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import Input from "../../../../components/atoms/Input/Input";
import Text from "../../../../components/atoms/Text/Text";
import { useGrowFormStore } from "../../../../stores/useGrowFormStore";
const FirstLastNameOption = ({ changeView }) => {
  const { setForm, form } = useGrowFormStore((state) => state);
  const handleChange = (id, value) => {
    setForm(id, value);
  };
  return (
    <GrowBussinesOption
      numOfPage={9}
      onAnt={() => changeView("OwnerEquility")}
      onNext={() =>
        form.firstName && form.lastName && changeView("CompanyName")
      }
      renderTitle={() => <Text textAlign="center">First & Last Name?</Text>}
    >
      <div className={styles.container}>
        <Input
          id={"firstName"}
          onChange={handleChange}
          size="300px"
          value={form.firstName}
          onError={() => {}}
          placeholder="First Name"
        />
        <Input
          id={"lastName"}
          onChange={handleChange}
          value={form.lastName}
          onError={() => {}}
          size="300px"
          placeholder="Last Name"
        />
      </div>
    </GrowBussinesOption>
  );
};

export default FirstLastNameOption;
