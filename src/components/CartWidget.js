import "./CartWidget.css";

const CartWidget = () => {
  return (
    <>
      <div className="cart-icon">
        <ion-icon name="cart-outline"></ion-icon>
      </div>
      <div className="quantity">3</div>
    </>
  );
};

export default CartWidget;
