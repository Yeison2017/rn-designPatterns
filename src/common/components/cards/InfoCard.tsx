import { borderRadius } from "@/common/styles";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { Icon } from "../icons";

export interface Props {
  title: string;
  description?: string;
  image: ImageSourcePropType | string;
  imageProportion?: number;
  onPress?: () => void;
}

const InfoCard = ({
  title,
  description,
  image,
  imageProportion = 0.4,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles().card}>
      <View style={{ flex: 1 }}>
        <View style={styles().header}>
          <View style={styles().iconContainer}>
            <Image
              source={typeof image === "string" ? { uri: image } : image}
              style={styles(imageProportion).image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles().title}>{title}</Text>
        </View>
        {description && <Text style={styles().description}>{description}</Text>}
      </View>
      <Icon name="arrow-right" />
    </TouchableOpacity>
  );
};

const styles = (imageProportion?: number) =>
  StyleSheet.create({
    card: {
      padding: 16,
      margin: 8,
      backgroundColor: "#fff",
      borderRadius: borderRadius.sm,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 4,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconContainer: {
      marginRight: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    description: {
      fontSize: 14,
      color: "#666",
    },
    image: {
      width: imageProportion ? 280 * imageProportion : 280,
      height: imageProportion ? 200 * imageProportion : 200,
    },
  });

export default InfoCard;
