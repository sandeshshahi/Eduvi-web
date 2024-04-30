const ClassButton = ({ children, text }) => {
  return (
    <button
      aria-labelledby=" button"
      aria-describedby="button"
      className="class__button"
    >
      {children}
      <span className="class__button-text">{text}</span>
    </button>
  );
};
export default ClassButton;
