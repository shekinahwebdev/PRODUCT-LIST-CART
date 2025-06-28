import removeIcon from "/assets/images/icon-remove-item.svg";
import carbonIcon from "/assets/images/icon-carbon-neutral.svg";

interface FoodItem {
  cathegory: string;
  name: string;
  price: number;
  foodCount: number;
  count: number;
}

interface SelectedFoodPageProps {
  selectedFoods: FoodItem[];
}

export const SelectedFoodPage: React.FC<SelectedFoodPageProps> = ({
  selectedFoods,
}) => {
  const totalFood = selectedFoods.length;
  return (
    <main className="selected-food-page">
      <h1 className="selected-food-page__title">Your Cart({totalFood})</h1>
      {selectedFoods.map((food, index) => (
        <div className="food-selected" key={index}>
          <div className="selected-food-left">
            <p>{food.name}</p>
            <div className="food-price-section">
              <span className="selected-food-number">{food.count}x</span>
              <span className="selected-food-price">
                @{food.price.toFixed(2)}
              </span>
              <span className="selected-food-total-price">
                ${(food.price * food.foodCount).toFixed(2)}
              </span>
            </div>
          </div>
          <button className="selected-food-remove">
            <img src={removeIcon} alt="Remove item" />
          </button>
        </div>
      ))}
      <div className="total-price">
        <p>Order Total</p>
        <span>$46.50</span>
      </div>

      <div className="food-information">
        <img src={carbonIcon} alt="Carbon Neutral" className="carbon-icon" />
        <p className="carbon-neutral-text">
          This is a <strong>carbon-neutal</strong> delivery
        </p>
      </div>

      <button aria-label="Confirm Order" className="confirm-order-button">
        Confirm Order
      </button>
    </main>
  );
};
