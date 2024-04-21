import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

const SafeAreaLayout = ({ children }: Props) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default SafeAreaLayout;

const styles = StyleSheet.create({});
