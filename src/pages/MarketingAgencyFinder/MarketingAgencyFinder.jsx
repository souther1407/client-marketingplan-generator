import React from "react";
import styles from "./marketingAgencyFinder.module.css";
import SelectProduct from "./components/SelectProduct/SelectProduct";
import LogoNav from "../../components/organisms/LogoNav";
const MarketingAgencyFinder = () => {
  return (
    <div className={styles.marketingAgencyFinder}>
      <div className={styles.screen}>
        <LogoNav />
        <SelectProduct />
      </div>
    </div>
  );
};

export default MarketingAgencyFinder;
