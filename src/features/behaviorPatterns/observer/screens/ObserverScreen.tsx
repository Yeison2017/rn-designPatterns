import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { InfoCard, Paragraph, ScreenLayout } from "@/common/components";
import { TitleAccordion } from "@/common/components/accordion";
import { DESCRIPTION_DESIGN_PATTERNS } from "@/data";
import { IMAGE_EXAMPLE, IMAGE_PROPORTION } from "@/common/constants";
import { StackAppProps } from "@/navigation/interfaces";

const ObserverScreen = () => {
  const navegation = useNavigation<StackAppProps>();

  return (
    <ScreenLayout>
      <TitleAccordion name="Descripción">
        <Paragraph name={DESCRIPTION_DESIGN_PATTERNS.observer} />
      </TitleAccordion>
      <TitleAccordion name="Ejemplos:">
        <InfoCard
          title="YouTube"
          image={IMAGE_EXAMPLE.youTubeObserver}
          onPress={() => navegation.navigate("YouTubeObserver")}
          imageProportion={IMAGE_PROPORTION}
        />
      </TitleAccordion>
    </ScreenLayout>
  );
};

export default ObserverScreen;

const styles = StyleSheet.create({});
