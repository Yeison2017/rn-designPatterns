import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonLink, HeaderTitle, Title } from "@/common/components";
import { StackAppProps } from "@/navigation/interfaces";
import { fontFamily } from "@/common/styles";

const HomeScreen = () => {
  const navegation = useNavigation<StackAppProps>();

  return (
    <View style={styles.container}>
      <Title name="Patrones de diseño" style={styles.title} />
      <View style={styles.containerPatterns}>
        <HeaderTitle
          name="Patrones creacionales"
          onPress={() => navegation.navigate("CreationalPatterns")}
        />
        <ButtonLink
          name="Singleton"
          onPress={() => navegation.navigate("Singleton")}
        />
      </View>
      <View style={styles.containerPatterns}>
        <HeaderTitle name="Patrones de comportamiento" onPress={() => {}} />
        <ButtonLink
          name="Strategy"
          onPress={() => navegation.navigate("Strategy")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontFamily: fontFamily.textBold,
  },
  containerPatterns: {
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
  },
});
