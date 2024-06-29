import { StyleSheet, Text, View } from "react-native";

import { ScreenLayout, Title } from "@/common/components";
import { UserService } from "../userService";
import { fontSize } from "@/common/styles";

const ProfileUserRegistrationScreen = () => {
  const userService = UserService.getInstance();
  const user = userService.getUser();

  return (
    <ScreenLayout>
      <Title name="Perfil del Usuario" />
      <View style={styles.item}>
        <Text style={styles.text}>Nombre:</Text>
        <Text style={styles.text}>{user?.name}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Apellido:</Text>
        <Text style={styles.text}>{user?.lastName}</Text>
      </View>
    </ScreenLayout>
  );
};

export default ProfileUserRegistrationScreen;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  text: {
    fontSize: fontSize.lg,
  },
});
