import { StyleSheet } from "react-native";

import { Paragraph, ScreenLayout, Title } from "@/common/components";
import CreationalPattersControlle from "../controllers/creationalPattersControlle";
import { InfoCard } from "@/common/components/cards";

const CreationalPatternsScreen = () => {
  const controller = new CreationalPattersControlle();

  return (
    <ScreenLayout>
      <Title name={controller.title} />
      <Paragraph name={controller.description} />

      {controller.patterns.map((pattern, index) => (
        <InfoCard
          key={index}
          title={pattern.name}
          description={pattern.description}
          image={pattern.image}
        />
      ))}
    </ScreenLayout>
  );
};

export default CreationalPatternsScreen;

const styles = StyleSheet.create({});
