import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { TypeDesignPattern } from "@/features/typeDesignPattern/controllers";

export type RootStackAppParams = {
  Home: undefined;
  TypeDesignPattern?: TypeDesignPattern;
  Singleton: undefined;
  Strategy: undefined;
  RouteStrategy: undefined;
};

export type StackAppProps = NativeStackNavigationProp<RootStackAppParams>;
