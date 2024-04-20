import { StyleSheet } from "react-native";

import Singleton from "../singleton";
import { ScreenLayout, Title } from "@/common/components";

const SingletonScreen = () => {
  const singleton = Singleton.getInstance();

  return (
    <ScreenLayout>
      <Title name="Singleton" />
    </ScreenLayout>
  );
};

export default SingletonScreen;

const styles = StyleSheet.create({});
