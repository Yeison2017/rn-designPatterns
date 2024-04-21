import { StyleSheet, Text, View } from "react-native";
import SafeAreaProvider from "./SafeAreaProvider";
import NavigationProvider from "./NavigationProvider";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SafeAreaProvider>
      <NavigationProvider>{children}</NavigationProvider>
    </SafeAreaProvider>
  );
};

export default Providers;

const styles = StyleSheet.create({});
