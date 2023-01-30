import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) {
  const navigation = useNavigation();
  function onPressHandlerScreen(title) {
    navigation.navigate("MealDetailsScreen", {
      mealId: id,
      mealTitle: title,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={onPressHandlerScreen}
      >
        <View>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        {
          <MealDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        }
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
