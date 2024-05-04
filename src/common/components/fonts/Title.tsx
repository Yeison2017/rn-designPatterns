import { StyleSheet, Text } from "react-native";

import { colors, fontFamily } from "@/common/styles";

interface Props {
  name: string;
}

const Title = ({ name }: Props) => {
  return <Text style={styles.text}>{name}</Text>;
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
