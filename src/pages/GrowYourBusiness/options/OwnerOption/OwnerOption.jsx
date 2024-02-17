import React from "react";
import GrowBussinesOption from "../../components/GrowBussinesOption/GrowBussinesOption";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Text from "../../../../components/atoms/Text/Text";
import styles from "./ownerOption.module.css";
const OwnerOption = ({ changeView }) => {
  return (
    <GrowBussinesOption
      numOfPage={2}
      onAnt={() => {}}
      onNext={() => {}}
      renderTitle={() => (
        <Text textAlign="center">Are you a business owner?</Text>
      )}
    >
      <div className={styles.container}>
        <IconTextButton
          colorVariant="secondary"
          variant="bordered"
          onClick={() => changeView("Location")}
          size="300px"
        >
          YES
        </IconTextButton>
        <IconTextButton
          colorVariant="secondary"
          variant="bordered"
          size="300px"
        >
          NO
        </IconTextButton>
      </div>
    </GrowBussinesOption>
  );
};

export default OwnerOption;
