import boardImage from "../../../../public/images/boardImage.png";
import babyImage from "../../../../public/images/babyImage.png";
import pattern from "../../../../public/images/pattern.png";
import callButton from "../../../assets/icons/callButton.svg";
import arrowButton from "../../../assets/icons/circularArrowButton.svg";

const VideoCallSection = () => {
  return (
    <div className="videoCallSection">
      {/* board-image and baby-image  */}
      <div className="videoCallSection-boardImage">
        <img
          className="videoCallSection-boardImage-image"
          src={boardImage}
          alt=" board image"
          height={570}
          width={1000}
        />

        {/* baby image */}
        <div className="videoCallSection-boardImage-buttons">
          <div className="videoCallSection-babyImage">
            <img
              className="videoCallSection-babyImage-image"
              src={babyImage}
              alt="baby image"
              height={194.4}
              width={158.4}
            />
          </div>

          {/* circular call button */}
          <button className="videoCallSection-callButton">
            <img
              src={callButton}
              alt="circular call button"
              height={60}
              width={60}
            />
          </button>

          {/* circular arrow button */}
          <button className="videoCallSection-arrowButton">
            <img
              src={arrowButton}
              alt="circular arrow button"
              height={60}
              width={60}
            />
          </button>
        </div>
      </div>

      {/* for pattern */}
      <div className="videoCallSection__pattern">
        <img src={pattern} alt="pattern" height={185} width={180} />
      </div>
    </div>
  );
};
export default VideoCallSection;
