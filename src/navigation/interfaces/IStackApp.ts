import { TypeDesignPattern } from "@/common/interfaces";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackAppParams = {
  Home: undefined;
  TypeDesignPattern: TypeDesignPattern;
  Singleton: undefined;
  Strategy: undefined;
  BookStrategy: undefined;
};

export type StackAppProps = NativeStackNavigationProp<RootStackAppParams>;
