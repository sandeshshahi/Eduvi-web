import SubscribeBanner from "../components/banner/SubscribeBanner";
import ButtonGroup from "../components/classes/classesButtons/ButtonGroup";
import Title from "../components/classes/title/Title";
import VideoCallSection from "../components/classes/videoCall/VideoCallSection";
import Footer from "../components/footer/Footer";
import ImageSection from "../components/header/imageSection/ImageSection";
import Text from "../components/header/text/Text";
import NavBar from "../components/header/upperNav/NavBar";
import UpperNav from "../components/header/upperNav/UpperNav";
import { JoinAsTeacherSection } from "../components/joinAsTeacher/JoinAsTeacherSection";
import JoinCoursesSection from "../components/joinCourses/JoinCoursesSection";
import LessonsSection from "../components/lessons/LessonsSection";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <header className="header">
        <NavBar />
        <section className="header-section">
          <Text />
          <ImageSection />
        </section>
      </header>

      {/* for bg gradient colors */}
      <section>
        <div className="landingPage-box1">
          <div className="landingPage-ellipse"></div>
        </div>
        <div className="landingPage-box2">
          <div className="landingPage-ellipse"></div>
        </div>
        <div className="landingPage-box3">
          <div className="landingPage-ellipse"></div>
        </div>
      </section>

      <main className="main">
        {/* class section */}
        <section className="section-classes">
          <div className="section-classes-title">
            <Title />
            <VideoCallSection />
          </div>

          <ButtonGroup />
        </section>

        {/* lessons section */}
        <section className="section-lesson">
          <LessonsSection />
        </section>

        {/* join courses section */}
        <section className="section-joinCourses">
          <JoinCoursesSection />
        </section>

        {/* join as a teacher section */}
        <section className="section-joinAsTeacher">
          <JoinAsTeacherSection />
        </section>

        {/* subscribe banner section */}
        <section className="section-subscribeBanner">
          <SubscribeBanner />
        </section>
      </main>

      <footer className="section-footer">
        <Footer />
      </footer>
    </div>
  );
};
export default LandingPage;
