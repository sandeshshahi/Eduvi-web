/* eslint-disable react/prop-types */

const LessonCard = ({ item }) => {
  return (
    <div className={`lessoncard ${item.status}`}>
      <img
        className="lessoncard-icon"
        src={item.image}
        alt=""
        height={50}
        width={50}
      />
      <h3 className="lessoncard-h3">{item.title}</h3>
      <p className="lessoncard-p">{item.description}</p>
      <button role="button" className={`lessoncard-button ${item.status}`}>
        Class Details
      </button>
    </div>
  );
};
export default LessonCard;
