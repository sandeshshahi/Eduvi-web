import Logo from "../header/upperNav/Logo";
import image from "../../assets/images/loginLeftImage.png";
const LoginModelLeft = () => {
  return (
    <div className="loginModelLeft">
      <Logo
        height={20}
        width={20}
        style={{ fontSize: "1.25rem", lineHeight: "1.25rem" }}
      />

      <h1 className="loginModelLeft-heading">
        Welcome to <br /> Eduvi Online <br /> Learning Platform
      </h1>

      <img className="loginModelLeft-image" src={image} alt="left image" />

      <div className="loginModelLeft-slider">
        <button role="button" className="loginModelLeft-slider-end"></button>
        <button role="button" className="loginModelLeft-slider-mid"></button>
        <button role="button" className="loginModelLeft-slider-end"></button>
      </div>
    </div>
  );
};
export default LoginModelLeft;
