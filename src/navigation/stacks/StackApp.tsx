import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@/features/home/screens";
import { SingletonScreen } from "@/features/creationalPatterns/singleton/screens";
import { RootStackAppParams } from "../interfaces";

const Stack = createNativeStackNavigator<RootStackAppParams>();

const StackApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Singleton" component={SingletonScreen} />
    </Stack.Navigator>
  );
};

export default StackApp;

const styles = StyleSheet.create({});
