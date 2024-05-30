import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { HeaderTitle, Title } from "@/common/components";
import { StackAppProps } from "@/navigation/interfaces";
import { fontFamily } from "@/common/styles";
import { InfoCard } from "@/common/components/cards";
import DesignPatternsController from "../controllers/designPatternsController";

const HomeScreen = () => {
  const controller = new DesignPatternsController();

  const navegation = useNavigation<StackAppProps>();

  const onNavigationTypeDesignPattern = (typDesignPatterns: string) => {
    navegation.navigate(
      "TypeDesignPattern",
      controller.getTypeDesignPattern(typDesignPatterns)
    );
  };

  const onNavigationDesignPatterns = (typDesignPatterns: string) => {
    navegation.navigate(
      controller.getNavigationNameDesignPattern(typDesignPatterns)
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Title name="Patrones de diseño" style={styles.title} />
      {controller
        .getDesignPatterns()
        .map(({ typDesignPatterns, designPatterns }, index) => (
          <View key={index} style={styles.containerPatterns}>
            <HeaderTitle
              name={typDesignPatterns}
              onPress={() => onNavigationTypeDesignPattern(typDesignPatterns)}
            />
            {designPatterns.map((designPattern, index) => (
              <InfoCard
                key={index}
                title={designPattern.name}
                image={designPattern.image}
                onPress={() => onNavigationDesignPatterns(designPattern.name)}
                imageProportion={0.2}
              />
            ))}
          </View>
        ))}
    </ScrollView>
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
