import React, { useState } from "react";
import addToCart from "/assets/images/icon-add-to-cart.svg";
interface FoodProps {
  name: string;
  cathegory: string;
  price: number;
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  thumbnail: string;
  onSelect?: (
    name: string,
    price: number,
    foodCount: number,
    cathegory: string
  ) => void;
}

const Food: React.FC<FoodProps> = ({
  name,
  cathegory,
  price,
  mobileImage,
  tabletImage,
  desktopImage,
  thumbnail,
  onSelect,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [count, setCount] = useState(1);

  const handleAddtoCart = () => {
    setIsAdded(true);
    onSelect?.(name, price, count, cathegory);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    if (count === 1) {
      setIsAdded(false);
    }
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="food-item">
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileImage} />
        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet={tabletImage}
        />
        <source media="(min-width: 1024px)" srcSet={desktopImage} />
        <img
          src={thumbnail}
          alt={name}
          className={`food-item__image ${isAdded ? "highlight" : ""}`}
        />
      </picture>

      <div className={"food-item__add-section"}>
        {!isAdded ? (
          <button className="add-section btn" onClick={handleAddtoCart}>
            <img
              src={addToCart}
              alt="Added to Cart"
              className="food-item__add-icon"
            />
            <p>Added</p>
          </button>
        ) : (
          <div className="quantity-controls">
            <button
              className="food-item__button decrement"
              onClick={handleDecrement}
            >
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

            <p>{count}</p>

            <button
              className="food-item__button increment"
              onClick={handleIncrement}
            >
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
        )}
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
