import "/src/components/ConfirmationPage.css";
import orderIcon from "/assets/images/icon-order-confirmed.svg";
interface FoodItem {
  cathegory: string;
  name: string;
  price: number;
  foodCount: number;
  count: number;
  thumbnail: string;
}

interface ConfirmationPageProps {
  selectedFoods: FoodItem[];
  handleRestartOrder: () => void;
  totalFood: number;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  selectedFoods,
  handleRestartOrder,
  totalFood,
}) => {
  totalFood = totalFood + selectedFoods.length;
  return (
    <>
      <div className="wrapper"></div>
      <main className="confirmation_page">
        <header className="header">
          <img src={orderIcon} alt="order-icon" className="order-icon" />
          <h1 className="main_title">Order Confirmed</h1>
          <p className="main_subtitle">We hope you enjoy your food</p>
        </header>
        <section className="confirmed_selected_food">
          {selectedFoods.map((food, index) => (
            <div className="confirmed_food" key={index}>
              <div className="confirm-food-left">
                <img src={food.thumbnail} alt="" className="selected_image" />
                <div className="confirm-food-bottom">
                  <p>{food.name}</p>
                  <div className="confirmed-food-price-section">
                    <span className="selected-food-number">{food.count}x</span>
                    <span className="selected-food-price">
                      @{food.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <span className="selected-food-total-price">
                {" "}
                ${(food.price * food.count).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="confirmation-total-price">
            <p>Order Total</p>
            <span>
              $
              {selectedFoods
                .reduce((total, food) => total + food.price * food.count, 0)
                .toFixed(2)}
            </span>
          </div>
        </section>
        <button
          aria-label="Start New Order"
          className="restart-order-button"
          onClick={handleRestartOrder}
        >
          Start New Order
        </button>
      </main>
    </>
  );
};
