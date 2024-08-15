import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { TypeDesignPattern } from "@/features/typeDesignPattern/controllers";

export type RootStackAppParams = {
  Home: undefined;
  TypeDesignPattern?: TypeDesignPattern;

  // Creational patterns
  Singleton: undefined;

  // Structural patterns

  // Behavior patterns
  Observer: undefined;
  Strategy: undefined;

  // ---------------- EXAMPLES ----------------
  // ---------- Creational patterns ----------
  // Singleton
  UserRegistrationServiceSingleton: undefined;
  ProfileUserRegistration: undefined;

  // ---------- Behavior patterns ----------
  // Strategy
  RouteStrategy: undefined;
  DiscountStrategy: undefined;

  // Observer
  YouTubeObserver: undefined;
};

export type StackAppProps = NativeStackNavigationProp<RootStackAppParams>;
