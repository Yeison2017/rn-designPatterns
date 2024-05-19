import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackAppParams = {
  Home: undefined;
  Singleton: undefined;
  Strategy: undefined;
  BookStrategy: undefined;
};

export type StackAppProps = NativeStackNavigationProp<RootStackAppParams>;
