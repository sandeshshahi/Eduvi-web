import ImageSection from "./imageSection/ImageSection";
import TextSection from "./textSection/TextSection";
import pattern from "../../assets/images/patternBlue.png";
import html from "../../assets/icons/html.svg";
import java from "../../assets/icons/java.svg";
import php from "../../assets/icons/php.svg";

const JoinCoursesSection = () => {
  return (
    <div className="joinCoursesSection">
      <TextSection />
      <ImageSection />

      {/*  pattern */}
      <img
        className="joinCoursesSection-pattern"
        src={pattern}
        alt="pattern"
        height={185}
        width={180}
      />

      {/*  icons */}
      <div className="joinCoursesSection-icon html">
        <img
          className="joinCoursesSection-icon-html"
          src={html}
          alt="html"
          height={30}
          width={30}
        />
      </div>
      <div className="joinCoursesSection-icon java">
        <img
          className="joinCoursesSection-icon-java"
          src={java}
          alt="java"
          height={30}
          width={30}
        />
      </div>
      <div className="joinCoursesSection-icon php">
        <img
          className="joinCoursesSection-icon-php"
          src={php}
          alt="php"
          height={30}
          width={30}
        />
      </div>
    </div>
  );
};
export default JoinCoursesSection;
