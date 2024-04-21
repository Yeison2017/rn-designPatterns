import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackAppParams = {
  Home: undefined;
  Singleton: undefined;
};

export type StackAppProps = NativeStackNavigationProp<RootStackAppParams>;
