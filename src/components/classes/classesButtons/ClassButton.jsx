const ClassButton = ({ children, text }) => {
  return (
    <button className="class__button">
      {children}
      <span className="class__button-text">{text}</span>
    </button>
  );
};
export default ClassButton;
