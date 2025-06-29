import { useState } from "react";
import data from "../data/data.json";
import { EmptyPage } from "./EmptyPage";
import Food from "./Food";
import { SelectedFoodPage } from "./SelectedFoodPage";

const FoodContainer = () => {
  const [selectedFood, setSelectedFoods] = useState<FoodItem[]>([]);
  const [totalFood, setTotalFood] = useState(0);

  const updatedTotalFood = (change: number) => {
    setTotalFood((prevTotal) => prevTotal + change);
  };

  const handleRemoveItem = (indexToRemove: number) => {
    setSelectedFoods(
      selectedFood.filter((_, index) => index !== indexToRemove)
    );
  };

  interface FoodItem {
    name: string;
    price: number;
    count: number;
    cathegory: string;
    foodCount: number;
  }

  // Function to handleSelectFood
  const handleSelectedFood = (
    name: string,
    price: number,
    foodCount: number,
    cathegory: string
  ) => {
    setSelectedFoods((prevSelectedFoods) => {
      const index = prevSelectedFoods.findIndex((item) => item.name === name);

      if (index !== -1 && foodCount > 0) {
        const updatedFoods = [...prevSelectedFoods];
        updatedFoods[index].count = foodCount;
        console.log(updatedFoods);

        return updatedFoods;
      }

      if (index !== -1 && foodCount === 0) {
        return prevSelectedFoods.filter((item) => item.name !== name);
      }

      if (index === -1 && foodCount > 0) {
        return [
          ...prevSelectedFoods,
          { name, count: foodCount, price, cathegory, foodCount },
        ];
      }
      return prevSelectedFoods;
    });
  };
  return (
    <section className="food_section">
      <h1 className="main_heading">Desserts</h1>
      {data.map((food, index) => (
        <Food
          key={index}
          name={food.name}
          cathegory={food.category}
          price={food.price}
          thumbnail={food.image.thumbnail}
          mobileImage={food.image.mobile}
          tabletImage={food.image.tablet}
          desktopImage={food.image.desktop}
          onSelect={handleSelectedFood}
          updatedTotalFood={updatedTotalFood}
        />
      ))}
      {selectedFood.length === 0 ? (
        <EmptyPage />
      ) : (
        <SelectedFoodPage
          selectedFoods={selectedFood}
          totalFood={totalFood}
          handleRemoveItem={handleRemoveItem}
        />
      )}
    </section>
  );
};

export default FoodContainer;
