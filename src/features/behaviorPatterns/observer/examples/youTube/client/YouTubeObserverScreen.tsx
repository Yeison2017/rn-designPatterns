import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import { Input, Paragraph, ScreenLayout } from "@/common/components";
import YouTubeChannel from "../youTubeChannel";
import { TitleAccordion } from "@/common/components/accordion";
import DataYouTubeObserver from "../data/dataYouTubeObserver";
import { fontSize } from "@/common/styles";
import { Channel } from "../components";
import { Divider } from "@/common/components/divider";

const YouTubeObserverScreen = () => {
  const [channels, setChannels] = useState<YouTubeChannel[]>([]);
  const [channelName, setChannelName] = useState("");

  const data = new DataYouTubeObserver();

  const addChannel = () => {
    if (channelName) {
      const newChannel = new YouTubeChannel(channelName);
      setChannels([...channels, newChannel]);
      setChannelName("");
    }
  };

  return (
    <ScreenLayout>
      <FlatList
        data={[1]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TitleAccordion name="Descripción">
              <Paragraph name={data.descripcion} />
            </TitleAccordion>

            <TitleAccordion name="Ejemplo:">
              <Text style={styles.header}>Agregar canal</Text>
              <View style={styles.inputContainer}>
                <Input
                  placeholder="Nombre del canal"
                  onChangeText={setChannelName}
                  value={channelName}
                />
                <Button title="Agregar" onPress={addChannel} />
              </View>

              <Text style={styles.header}>Canales</Text>
              <FlatList
                data={channels}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item: channel }) => (
                  <View style={styles.channels}>
                    <Channel
                      name={channel.name}
                      onSubscribeUser={(user) => channel.subscribe(user)}
                      onUnsubscribeUser={(user) => channel.unsubscribe(user)}
                      onUploadVideo={(videoTitle) =>
                        channel.uploadVideo(videoTitle)
                      }
                    />
                    <Divider />
                  </View>
                )}
              />
            </TitleAccordion>
          </View>
        )}
      />
    </ScreenLayout>
  );
};

export default YouTubeObserverScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  header: {
    fontSize: fontSize.xl,
    marginBottom: 8,
  },
  channels: {
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 10,
  },
});
