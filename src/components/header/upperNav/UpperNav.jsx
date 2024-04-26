import Account from "./Account";
import Cart from "./Cart";
import Logo from "./Logo";
import Menu from "./Menu";

const UpperNav = () => {
  return (
    <nav className="navBar">
      <Logo />
      <Menu />

      <div className="cart-account">
        <Cart />
        <Account />
      </div>
    </nav>
  );
};
export default UpperNav;
