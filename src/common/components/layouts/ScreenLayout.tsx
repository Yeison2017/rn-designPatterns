import { StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

const ScreenLayout = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 20,
  },
});
