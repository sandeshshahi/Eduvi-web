import EduviLogo from "../../../assets/logo/EduviLogo.svg";

const Logo = () => {
  return (
    <div className="header__logo">
      <img height={30} width={25} src={EduviLogo} alt="Eduvi Logo" />
      <span className="upperNav__logo-text">Eduvi</span>
    </div>
  );
};
export default Logo;
