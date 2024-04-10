import React from "react";
import styles from "./productCost.module.css";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Input from "../../../../components/atoms/Input/Input";
import Icon from "../../../../components/atoms/Icon/Icon";
const ProductCost = ({ onNextScreen, onPreviousScreen }) => {
  return (
    <div className={styles.sellingPrice}>
      <main className={styles.main}>
        <Text fontWeight="bold" size={"2rem"}>
          What's the product's cost?
        </Text>
        <div className={styles.form}>
          <Text>
            Type the average acquisition/production cost.
            <br /> An estimate is good enough
          </Text>
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
            <IconTextButton size="300px" textProps={{ fontWeight: "bold" }}>
              Next
            </IconTextButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductCost;
