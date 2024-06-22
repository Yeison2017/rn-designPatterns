import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Paragraph, ScreenLayout } from "@/common/components";
import { LoginContext } from "../examples/auth/loginContext";
import { LoginDBStrategy } from "../examples/auth/loginDBStrategy";
import { LoginGoogleStrategy } from "../examples/auth/loginGoogleStrategy";
import { LoginServiceStrategy } from "../examples/auth/loginServiceStrategy";
import { StackAppProps } from "@/navigation/interfaces";
import { InfoCard } from "@/common/components/cards";
import { IMAGE_EXAMPLE } from "@/common/constants";
import { TitleAccordion } from "@/common/components/accordion";
import { DESCRIPTION_DESIGN_PATTERNS } from "@/data";

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
      <TitleAccordion name="Descripción">
        <Paragraph name={DESCRIPTION_DESIGN_PATTERNS.strategy} />
      </TitleAccordion>
      <TitleAccordion name="Ejemplos:">
        {/* <Title name="Auth" />
      <Title name="1. Auth" />
      <Paragraph name={responseAuthDB ? "True" : "False"} />
      <Title name="2. Auth Service" />
      <Paragraph name={responseAuthService ? "True" : "False"} />
      <Title name="3. Auth Google" />
    <Paragraph name={responseAuthGoogle ? "True" : "False"} /> */}
        <InfoCard
          title="Route"
          image={IMAGE_EXAMPLE.routeStrategy}
          onPress={() => navegation.navigate("RouteStrategy")}
          imageProportion={0.2}
        />
      </TitleAccordion>
    </ScreenLayout>
  );
};

export default StrategyScreen;

const styles = StyleSheet.create({});
