import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import List from "../components/MealDetail/List";
import Subititle from "../components/MealDetail/Subititle";
import { useLayoutEffect } from "react";
import CustomButton from "../components/CustomButton";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  function onChangeFavoriteStatus(id) {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <CustomButton
            mealIsFavorite={mealIsFavorite}
            onPress={onChangeFavoriteStatus}
          />
        );
      },
    });
  }, [navigation, <CustomButton />]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.titleText}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Subititle>Ingredients</Subititle>
          <List data={selectedMeal.ingredients} />
          <Subititle>Steps</Subititle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    overflow: "hidden",
    borderRadius: 80,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 4,
  },
  container: {
    maxWidth: "80%",
  },
  outerContainer: {
    flex: 1,
    alignItems: "center",
  },
});
