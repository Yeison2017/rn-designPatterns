import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@/features/home/screens";
import { SingletonScreen } from "@/features/creationalPatterns/patterns/singleton/screens";
import { StrategyScreen } from "@/features/behaviorPatterns/strategy/screens";
import { BookStrategyScreen } from "@/features/behaviorPatterns/strategy/examples/book/client";
import { RootStackAppParams } from "../interfaces";
import { CreationalPatternsScreen } from "@/features/creationalPatterns/screens";

const Stack = createNativeStackNavigator<RootStackAppParams>();

const StackApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="CreationalPatterns"
        component={CreationalPatternsScreen}
      />
      <Stack.Screen name="Singleton" component={SingletonScreen} />
      <Stack.Screen name="Strategy" component={StrategyScreen} />
      <Stack.Screen name="BookStrategy" component={BookStrategyScreen} />
    </Stack.Navigator>
  );
};

export default StackApp;

const styles = StyleSheet.create({});
