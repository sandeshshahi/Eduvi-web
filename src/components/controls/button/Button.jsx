const Button = ({ children, text, width, height }) => {
  return (
    <div
      className="button__btn"
      style={{ width: `${width}`, height: `${height}` }}
    >
      {children}
      <span className="button__btn-text">{text}</span>
    </div>
  );
};
export default Button;
