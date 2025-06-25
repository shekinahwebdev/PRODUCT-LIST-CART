import data from "../data/data.json";
import { EmptyPage } from "./EmptyPage";
import Food from "./Food";
import { SelectedFoodPage } from "./SelectedFoodPage";

const FoodContainer = () => {
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
        />
      ))}
      <SelectedFoodPage />
      <EmptyPage />
    </section>
  );
};

export default FoodContainer;
