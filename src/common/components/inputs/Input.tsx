import { View, TextInput, StyleSheet, Text } from "react-native";

import { borderRadius, colors, fontSize } from "@/common/styles";

interface Props {
  title?: string;
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const Input = ({ title, onChangeText, value = "", placeholder }: Props) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.label}>{title}</Text>}

      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: fontSize.lg,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderRadius: borderRadius.sm,
    borderColor: colors.trueGray300,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

export default Input;
