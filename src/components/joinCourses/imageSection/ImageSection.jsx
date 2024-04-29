import ellipse170 from "../../../assets/icons/ellipse170.svg";
import personWithLaptop from "../../../assets/images/table&person.png";
import pattern from "../../../assets/images/patternBlue.png";
import html from "../../../assets/icons/html.svg";
import java from "../../../assets/icons/java.svg";
import php from "../../../assets/icons/php.svg";

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

      {/*  pattern */}
      <img
        className="imageSection-pattern"
        src={pattern}
        alt="pattern"
        height={185}
        width={180}
      />

      {/*  icons */}
      <div className="imageSection-icon html">
        <img
          className="imageSection-icon-html"
          src={html}
          alt="html"
          height={30}
          width={30}
        />
      </div>
      <div className="imageSection-icon java">
        <img
          className="imageSection-icon-java"
          src={java}
          alt="java"
          height={30}
          width={30}
        />
      </div>
      <div className="imageSection-icon php">
        <img
          className="imageSection-icon-php"
          src={php}
          alt="php"
          height={30}
          width={30}
        />
      </div>
    </div>
  );
};
export default ImageSection;
