import "/src/components/ConfirmationPage.css";
import orderIcon from "/assets/images/icon-order-confirmed.svg";
import creme from "/assets/images/image-creme-brulee-thumbnail.jpg";
interface FoodItem {
  cathegory: string;
  name: string;
  price: number;
  foodCount: number;
  count: number;
}

interface ConfirmationPageProps {
  selectedFoods: FoodItem[];
  totalFood: number;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({
  selectedFoods,
  totalFood,
}) => {
  totalFood = totalFood + selectedFoods.length;
  return (
    <div className="wrapper">
      <main className="confirmation_page">
        <header className="header">
          <img src={orderIcon} alt="order-icon" className="order-icon" />
          <h1 className="main_title">Order Confirmed</h1>
          <p className="main_subtitle">We hope you enjoy your food</p>
        </header>
        <section className="confirmed_selected_food">
          {/* {selectedFoods.map((food, index) => ( */}
          <div className="confirmed_food" key={0}>
            <div className="confirm-food-left">
              <img src={creme} alt="" className="selected_image" />
              <div className="confirm-food-bottom">
                <p>{"Cllaic"}</p>
                <div className="confirmed-food-price-section">
                  <span className="selected-food-number">{2}x</span>
                  <span className="selected-food-price">@4.40</span>
                </div>
              </div>
            </div>
            <span className="selected-food-total-price">$100.0</span>
          </div>
          {/* ))} */}
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
        <button aria-label="Start New Order" className="restart-order-button">
          Start New Order
        </button>
      </main>
    </div>
  );
};
