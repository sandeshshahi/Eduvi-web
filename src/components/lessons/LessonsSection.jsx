import Hobberd from "./hobberd/Hobberd";
import TitleSection from "./title/TitleSection";

const LessonsSection = () => {
  return (
    <div className="lessons__section">
      <TitleSection />
      <Hobberd />
    </div>
  );
};
export default LessonsSection;
