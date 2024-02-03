import React from "react";
import styles from "./result.module.css";
import Icon from "../../components/atoms/Icon/Icon";
import Link from "../../components/atoms/Link/Link";
import Text from "@/components/atoms/Text/Text";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Markdown from "react-markdown";
import { usePlansStore } from "../../stores/usePlanStore";
const Result = () => {
  const plan = usePlansStore((state) => state.plan);
  return (
    <div className={styles.result}>
      <nav className={styles.nav}>
        <div className={styles.semicircle}>
          <Icon size={"2.5rem"} type={plan?.strategy ?? ""} />
        </div>
        <section className={styles.setup}>
          <Text bold type="title">
            Optimal Marketing Plan:&nbsp; {plan?.product ?? "not found"}
          </Text>
          <Text bold>Set-Up Requirements</Text>
          <div className={styles.tutorials}>
            <Link to={"#"}>
              <div className={styles.link}>
                <img src="https://s3-alpha.figma.com/hub/file/1271832110/cdcd2381-7724-4076-8bd6-97dbc4e30ac7-cover.png" />
                <Text>Create a Facebook Page</Text>
              </div>
            </Link>
            <Link to={"#"}>
              <div className={styles.link}>
                <img src="https://s3-alpha.figma.com/hub/file/1271832110/cdcd2381-7724-4076-8bd6-97dbc4e30ac7-cover.png" />
                <Text>Meta Ads Manage</Text>
              </div>
            </Link>
            <Link to={"#"}>
              <div className={styles.link}>
                <img src="https://s3-alpha.figma.com/hub/file/1271832110/cdcd2381-7724-4076-8bd6-97dbc4e30ac7-cover.png" />
                <Text>Google Profile</Text>
              </div>
            </Link>
          </div>
        </section>
      </nav>
      <main>
        <section className={styles.resultDetail}>
          <Text bold>{plan?.strategy ?? "strategy"}</Text>
          <Markdown className={styles.resultMarkdown}>
            {plan ? plan.result : "Not plan generate :c"}
          </Markdown>
        </section>
        <section className={styles.growthBussines}>
          <IconTextButton size="100%">Grown your Business</IconTextButton>
        </section>
      </main>
    </div>
  );
};

export default Result;
