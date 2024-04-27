import ellipse170 from "../../../assets/icons/ellipse170.svg";
import personWithLaptop from "../../../assets/images/table&person.png";

const ImageSection = () => {
  return (
    <div className="imageSection">
      <img
        className="imageSection-personImage"
        src={personWithLaptop}
        alt="person using laptop on table"
        height={587}
        width={689}
      />

      <img className="imageSection-ellipse" src={ellipse170} alt="ellipse" />
    </div>
  );
};
export default ImageSection;
