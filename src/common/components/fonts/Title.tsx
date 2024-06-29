import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import { colors, fontFamily, fontSize } from "@/common/styles";

export interface TitleProps {
  name: string;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
}

const Title = ({ name, isBold = true, style }: TitleProps) => {
  return (
    <Text style={[styles.text, style, isBold && onIsBold(isBold)]}>{name}</Text>
  );
};

const onIsBold = (isBold: boolean): StyleProp<TextStyle> => {
  const response = isBold
    ? { fontFamily: fontFamily.textBold }
    : { fontFamily: fontFamily.textRegular };

  return response;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.xl,
    marginBottom: 8,
    color: colors.textDark700,
  },
});
