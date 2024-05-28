import { ScrollView, StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
  activateScrollView?: boolean;
}

const ScreenLayout = ({ activateScrollView, children }: Props) => {
  if (activateScrollView) {
    return <ScrollView style={[styles.container]}>{children}</ScrollView>;
  } else {
    return <View style={styles.container}>{children}</View>;
  }
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 20,
  },
});
