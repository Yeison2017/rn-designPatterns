import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { InfoCard, Paragraph, ScreenLayout } from "@/common/components";
import { TitleAccordion } from "@/common/components/accordion";
import { DESCRIPTION_DESIGN_PATTERNS } from "@/data";
import { IMAGE_EXAMPLE, IMAGE_PROPORTION } from "@/common/constants";
import { StackAppProps } from "@/navigation/interfaces";

const SingletonScreen = () => {
  const navegation = useNavigation<StackAppProps>();

  return (
    <ScreenLayout>
      <TitleAccordion name="Descripción">
        <Paragraph name={DESCRIPTION_DESIGN_PATTERNS.singleton} />
      </TitleAccordion>

      <TitleAccordion name="Ejemplos:">
        <InfoCard
          title="Servicio de Registro de Usuario"
          image={IMAGE_EXAMPLE.userRegistrationServiceSingleton}
          onPress={() =>
            navegation.navigate("UserRegistrationServiceSingleton")
          }
          imageProportion={IMAGE_PROPORTION}
        />
      </TitleAccordion>
    </ScreenLayout>
  );
};

export default SingletonScreen;

const styles = StyleSheet.create({});
