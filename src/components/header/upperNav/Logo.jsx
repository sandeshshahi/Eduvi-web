/* eslint-disable react/prop-types */

import EduviLogo from "../../../assets/logo/EduviLogo.svg";

const Logo = ({ height, width, style }) => {
  return (
    <div
      className="header__logo"
      aria-labelledby="logo"
      aria-describedby="Eduvi logo"
    >
      <img height={height} width={width} src={EduviLogo} alt="Eduvi Logo" />
      <span className="upperNav__logo-text" style={style}>
        Eduvi
      </span>
    </div>
  );
};
export default Logo;
