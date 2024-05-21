import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import { colors, fontFamily } from "@/common/styles";

export interface TitleProps {
  name: string;
  style?: StyleProp<TextStyle>;
}

const Title = ({ name, style }: TitleProps) => {
  return <Text style={[styles.text, style]}>{name}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 8,
    color: colors.textDark700,
    fontFamily: fontFamily.textRegular,
  },
});
