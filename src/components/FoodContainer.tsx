import { useState } from "react";
import data from "../data/data.json";
import { EmptyPage } from "./EmptyPage";
import Food from "./Food";
import { SelectedFoodPage } from "./SelectedFoodPage";
import { ConfirmationPage } from "./ConfirmationPage";

const FoodContainer = () => {
  const [selectedFood, setSelectedFoods] = useState<FoodItem[]>([]);
  const [totalFood, setTotalFood] = useState(0);

  const [isPressed, setIsPressed] = useState(false);

  const updatedTotalFood = (change: number) => {
    setTotalFood((prevTotal) => prevTotal + change);
  };

  const handleRemoveItem = (indexToRemove: number) => {
    setSelectedFoods(
      selectedFood.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleConfirmation = () => {
    setIsPressed((prev) => !prev);
  };

  const handleRestartOrder = () => {
    setSelectedFoods([]);
    setTotalFood(0);
    window.location.reload();
  };

  interface FoodItem {
    name: string;
    price: number;
    count: number;
    cathegory: string;
    foodCount: number;
    thumbnail: string;
  }

  // Function to handleSelectFood
  const handleSelectedFood = (
    name: string,
    price: number,
    foodCount: number,
    cathegory: string,
    thumbnail: string
  ) => {
    setSelectedFoods((prevSelectedFoods) => {
      const index = prevSelectedFoods.findIndex((item) => item.name === name);

      if (index !== -1 && foodCount > 0) {
        const updatedFoods = [...prevSelectedFoods];
        updatedFoods[index].count = foodCount;
        return updatedFoods;
      }

      if (index !== -1 && foodCount === 0) {
        return prevSelectedFoods.filter((item) => item.name !== name);
      }

      if (index === -1 && foodCount > 0) {
        return [
          ...prevSelectedFoods,
          { name, count: foodCount, price, cathegory, foodCount, thumbnail },
        ];
      }
      return prevSelectedFoods;
    });
  };
  return (
    <section className="food_section">
      <h1 className="main_heading">Desserts</h1>
      <div className="main_food_page">
        {data.map((food, index) => {
          const isSelected = selectedFood.some(
            (item) => item.name === food.name
          );
          return (
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
              isSelected={isSelected}
            />
          );
        })}
      </div>
      {selectedFood.length === 0 ? (
        <EmptyPage />
      ) : (
        <SelectedFoodPage
          selectedFoods={selectedFood}
          totalFood={totalFood}
          handleRemoveItem={handleRemoveItem}
          handleConfirmation={handleConfirmation}
        />
      )}

      {isPressed ? (
        <ConfirmationPage
          selectedFoods={selectedFood}
          totalFood={totalFood}
          handleRestartOrder={handleRestartOrder}
        />
      ) : null}
      {/* <ConfirmationPage selectedFoods={selectedFood} totalFood={totalFood} /> */}
    </section>
  );
};

export default FoodContainer;
