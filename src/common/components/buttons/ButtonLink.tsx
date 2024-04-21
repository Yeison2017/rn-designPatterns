import { colors } from "@/common/styles";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress?: () => void;
  name: string;
}

const ButtonLink = ({ name, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLink;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.white,
    backgroundColor: colors.green100,
    borderWidth: 1,
    borderColor: colors.blueGray400,
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: colors.green700,
  },
});
