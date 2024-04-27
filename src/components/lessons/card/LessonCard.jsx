import icon1 from "../../../assets/icons/1.svg";

const LessonCard = () => {
  return (
    <div className="lessoncard">
      <img
        className="lessoncard-icon"
        src={icon1}
        alt=""
        height={50}
        width={50}
      />
      <h3 className="lessoncard-h3">Standard Three</h3>
      <p className="lessoncard-p">
        Standard 3 of the Aged Care Quality Standards applies to all services
        delivering personal...
      </p>
      <button className="lessoncard-button ">Class Details</button>
    </div>
  );
};
export default LessonCard;
