import ClassButton from "./ClassButton";
import audioIcon from "../../../assets/icons/audioClass.svg";
import liveIcon from "../../../assets/icons/liveClass.svg";
import recordIcon from "../../../assets/icons/recordedClass.svg";

const ButtonGroup = () => {
  return (
    <>
      {/* classes buttons */}
      <div className="classes__button">
        <ClassButton text={"Audio Classes"}>
          <img src={audioIcon} height={70} width={70} alt="audio icon" />
        </ClassButton>
        <ClassButton text={"Live Classes"}>
          <img src={liveIcon} height={70} width={70} alt="live icon" />
        </ClassButton>
        <ClassButton text={"Recorded class"}>
          <img src={recordIcon} height={70} width={70} alt="record icon" />
        </ClassButton>
      </div>
    </>
  );
};
export default ButtonGroup;
