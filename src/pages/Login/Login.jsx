import React from "react";
import styles from "./login.module.css";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Icon from "../../components/atoms/Icon/Icon";
const Login = () => {
  return (
    <div className={styles.login}>
      <main className={styles.main}>
        <Text size={"2rem"}>Scale your Ecommerce Operations!</Text>
        <div className={styles.form}>
          <div className={styles.input}>
            <Text>Email</Text>
            <Input
              id={"email"}
              variant="secondary"
              onChange={() => {}}
              onError={() => {}}
            />
          </div>
          <div className={styles.input}>
            <Text>Password</Text>
            <Input
              id={"password"}
              type="password"
              variant="secondary"
              onChange={() => {}}
              onError={() => {}}
            />
          </div>
          <div className={styles.joinByEmail}>
            <IconTextButton size="100%">Join Paddawan</IconTextButton>
            <Text size={"0.67rem"} textAlign="center">
              By clicking “Accept and Join,” you agree to LinkedIn's Terms of
              Use , Privacy Policy , and Cookie Policy .
            </Text>
          </div>
          <div className={styles.separator}>
            <div className={styles.bar}></div>
            <Text size={"0.67rem"} fontWeight="bold">
              OR
            </Text>
            <div className={styles.bar}></div>
          </div>
          <div className={styles.joinByGoogle}>
            <button className={styles.googleBtn}>
              <Icon type={"googleIcon"} size={"2rem"} />
              <Text>Continue with Google</Text>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
