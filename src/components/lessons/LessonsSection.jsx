import LessonCard from "./card/LessonCard";
import Hobberd from "./hobberd/Hobberd";
import TitleSection from "./title/TitleSection";
import { lessons } from "../../data/lessonData";
import Button from "../controls/button/Button";
const LessonsSection = () => {
  return (
    <div className="lessons__section">
      <TitleSection />
      <Hobberd />
      <div className="lessons__section-cards">
        {lessons.map((item) => {
          return <LessonCard item={item} key={item.key} />;
        })}
      </div>
      <Button className={"btn-primary"} text={"Visit More Classes"} />
    </div>
  );
};
export default LessonsSection;
