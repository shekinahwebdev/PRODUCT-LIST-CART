import React from "react";
import useDevicetype from "../hooks/useDeviceType";
import addToCart from "/assets/images/icon-add-to-cart.svg";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </button>

          <p>4</p>

          <button className="food-item__button increment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="currentColor"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
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
