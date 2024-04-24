import schoolBoyImage from "../../../../public/images/school-boy-holding-copy.png";
import icon1 from "../../../assets/icons/blockImage.svg";
import icon2 from "../../../assets/icons/bookImage.svg";
import icon3 from "../../../assets/icons/lightBulbImage.svg";
import icon4 from "../../../assets/icons/presentationImage.svg";

const ImageSection = () => {
  return (
    <div className="image__section">
      <div className="image__section-gradient">
        <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="flt_tag"
              />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
      <img
        className="image__section-image"
        src={schoolBoyImage}
        alt="school-boy image"
        height={669}
        width={418}
      />
      <div className="image__section-vector"></div>
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
