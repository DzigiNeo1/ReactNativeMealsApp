import { Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function CustomButton({ onPress, mealIsFavorite }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons
        name={mealIsFavorite ? "star" : "star-outline"}
        size={24}
        color="black"
      />
    </Pressable>
  );
}

export default CustomButton;
