import React, { useState } from "react";
import { borderRadius, colors, fontFamily, fontSize } from "@/common/styles";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import { Divider } from "../divider";

interface Props {
  title?: string;
  items: { label: string; value: string }[];
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
}

const Picker = ({ title, items, selectedValue, onValueChange }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectItem = (itemValue: string) => {
    onValueChange(itemValue);
    setModalVisible(false);
  };

  const selectedItem = items.find((item) => item.value === selectedValue);

  return (
    <View style={styles.container}>
      {title && <Text style={styles.label}>{title}</Text>}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.input}
      >
        <Text style={styles.inputText}>
          {selectedItem ? selectedItem.label : "Seleccionar"}
        </Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.titleModal}>{title}</Text>
            <Divider style={{ marginBottom: 8 }} />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectItem(item.value)}
                  style={styles.modalItem}
                >
                  <Text style={styles.modalItemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: fontSize.xl,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: colors.trueGray300,
    borderWidth: 1,
    borderRadius: borderRadius.sm,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  inputText: {
    fontSize: fontSize.lg,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: borderRadius.sm,
    padding: 16,
  },
  titleModal: {
    fontFamily: fontFamily.textRegular,
    color: colors.textDark700,
    fontSize: fontSize.xl,
    marginBottom: 8,
  },
  modalItem: {
    paddingVertical: 12,
  },
  modalItemText: {
    fontSize: fontSize.lg,
  },
});

export default Picker;
