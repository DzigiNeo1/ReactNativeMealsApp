import { View, Text, StyleSheet } from "react-native";
function Subititle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subititle;
const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    marginVertical: 4,
    padding: 6,
    marginHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
});
