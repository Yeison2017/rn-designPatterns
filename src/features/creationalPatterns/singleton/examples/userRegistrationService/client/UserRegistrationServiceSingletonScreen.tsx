import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import { Input, Paragraph, ScreenLayout, Title } from "@/common/components";
import { TitleAccordion } from "@/common/components/accordion";
import DataUserRegistrationServiceSingleton from "../data/dataUserRegistrationServiceSingleton";
import { UserService, typeUser } from "../userService";
import { useNavigation } from "@react-navigation/native";
import { StackAppProps } from "@/navigation/interfaces";

const ConfigurationServiceSingletonScreen = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [user, setUser] = useState<typeUser>(null);

  const navegation = useNavigation<StackAppProps>();

  const data = new DataUserRegistrationServiceSingleton();
  const userService = UserService.getInstance();

  const onSetUser = () => {
    if (name && lastName) {
      userService.setUser({ id: 1, name, lastName });
      const user = userService.getUser();
      setUser(user);
      setName("");
      setLastName("");
    }
  };

  return (
    <ScreenLayout activateScrollView={true}>
      <TitleAccordion name="Descripción">
        <Paragraph name={data.descripcion} />
      </TitleAccordion>

      <TitleAccordion name="Ejemplo:">
        <Title name="Registrar usuario" isBold={false} />
        <View style={styles.containerInputs}>
          <Input title="Nombre" onChangeText={setName} value={name} />
          <Input title="Apellido" onChangeText={setLastName} value={lastName} />
        </View>

        <Button title="Registrar" onPress={onSetUser} />
        <Button
          disabled={!user}
          title={user ? "Ver perfil" : "No hay usuario registrado"}
          onPress={() => navegation.navigate("ProfileUserRegistration")}
        />
      </TitleAccordion>
    </ScreenLayout>
  );
};

export default ConfigurationServiceSingletonScreen;

const styles = StyleSheet.create({
  containerInputs: {
    gap: 8,
  },
});
