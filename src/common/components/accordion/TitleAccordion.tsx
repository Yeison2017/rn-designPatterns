import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Title } from "../fonts";
import { TitleProps } from "../fonts/Title";
import { Icon } from "../icons";
import { sizeIcon } from "@/common/styles";

interface Props extends TitleProps {
  children: React.ReactNode;
}

const TitleAccordion = ({ children, ...props }: Props) => {
  const [showChildren, setShowChildren] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowChildren(!showChildren)}
        style={styles.touchableOpacity}
        activeOpacity={0.8}
      >
        <Title {...props} />
        <Icon
          name={showChildren ? "arrow-up" : "arrow-down"}
          style={styles.icon}
        />
      </TouchableOpacity>
      {showChildren && children}
    </View>
  );
};

export default TitleAccordion;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  touchableOpacity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: sizeIcon.md,
  },
});
