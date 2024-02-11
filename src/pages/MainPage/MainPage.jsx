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

const MAX_CHARS = 25;

const MainPage = () => {
  const [input, setInput] = useState({
    msg: "",
    budget: 5000,
  });
  const [maxChars, setMaxChars] = useState(input.msg.length);
  const navigate = useNavigate();
  const { creatingPlan, createPlan } = usePlansStore((state) => state);

  const handleChange = (id, value) => {
    if (value.length == MAX_CHARS + 1) {
      return;
    }
    setMaxChars(value.length);
    setInput((prev) => ({ ...prev, [id]: value }));
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
        <Text>Paddawan</Text>
        <div className={styles.label}>
          <Text bold>Beta 0.0.5</Text>
        </div>
      </nav>
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <Text textAlign="center">
            Please describe your <Mark color="primary">Product/Service</Mark> in
            1- 2 sentences MAX.
          </Text>
          <div className={styles.serviceInput}>
            <Input
              id={"msg"}
              value={input.msg}
              onChange={handleChange}
              onError={() => {}}
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
              <Text>${input.budget}</Text>
            </section>
            <Slider
              id="budget"
              onChange={handleChange}
              value={input.budget}
              min={10}
              max={10000}
              step={10}
            />
          </div>
          <IconTextButton
            disabled={input.msg.length === 0}
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
