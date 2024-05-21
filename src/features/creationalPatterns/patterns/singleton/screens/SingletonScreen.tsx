import { StyleSheet } from "react-native";

import { Paragraph, ScreenLayout, Title } from "@/common/components";
import RandomSingleton from "../examples/randomSingleton";
import DataBaseSingleton from "../examples/dataBaseSingleton";

const SingletonScreen = () => {
  const randomSingleton = RandomSingleton.getInstance();
  const dataBaseSingleton = DataBaseSingleton.getInstance();

  return (
    <ScreenLayout>
      <Title name="Ejemplos:" />
      <Title name="1. Número ramdon" />
      <Paragraph name={randomSingleton.random} />
      <Title name="2. Base de datos" />
      <Paragraph name={dataBaseSingleton.query("SELECT * FROM users")} />
    </ScreenLayout>
  );
};

export default SingletonScreen;

const styles = StyleSheet.create({});
