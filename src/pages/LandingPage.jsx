import ButtonGroup from "../components/classes/classesButtons/ButtonGroup";
import Title from "../components/classes/title/Title";
import VideoCallSection from "../components/classes/videoCall/VideoCallSection";
import ImageSection from "../components/header/imageSection/ImageSection";
import Text from "../components/header/text/Text";
import UpperNav from "../components/header/upperNav/UpperNav";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <UpperNav />
      <div className="landingPage__main">
        <Text />
        <ImageSection />
      </div>

      {/* for bg gradient colors */}
      <div className="landingPage-box1">
        <div className="landingPage-ellipse"></div>
      </div>
      <div className="landingPage-box2">
        <div className="landingPage-ellipse"></div>
      </div>
      <div className="landingPage-box3">
        <div className="landingPage-ellipse"></div>
      </div>

      <main className="main__section">
        <div className="main__section-classes">
          <Title />
          <VideoCallSection />
          <ButtonGroup />
        </div>
      </main>
    </div>
  );
};
export default LandingPage;
