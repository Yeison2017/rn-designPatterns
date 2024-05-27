import { StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import { Paragraph, ScreenLayout, Title } from "@/common/components";
import { InfoCard } from "@/common/components/cards";
import { RootStackAppParams } from "@/navigation/interfaces";

type typeRouteProp = RouteProp<RootStackAppParams, "TypeDesignPattern">;

const TypeDesignPatternScreen = () => {
  const { params } = useRoute<typeRouteProp>();

  const { title, description, getDesignPatterns } = params;

  return (
    <ScreenLayout>
      <Title name={title} />
      <Paragraph name={description} />

      {getDesignPatterns().map((designPattern, index) => (
        <InfoCard
          key={index}
          title={designPattern.name}
          description={designPattern.description}
          image={designPattern.image}
        />
      ))}
    </ScreenLayout>
  );
};

export default TypeDesignPatternScreen;

const styles = StyleSheet.create({});
