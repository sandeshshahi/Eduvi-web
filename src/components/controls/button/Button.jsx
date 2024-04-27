const Button = ({ children, text, className }) => {
  return (
    <div
      className={`button__btn ${className}`}
      // style={{ backgroundColor: `${backgroundColor}` }}
    >
      {children}
      <span className="button__btn-text">{text}</span>
    </div>
  );
};
export default Button;
