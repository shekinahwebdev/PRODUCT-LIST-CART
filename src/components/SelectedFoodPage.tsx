import removeIcon from "/assets/images/icon-remove-item.svg";
import carbonIcon from "/assets/images/icon-carbon-neutral.svg";
export const SelectedFoodPage = () => {
  return (
    <main className="selected-food-page">
      <h1 className="selected-food-page__title">Your Cart(7)</h1>
      <div className="food-selected">
        <p>Classic Tiramisu</p>
        <div>
          <span className="selected-food-number">1x</span>
          <span className="selected-food-price">$5.50</span>
          <span className="selected-food-total-price">$5.50</span>
        </div>
        <button className="selected-food-remove">
          <img src={removeIcon} alt="Remove item" />
        </button>
      </div>
      <div className="food-selected">
        <p>Classic Tiramisu</p>
        <div>
          <span className="selected-food-number">1x</span>
          <span className="selected-food-price">$5.50</span>
          <span className="selected-food-total-price">$5.50</span>
        </div>
        <button className="selected-food-remove">
          <img src={removeIcon} alt="Remove item" />
        </button>
      </div>
      <div className="food-selected">
        <p>Classic Tiramisu</p>
        <div>
          <span className="selected-food-number">1x</span>
          <span className="selected-food-price">$5.50</span>
          <span className="selected-food-total-price">$5.50</span>
        </div>
        <button className="selected-food-remove">
          <img src={removeIcon} alt="Remove item" />
        </button>
      </div>

      <div className="total-price">
        <p>Order Total</p>
        <span>$46.50</span>
      </div>

      <div>
        <img src={carbonIcon} alt="Carbon Neutral" className="carbon-icon" />
        <p className="carbon-neutral-text">This is a carbon-neutal delivery</p>
      </div>

      <button aria-label="Confirm Order" className="confirm-order-button">
        Confirm Order
      </button>
    </main>
  );
};
