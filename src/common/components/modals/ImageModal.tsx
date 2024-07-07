import { useState } from "react";
import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  Modal,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

interface Props {
  source?: ImageSourcePropType | undefined;
}

const ImageModal = ({ source }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const images = [{ url: "", props: { source } }];

  const renderHeader = () => (
    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
      <View style={styles.header}>
        <Text style={styles.closeText}>Cerrar</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={source} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <ImageViewer
          imageUrls={images}
          onCancel={() => setModalVisible(false)}
          enableSwipeDown={true}
          renderHeader={renderHeader}
        />
      </Modal>
    </View>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
  header: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  closeText: {
    color: "white",
    fontSize: 18,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 5,
  },
});
