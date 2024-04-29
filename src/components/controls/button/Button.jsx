/* eslint-disable react/prop-types */

const Button = ({ children, text, className, style }) => {
  return (
    <button role="button" className={`button__btn ${className}`} style={style}>
      {children}
      <span className="button__btn-text">{text}</span>
    </button>
  );
};
export default Button;
