import React from "react";
import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals <= 0) {
    return (
      <View style={styles.container}>
        <Text>There are no favorites!</Text>
      </View>
    );
  } else {
    return <MealsList items={favoriteMeals} />;
  }
};
export default FavoritesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 55,
  },
});
