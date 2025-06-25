import emptyCart from "/assets/images/illustration-empty-cart.svg";
export const EmptyPage = () => {
  return (
    <main className="main_cart">
      <p className="current_cart">Your Cart (0)</p>
      <div className="cart_center">
        <img src={emptyCart} alt="Empty Cart" className="empty-cart" />
        <p>Your added items will appear here</p>
      </div>
    </main>
  );
};
