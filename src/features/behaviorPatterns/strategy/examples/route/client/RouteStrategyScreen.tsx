import { useState } from "react";
import { StyleSheet } from "react-native";

import { Paragraph, ScreenLayout, Title } from "@/common/components";
import { NavigatorContext } from "../navigatorContext";
import DataBookStrategy from "../data/dataBookStrategy";
import { PointRoute } from "./components";
import { Input } from "@/common/components/inputs";
import { Picker } from "@/common/components/pickers";
import { RoadStrategy } from "../roadStrategy";
import { WalkingStrategy } from "../walkingStrategy";
import { PublicTransportStrategy } from "../publicTransportStrategy";

const items = [
  { label: "En automóvil", value: "road" },
  { label: "A pie", value: "walking" },
  { label: "Transporte público", value: "publicTransport" },
];

const RouteStrategyScreen = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [textOrigen, setTextOrigen] = useState("");
  const [textDestination, setTextDestination] = useState("");
  const [descriptionRoute, setDescriptionRoute] = useState("");

  const navigator = new NavigatorContext();
  const data = new DataBookStrategy();

  const onChangeTransport = () => {
    const route = navigator.buildRoute(textOrigen, textDestination);
    setDescriptionRoute(route);
  };

  const onSelectedValue = (itemValue: string) => {
    setSelectedValue(itemValue);

    switch (itemValue) {
      case "road":
        navigator.setRouteStrategy(new RoadStrategy());
        onChangeTransport();
        break;
      case "walking":
        navigator.setRouteStrategy(new WalkingStrategy());
        onChangeTransport();
        break;
      case "publicTransport":
        navigator.setRouteStrategy(new PublicTransportStrategy());
        onChangeTransport();
        break;
      default:
        break;
    }
  };

  const onTextOrigen = (text: string) => {
    setTextOrigen(text);
    onSelectedValue(selectedValue);
  };

  const onTextDestination = (text: string) => {
    setTextDestination(text);
    onSelectedValue(selectedValue);
  };

  return (
    <ScreenLayout>
      {/* <Title name="Descripción" />
      <Paragraph name={data.descripcion} /> */}
      <Title name="Ejemplo:" />
      <Picker
        title="Medio de transporte:"
        items={items}
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
    </ScreenLayout>
  );
};

export default RouteStrategyScreen;

const styles = StyleSheet.create({});
