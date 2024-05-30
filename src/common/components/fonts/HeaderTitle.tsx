import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Title, { TitleProps } from "./Title";
import { Icon } from "../icons";

interface Props extends TitleProps {
  onPress: () => void;
}

const HeaderTitle = ({ onPress, ...props }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Title {...props} />
      <Icon name="arrow-right" />
    </TouchableOpacity>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
