import { colors } from "@/common/styles";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string | number;
}

const Paragraph = ({ name }: Props) => {
  return <Text style={styles.text}>{name}</Text>;
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.textDark700,
  },
});
