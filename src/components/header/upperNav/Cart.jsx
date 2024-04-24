import shoppingBag from "../../../assets/icons/shoppingBag.svg";

const Cart = () => {
  return (
    <div className="cart">
      <span>Cart (0)</span>
      <img height={30} width={30} src={shoppingBag} alt="shopping bag icon" />
    </div>
  );
};
export default Cart;
