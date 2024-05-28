import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/common/styles";

type nameIcons = "arrow-right" | "arrow-left" | "arrow-down" | "arrow-up";

interface Props {
  name: nameIcons;
  size?: number | undefined;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const Icon = ({
  name,
  size = 24,
  color = colors.trueGray700,
  ...props
}: Props) => {
  switch (name) {
    case "arrow-right":
      return (
        <MaterialIcons
          name="keyboard-arrow-right"
          size={size}
          color={color}
          {...props}
        />
      );
    case "arrow-left":
      return (
        <MaterialIcons
          name="keyboard-arrow-left"
          size={size}
          color={color}
          {...props}
        />
      );
    case "arrow-down":
      return (
        <MaterialIcons
          name="keyboard-arrow-down"
          size={size}
          color={color}
          {...props}
        />
      );
    case "arrow-up":
      return (
        <MaterialIcons
          name="keyboard-arrow-up"
          size={size}
          color={color}
          {...props}
        />
      );
    default:
      break;
  }
};

export default Icon;

const styles = StyleSheet.create({});
