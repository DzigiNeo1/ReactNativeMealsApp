import { View, FlatList, Pressable, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import MealsOverviewScreen from "./MealsOverviewScreen";

function CategoryScreen({ navigation }) {
  function renderItem(itemData) {
    function onPressHandler() {
      navigation.navigate("MealsOverviewScreen", {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title
      });
    }
    return (
      <View style={styles.rootContainer}>
        <Pressable>
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={onPressHandler}
          />
        </Pressable>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      ></FlatList>
    </View>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
