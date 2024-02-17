import React, { useState } from "react";
import styles from "./growYourBusiness.module.css";
import WhichDescribeOption from "./options/WichDescribeOption/WhichDescribeOption";
import OwnerOption from "./options/OwnerOption/OwnerOption";
import LocationOption from "./options/LocationOption/LocationOption";
import BussinesType from "./options/BussinesTypeOption/BussinesTypeOption";
import AnnualRevenueOption from "./options/AnnualRevenueOption/AnnualRevenueOption";
import ProfitLast12Option from "./options/ProfitLast12Option/ProfiteOptionLast12";
import ProfiteOptionLast3Option from "./options/ProfitLast3Option/ProfitLast3Option";
import OwnerEquityOption from "./options/OwnerEquityOption/OwnerEquityOption";
import FirstLastNameOption from "./options/FirstLastNameOption/FirstLastNameOption";
import CompanyName from "./options/CompanyNameOption/CompanyNameOption";
import CompanyWebURLOption from "./options/CompanyWebURLOption/CompanyWebURLOption";
import PhoneNumberOption from "./options/PhoneNumberOption/PhoneNumberOption";
import EmailOption from "./options/EmailOption/EmailOption";

const GrowYourBusiness = () => {
  const [currentOption, setCurrentOption] = useState("WhichDescribe");
  return (
    <div className={styles.growYourBusiness}>
      {currentOption === "WhichDescribe" && (
        <WhichDescribeOption changeView={setCurrentOption} />
      )}
      {currentOption === "Owner" && (
        <OwnerOption changeView={setCurrentOption} />
      )}
      {currentOption === "Location" && (
        <LocationOption changeView={setCurrentOption} />
      )}
      {currentOption === "BussinesType" && (
        <BussinesType changeView={setCurrentOption} />
      )}
    </div>
  );
};

export default GrowYourBusiness;
