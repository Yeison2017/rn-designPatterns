import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonLink, Title } from "@/common/components";
import { StackAppProps } from "@/navigation/interfaces";

const HomeScreen = () => {
  const navegation = useNavigation<StackAppProps>();

  return (
    <View style={styles.container}>
      <Title name="Patrones de diseño" />
      <Title name="Patrones creacionales" />
      <ButtonLink
        name="Singleton"
        onPress={() => navegation.navigate("Singleton")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
  },
});
