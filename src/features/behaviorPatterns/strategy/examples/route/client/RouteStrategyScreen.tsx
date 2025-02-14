import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import { Paragraph, ScreenLayout } from "@/common/components";
import { NavigatorContext } from "../navigatorContext";
import { PointRoute } from "./components";
import { Input } from "@/common/components/inputs";
import { Picker } from "@/common/components/pickers";
import { RoadStrategy } from "../roadStrategy";
import { WalkingStrategy } from "../walkingStrategy";
import { PublicTransportStrategy } from "../publicTransportStrategy";
import DataRouteStrategy from "../data/dataRouteStrategy";
import { TitleAccordion } from "@/common/components/accordion";
import { CodeSyntax } from "@/common/components/codeSyntax";
import { CODE_ROUTE_STRATEGY } from "@/data/code";

const RouteStrategyScreen = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [textOrigen, setTextOrigen] = useState("");
  const [textDestination, setTextDestination] = useState("");
  const [descriptionRoute, setDescriptionRoute] = useState("");

  const navigator = new NavigatorContext();
  const data = new DataRouteStrategy();

  const onChangeTransport = () => {
    const route = navigator.buildRoute(textOrigen, textDestination);
    setDescriptionRoute(route);
  };

  const onSelectedValue = (itemValue: string) => {
    setSelectedValue(itemValue);

    switch (itemValue) {
      case "road":
        navigator.setRouteStrategy(new RoadStrategy());
        break;
      case "walking":
        navigator.setRouteStrategy(new WalkingStrategy());
        break;
      case "publicTransport":
        navigator.setRouteStrategy(new PublicTransportStrategy());
        break;
      default:
        break;
    }
    onChangeTransport();
  };

  const onTextOrigen = (text: string) => {
    setTextOrigen(text);
  };

  const onTextDestination = (text: string) => {
    setTextDestination(text);
  };

  useEffect(() => {
    onSelectedValue(selectedValue);
  }, [textOrigen, textDestination]);

  return (
    <ScreenLayout activateScrollView={true}>
      <TitleAccordion name="Descripción">
        <Paragraph name={data.descripcion} />
      </TitleAccordion>

      <TitleAccordion name="Ejemplo:">
        <Picker
          title="Medio de transporte:"
          items={data.items}
          selectedValue={selectedValue}
          onValueChange={onSelectedValue}
        />

        <Input title="Origen:" onChangeText={onTextOrigen} value={textOrigen} />
        <Input
          title="Destino:"
          onChangeText={onTextDestination}
          value={textDestination}
        />

        <PointRoute
          nameOrigen={textOrigen}
          nameDestination={textDestination}
          descriptionRoute={descriptionRoute}
        />
      </TitleAccordion>

      <TitleAccordion name="Código">
        <CodeSyntax code={CODE_ROUTE_STRATEGY} />
      </TitleAccordion>
    </ScreenLayout>
  );
};

export default RouteStrategyScreen;

const styles = StyleSheet.create({});
