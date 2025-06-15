import data from "../data/data.json";
import Food from "./Food";

const FoodContainer = () => {
  return (
    <section className="food_section">
      {data.map((food, index) => (
        <Food
          key={index}
          name={food.name}
          cathegory={food.category}
          price={food.price}
          mobileImage={food.image.mobile}
          tabletImage={food.image.tablet}
          desktopImage={food.image.desktop}
        />
      ))}
    </section>
  );
};

export default FoodContainer;
