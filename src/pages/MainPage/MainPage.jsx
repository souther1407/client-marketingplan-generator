import React, { useState } from "react";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import styles from "./mainPage.module.css";
import IconTextButton from "@/components/molecules/IconTextButton/IconTextButton";
import Slider from "../../components/atoms/Slider/Slider";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import { usePlansStore } from "../../stores/usePlanStore";
import { useNavigate } from "react-router-dom";
import { GENERATE_PLAN } from "../../constants/routes";
const MainPage = () => {
  const [input, setInput] = useState({
    msg: "",
    budget: 5000,
  });
  const navigate = useNavigate();
  const { creatingPlan, createPlan } = usePlansStore((state) => state);

  const handleChange = (id, value) => {
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
      </nav>
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <main>
            <div>
              <Text textAlign="center">
                Please describe your product/service in 1- 2 sentences MAX.
              </Text>
              <Text textAlign="center" size={"0.78rem"} color="soft">
                Ex: Vegan Protein Bar
              </Text>
            </div>
            <Input
              id={"msg"}
              onChange={handleChange}
              onError={() => {}}
              placeholder="Type your product/service here."
            />
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
              colorVariant="secondary"
              onClick={handleGeneratePlan}
            >
              {"Create Marketing Plan -->"}
            </IconTextButton>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
