import { View, StyleSheet, Text } from "react-native";

function MealDetails({affordability,
    complexity,
    duration,}) {
  return (
    <View style={styles.details}>
      <Text style={styles.items}> {duration}m </Text>
      <Text style={styles.items}>{affordability.toUpperCase()}</Text>
      <Text style={styles.items}>{complexity.toUpperCase()} </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  items: {
    fontSize: 17,
    paddingHorizontal: 5,
  },
});
