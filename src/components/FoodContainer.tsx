import { useState } from "react";
import data from "../data/data.json";
import foodItems from "../data/foodItem";
import { EmptyPage } from "./EmptyPage";
import Food from "./Food";
import { SelectedFoodPage } from "./SelectedFoodPage";

const FoodContainer = () => {
  const [selectedFood, setSelectedFood] = useState([
    {
      cathegory: "Waffle",
      name: "Waffle with Berries",
      price: 6.5,
      foodCount: 0,
      // foodSum: 0,
    },
    {
      cathegory: "Waffle",
      name: "Waffle with Berries",
      price: 6.5,
      foodCount: 0,
      // foodSum: 0,
    },
    {
      cathegory: "Crème Brûlée",
      name: "Vanilla Bean Crème Brûlée",
      price: 7.0,
      foodCount: 0,
      // foodSum: 0,
    },
    {
      cathegory: "Macaron",
      name: "Macaron Mix of Five",
      price: 8.0,
      foodCount: 0,
      // foodSum: 0,
    },
    {
      cathegory: "Tiramisu",
      name: "Classic Tiramisu",
      price: 5.5,
      foodCount: 0,
      // foodSum: 0,
    },
    {
      cathegory: "Baklava",
      name: "Pistachio Baklava",
      price: 4.0,
      foodCount: 0,
      // foodSum: 0,
    },
    {
      cathegory: "Pie",
      name: "Lemon Meringue Pie",
      price: 5.0,
      foodCount: 0,
      // foodSum: 0,
    },
    {
      cathegory: "Cake",
      name: "Red Velvet Cake",
      price: 4.5,
      foodCount: 0,
      // foodSum: 0,
    },
    {
      cathegory: "Brownie",
      name: "Salted Caramel Brownie",
      price: 5.5,
      foodCount: 0,
      // foodSum: 0,
    },
    {
      cathegory: "Panna Cotta",
      name: "Vanilla Panna Cotta",
      price: 6.5,
      foodCount: 0,
      // foodSum: 0,
    },
  ]);

  // Function to handleSelectFood
  const handleSelectedFood = (
    name: string,
    price: number,
    foodCount: number,
    cathegory: string
  ) => {
    setSelectedFood((prev) =>
      prev.map((food) =>
        food.name === name
          ? {
              ...food,
              foodCount: foodCount,
              name: name,
              price: price,
              cathegory: cathegory,
            }
          : food
      )
    );
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
        />
      ))}
      <SelectedFoodPage selectedFoods={selectedFood} />
      <EmptyPage />
    </section>
  );
};

export default FoodContainer;
