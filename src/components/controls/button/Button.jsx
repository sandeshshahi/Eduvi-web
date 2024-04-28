/* eslint-disable react/prop-types */

const Button = ({ children, text, className, style }) => {
  return (
    <div className={`button__btn ${className}`} style={style}>
      {children}
      <span className="button__btn-text">{text}</span>
    </div>
  );
};
export default Button;
