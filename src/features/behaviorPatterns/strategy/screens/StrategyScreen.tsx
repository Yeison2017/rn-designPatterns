import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  ButtonLink,
  Paragraph,
  ScreenLayout,
  Title,
} from "@/common/components";
import { LoginContext } from "../examples/auth/loginContext";
import { LoginDBStrategy } from "../examples/auth/loginDBStrategy";
import { LoginGoogleStrategy } from "../examples/auth/loginGoogleStrategy";
import { LoginServiceStrategy } from "../examples/auth/loginServiceStrategy";
import { StackAppProps } from "@/navigation/interfaces";

const StrategyScreen = () => {
  const navegation = useNavigation<StackAppProps>();

  const auth = new LoginContext(new LoginDBStrategy());
  const responseAuthDB = auth.login("adminDB", "123");

  auth.setStrategy(new LoginServiceStrategy());
  const responseAuthService = auth.login("adminService", "123");

  auth.setStrategy(new LoginGoogleStrategy());
  const responseAuthGoogle = auth.login("adminGoogle", "123");

  return (
    <ScreenLayout>
      <Title name="Ejemplos:" />
      <Title name="Auth" />
      <Title name="1. Auth" />
      <Paragraph name={responseAuthDB ? "True" : "False"} />
      <Title name="2. Auth Service" />
      <Paragraph name={responseAuthService ? "True" : "False"} />
      <Title name="3. Auth Google" />
      <Paragraph name={responseAuthGoogle ? "True" : "False"} />
      <ButtonLink
        name="Book"
        onPress={() => navegation.navigate("BookStrategy")}
      />
    </ScreenLayout>
  );
};

export default StrategyScreen;

const styles = StyleSheet.create({});
