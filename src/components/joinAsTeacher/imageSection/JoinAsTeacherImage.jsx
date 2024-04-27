import gradientImage from "../../../assets/icons/joinAsTeacherBG.svg";
import studentImage from "../../../../public/images/maleStudent-holdingpen.png";
const JoinAsTeacherImage = () => {
  return (
    <div className="joinAsTeacherImage__container">
      <div className="joinAsTeacherImage__container-bg">
        <img
          className="joinAsTeacherImage__container-bg-gradient"
          src={gradientImage}
          alt="gradient color"
        />
      </div>
      <div className="joinAsTeacherImage__container-image">
        <img src={studentImage} alt="male student" height={533} width={403} />
      </div>
    </div>
  );
};
export default JoinAsTeacherImage;
