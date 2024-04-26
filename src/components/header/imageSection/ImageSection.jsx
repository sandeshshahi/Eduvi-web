import schoolBoyImage from "../../../../public/images/school-boy-holding-copy.png";
import icon1 from "../../../assets/icons/blockImage.svg";
import icon2 from "../../../assets/icons/bookImage.svg";
import icon3 from "../../../assets/icons/lightBulbImage.svg";
import icon4 from "../../../assets/icons/presentationImage.svg";
import vector from "../../../assets/vectors/imageSection-vector.svg";

const ImageSection = () => {
  return (
    <div className="image__section">
      <div className="image__section-gradient"></div>
      <img
        className="image__section-image"
        src={schoolBoyImage}
        alt="school-boy image"
        height={669}
        width={418}
      />
      <div className="image__section-vector">
        <img src={vector} alt="vector" />
      </div>
      <div className="image__section-icon icon-1">
        <img src={icon1} alt="icon 1" height={50} width={50} />
      </div>
      <div className="image__section-icon icon-2">
        <img src={icon2} alt="icon 2" height={50} width={50} />
      </div>
      <div className="image__section-icon icon-3">
        <img src={icon3} alt="icon 3" height={50} width={50} />
      </div>
      <div className="image__section-icon icon-4">
        <img src={icon4} alt="icon 4" height={50} width={50} />
      </div>
    </div>
  );
};
export default ImageSection;
