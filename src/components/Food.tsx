import React from "react";
import useDevicetype from "../hooks/useDeviceType";
import addToCart from "/assets/images/icon-add-to-cart.svg";
import decrementButton from "/assets/images/icon-decrement-quantity.svg";
import incrementButton from "/assets/images/icon-increment-quantity.svg";
interface FoodProps {
  name: string;
  cathegory: string;
  price: number;
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
}

const Food: React.FC<FoodProps> = ({
  name,
  cathegory,
  price,
  mobileImage,
  tabletImage,
  desktopImage,
}) => {
  let imageSrc = mobileImage;
  const device = useDevicetype();
  if (device === "tablet") {
    imageSrc = tabletImage;
  } else if (device === "desktop") {
    imageSrc = desktopImage;
  }
  return (
    <div className="food-item">
      <img src={imageSrc} alt="" className="food-item__image" />

      <div className="food-item__add-section">
        <button className="add-section btn">
          <img
            src={addToCart}
            alt="Add to Cart"
            className="food-item__add-icon"
          />
          <p>Add to Cart</p>
        </button>
        <div className="quantity-controls">
          <button className="food-item__button decrement">
            <img src={decrementButton} alt="Decrement" />
          </button>

          <p>4</p>

          <button className="food-item__button increment">
            <img src={incrementButton} alt="Increment" />
          </button>
        </div>
      </div>
      <div className="item_class">
        <span className="food-item__category">{cathegory}</span>
        <span className="food-item__name">{name}</span>
        <span className="fodd-item__price">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Food;
