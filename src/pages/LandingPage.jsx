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
    </div>
  );
};
export default LandingPage;
