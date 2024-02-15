import React, { useState } from "react";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import styles from "./mainPage.module.css";
import IconTextButton from "@/components/molecules/IconTextButton/IconTextButton";
import Slider from "../../components/atoms/Slider/Slider";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import Mark from "../../components/atoms/Mark/Mark";
import { usePlansStore } from "../../stores/usePlanStore";
import { useNavigate } from "react-router-dom";
import { GENERATE_PLAN } from "../../constants/routes";
import { isEmpty, isNumberTooBig } from "../../utils/validators/validators";
const MAX_CHARS = 50;

const MainPage = () => {
  const [input, setInput] = useState({
    msg: "",
    budget: 0,
  });

  const [errors, setErrors] = useState({
    msg: "value",
    budget: "",
  });

  const isThereAnyError = () => {
    for (let e in errors) {
      if (errors[e] !== "") return true;
    }
    return false;
  };
  const [maxChars, setMaxChars] = useState(input.msg.length);
  const navigate = useNavigate();
  const { creatingPlan, createPlan } = usePlansStore((state) => state);

  const handleChange = (id, value) => {
    if (id === "msg" && value.length == MAX_CHARS + 1) {
      return;
    } else if (id === "msg" && value.length < MAX_CHARS + 1) {
      setMaxChars(value.length);
    }
    setInput((prev) => ({ ...prev, [id]: value }));
  };
  const handleErrors = (id, value) => {
    console.log(id, value);
    setErrors((prev) => ({ ...prev, [id]: value }));
  };
  const handleGeneratePlan = async () => {
    const error = await createPlan(input);
    if (!error) {
      navigate(GENERATE_PLAN + "/aaa");
    }
  };
  return (
    <div className={styles.mainPage}>
      {creatingPlan && <LoadingScreen />}
      <nav className={styles.nav}>
        <Text bold color="primary">
          Paddawan
        </Text>
        <div className={styles.label}>
          <Text bold>Beta 0.0.5</Text>
        </div>
      </nav>
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <Text textAlign="center" bold>
            Find the <Mark color="primary">Perfect Marketing Strategy</Mark> for
            any product
          </Text>
          <div className={styles.serviceInput}>
            <Input
              id={"msg"}
              value={input.msg}
              onChange={handleChange}
              onError={handleErrors}
              validators={[isEmpty]}
              label="Product | Service"
              placeholder="Vegan Protein Bar"
            />
            <div className={styles.maxCharTexts}>
              <Text size={"0.77rem"} color="soft">
                Maximum 25 characters.
              </Text>
              <Text size={"0.77rem"} color="soft">
                {maxChars} / {MAX_CHARS}
              </Text>
            </div>
          </div>
          <div className={styles.budgetSlider}>
            <section>
              <Text>Budget</Text>
              <div className={styles.budgetContainer}>
                <Mark color="primary">$</Mark>
                <Mark color="primary">
                  <Input
                    id={"budget"}
                    onChange={(id, value) => handleChange(id, parseInt(value))}
                    onError={handleErrors}
                    validators={[isEmpty, isNumberTooBig]}
                    variant="plain"
                    type="number"
                    value={input.budget}
                  />
                </Mark>
              </div>
            </section>
            <Slider
              id="budget"
              onChange={handleChange}
              value={input.budget}
              min={10}
              onError={handleErrors}
              validators={[isNumberTooBig]}
              max={50000}
              step={10}
            />
          </div>
          <IconTextButton
            disabled={isThereAnyError()}
            onClick={handleGeneratePlan}
          >
            {"Create Marketing Plan -->"}
          </IconTextButton>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
