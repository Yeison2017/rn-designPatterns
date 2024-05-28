import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import { colors } from "@/common/styles";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Divider = ({ style }: Props) => {
  return <View style={[styles.divider, style]} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: colors.trueGray300,
    borderBottomWidth: 1,
  },
});
