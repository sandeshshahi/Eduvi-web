import boardImage from "../../../assets/images/boardImage.png";
import babyImage from "../../../assets/images/babyImage.png";
import pattern from "../../../assets/images/patternRed.png";
import callButton from "../../../assets/icons/callButton.svg";
import arrowButton from "../../../assets/icons/circularArrowButton.svg";

const VideoCallSection = () => {
  return (
    <div className="videoCallSection">
      <div className="videoCallSection__container">
        {/* board-image and baby-image  */}
        <div className="videoCallSection__container-boardImage">
          <img
            className="videoCallSection__container-boardImage-image"
            src={boardImage}
            alt=" board image"
          />

          {/* baby image */}
          <div className="videoCallSection__container-boardImage-buttons">
            <div className="videoCallSection__container-babyImage">
              <img
                className="videoCallSection__container-babyImage-image"
                src={babyImage}
                alt="baby image"
                height={194.4}
                width={158.4}
              />
            </div>

            {/* circular call button */}
            <button className="videoCallSection__container-callButton">
              <img
                src={callButton}
                alt="circular call button"
                height={60}
                width={60}
              />
            </button>

            {/* circular arrow button */}
            <button className="videoCallSection__container-arrowButton">
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
        <div className="videoCallSection__container__pattern">
          <img src={pattern} alt="pattern" height={185} width={180} />
        </div>
      </div>
    </div>
  );
};
export default VideoCallSection;
