import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors, fontFamily } from "@/common/styles";

interface Props {
  onPress?: () => void;
  name: string;
}

const ButtonLink = ({ name, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.body}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{">"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonLink;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.blueGray400,
    padding: 8,
    borderRadius: 8,
  },
  body: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    color: colors.green700,
    fontFamily: fontFamily.textRegular,
  },
});
