import React from "react";
import styles from "./sellingPrice.module.css";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Input from "../../../../components/atoms/Input/Input";
import Icon from "../../../../components/atoms/Icon/Icon";

const SellingPrice = ({ onNextScreen, onPreviousScreen }) => {
  return (
    <div className={styles.sellingPrice}>
      <main className={styles.main}>
        <Text fontWeight="bold" size={"2rem"}>
          What's the product's selling price??
        </Text>
        <div className={styles.form}>
          <Text>Type the price that shows up on your website.</Text>
          <div className={styles.sellingPriceInput}>
            <Input variant="secondary" placeholder="45" type="number" />
            <div className={styles.iconText}>
              <Icon type={"dollar"} size={"2rem"} color="var(--primary)" />
              <Text fontWeight="bold">USD</Text>
            </div>
          </div>
          <Text size={"0.78rem"}>Exclude marketing expenses</Text>
          <div className={styles.button}>
            <IconTextButton
              variant="bordered"
              size="300px"
              textProps={{ fontWeight: "bold" }}
              onClick={onPreviousScreen}
            >
              Previous
            </IconTextButton>
            <IconTextButton
              size="300px"
              textProps={{ fontWeight: "bold" }}
              onClick={onNextScreen}
            >
              Next
            </IconTextButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellingPrice;
