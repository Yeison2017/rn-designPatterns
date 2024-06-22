import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { Input } from "@/common/components";
import User from "../user";
import { colors } from "@/common/styles";

interface Props {
  name: string;
  onSubscribeUser: (user: User) => void;
  onUnsubscribeUser: (user: User) => void;
  onUploadVideo: (videoTitle: string) => void;
}

const Channel = ({
  name,
  onSubscribeUser,
  onUnsubscribeUser,
  onUploadVideo,
}: Props) => {
  const [username, setUsername] = useState("");
  const [subscribedUsers, setSubscribedUsers] = useState<User[]>([]);

  const [videoTitle, setVideoTitle] = useState("");

  const subscribeUser = () => {
    if (username) {
      const user = new User(username);
      onSubscribeUser(user);
      setSubscribedUsers([...subscribedUsers, user]);
      setUsername("");
    }
  };

  const unsubscribeUser = (subscriber: User) => {
    setSubscribedUsers(subscribedUsers.filter((user) => user !== subscriber));
    onUnsubscribeUser(subscriber);
  };

  const uploadVideo = () => {
    if (videoTitle) {
      onUploadVideo(videoTitle);
      setVideoTitle("");
    }
  };

  return (
    <View>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Nombre"
          onChangeText={setUsername}
          value={username}
        />
        <Button title="Agregar suscriptor" onPress={subscribeUser} />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Nombre del video"
          onChangeText={setVideoTitle}
          value={videoTitle}
        />
        <Button title="Subir video" onPress={uploadVideo} />
      </View>
      <View style={styles.containerSubscribers}>
        <Text style={styles.text}>Suscriptores:</Text>
        {subscribedUsers.map((subscriber, index) => (
          <View key={index}>
            <View style={styles.containerSubscriber}>
              <Text>{subscriber.name}</Text>
              <Button
                title="Desuscribir"
                onPress={() => unsubscribeUser(subscriber)}
              />
            </View>
            <View style={styles.containerNotifications}>
              {subscriber.getNotifications().map((notification, index) => (
                <Text key={index}>{notification}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Channel;

const styles = StyleSheet.create({
  text: {
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerSubscribers: {
    marginBottom: 8,
  },
  containerSubscriber: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.coolGray100,
    borderRadius: 4,
  },
  containerNotifications: {
    marginLeft: 8,
  },
});
