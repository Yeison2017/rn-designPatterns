import { Title } from "@/common/components";
import { borderRadius, colors } from "@/common/styles";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  nameOrigen: string;
  nameDestination: string;
  descriptionRoute: string;
}

const PointRoute = ({
  nameOrigen,
  nameDestination,
  descriptionRoute,
}: Props) => {
  return (
    <View>
      <View style={styles.containerRoute}>
        <View>
          <Text>Origen</Text>
          <Title name={nameOrigen} />
        </View>
        <View>
          <Text>Destino</Text>
          <Title name={nameDestination} />
        </View>
      </View>

      {nameOrigen.trim() && nameDestination.trim() ? (
        <View style={styles.containerPoint}>
          <View style={styles.point} />
          <View style={styles.roadDrawing} />
          <View style={styles.point} />
        </View>
      ) : (
        <View style={styles.containerTextMessage}>
          <Text style={styles.textMessage}>
            Escriba la ciudad de origen y de destino
          </Text>
        </View>
      )}

      {nameOrigen.trim() && nameDestination.trim() && (
        <Text style={styles.descriptionRoute}>{descriptionRoute}</Text>
      )}
    </View>
  );
};

export default PointRoute;

const styles = StyleSheet.create({
  containerRoute: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerPoint: {
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  point: {
    width: 12,
    height: 12,
    backgroundColor: colors.darkBlue700,
    borderRadius: 12 / 2,
  },
  roadDrawing: {
    flex: 1,
    width: 1,
    height: 1,
    backgroundColor: colors.blueGray600,
  },
  containerTextMessage: {
    borderRadius: borderRadius.xs,
    backgroundColor: colors.orange100,
  },
  textMessage: {
    padding: 4,
    color: colors.orange700,
  },
  descriptionRoute: {
    textAlign: "center",
  },
});
