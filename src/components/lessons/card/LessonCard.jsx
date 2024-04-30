/* eslint-disable react/prop-types */

const LessonCard = ({ item }) => {
  return (
    <div className={`lessoncard ${item.status}`}>
      <img
        className="lessoncard-icon"
        src={item.image}
        alt="lessoncard"
        height={50}
        width={50}
      />
      <h3
        aria-labelledby=" lesson card title"
        aria-describedby="lesson card title"
        className="lessoncard-h3"
      >
        {item.title}
      </h3>
      <p
        aria-labelledby="lesson card  description"
        aria-describedby="lesson card description"
        className="lessoncard-p"
      >
        {item.description}
      </p>
      <button
        aria-labelledby=" button"
        aria-describedby="button"
        role="button"
        className={`lessoncard-button ${item.status}`}
      >
        Class Details
      </button>
    </div>
  );
};
export default LessonCard;
