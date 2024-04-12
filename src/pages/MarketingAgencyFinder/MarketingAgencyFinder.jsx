import React from "react";
import styles from "./marketingAgencyFinder.module.css";
import SelectProduct from "./components/SelectProduct/SelectProduct";

const MarketingAgencyFinder = () => {
  return (
    <div className={styles.marketingAgencyFinder}>
      <div className={styles.screen}>
        <SelectProduct />
      </div>
    </div>
  );
};

export default MarketingAgencyFinder;
