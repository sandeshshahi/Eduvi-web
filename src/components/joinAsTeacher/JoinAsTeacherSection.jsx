import JoinAsTeacherText from "./textSection/JoinAsTeacherText";
import TeacherImage from "../../assets/images/join_courses.png";

export const JoinAsTeacherSection = () => {
  return (
    <div className="joinAsTeacher__section">
      {/* JoinAsTeacherImage   */}
      <img
        src={TeacherImage}
        className="joinAsTeacher__section-image"
        alt="Teacher Image"
      />
      <JoinAsTeacherText />
    </div>
  );
};
