import { StyleSheet, Text, View } from "react-native";

import { ScreenLayout } from "@/common/components";
import { LoginContext } from "../examples/auth/loginContext";
import { LoginDBStrategy } from "../examples/auth/loginDBStrategy";

const StrategyScreen = () => {
  const auth = new LoginContext(new LoginDBStrategy());

  return (
    <ScreenLayout>
      <Text>strategy</Text>
    </ScreenLayout>
  );
};

export default StrategyScreen;

const styles = StyleSheet.create({});
