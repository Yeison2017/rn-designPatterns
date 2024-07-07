import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ImageModal, Paragraph, ScreenLayout } from "@/common/components";
import { StackAppProps } from "@/navigation/interfaces";
import { InfoCard } from "@/common/components/cards";
import { IMAGE_EXAMPLE, IMAGE_STRUCTURE } from "@/common/constants";
import { TitleAccordion } from "@/common/components/accordion";
import { DESCRIPTION_DESIGN_PATTERNS } from "@/data";

const StrategyScreen = () => {
  const navegation = useNavigation<StackAppProps>();

  return (
    <ScreenLayout>
      <TitleAccordion name="Descripción">
        <Paragraph name={DESCRIPTION_DESIGN_PATTERNS.strategy} />
      </TitleAccordion>

      <TitleAccordion name="Estructura">
        <ImageModal source={IMAGE_STRUCTURE.strategy} />
      </TitleAccordion>

      <TitleAccordion name="Ejemplos:">
        <InfoCard
          title="Route"
          image={IMAGE_EXAMPLE.routeStrategy}
          onPress={() => navegation.navigate("RouteStrategy")}
          imageProportion={0.2}
        />
      </TitleAccordion>
    </ScreenLayout>
  );
};

export default StrategyScreen;

const styles = StyleSheet.create({});
