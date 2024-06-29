import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@/features/home/screens";
import { SingletonScreen } from "@/features/creationalPatterns/singleton/screens";
import { StrategyScreen } from "@/features/behaviorPatterns/strategy/screens";
import { TypeDesignPatternScreen } from "@/features/typeDesignPattern/screens";
import { RouteStrategyScreen } from "@/features/behaviorPatterns/strategy/examples/route/client";
import { RootStackAppParams } from "../interfaces";
import { ObserverScreen } from "@/features/behaviorPatterns/observer/screens";
import { YouTubeObserverScreen } from "@/features/behaviorPatterns/observer/examples/youTube/client";
import {
  ProfileUserRegistrationScreen,
  UserRegistrationServiceSingletonScreen,
} from "@/features/creationalPatterns/singleton/examples/userRegistrationService/client";

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
        name="TypeDesignPattern"
        component={TypeDesignPatternScreen}
      />
      {/* Creational patterns */}
      <Stack.Screen name="Singleton" component={SingletonScreen} />

      {/* Structural patterns */}

      {/* Behavior patterns */}
      <Stack.Screen name="Observer" component={ObserverScreen} />
      <Stack.Screen name="Strategy" component={StrategyScreen} />

      {/* ---------------------- EXAMPLES ---------------------- */}

      {/* -------- Creational patterns -------- */}
      {/* Singleton */}
      <Stack.Screen
        name="UserRegistrationServiceSingleton"
        component={UserRegistrationServiceSingletonScreen}
      />
      <Stack.Screen
        name="ProfileUserRegistration"
        component={ProfileUserRegistrationScreen}
      />

      {/* -------- Behavior patterns -------- */}
      {/* Strategy */}
      <Stack.Screen name="RouteStrategy" component={RouteStrategyScreen} />

      {/* Observer */}
      <Stack.Screen name="YouTubeObserver" component={YouTubeObserverScreen} />
    </Stack.Navigator>
  );
};

export default StackApp;

const styles = StyleSheet.create({});
