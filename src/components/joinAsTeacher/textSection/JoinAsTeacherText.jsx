import Button from "../../controls/button/Button";

const JoinAsTeacherText = () => {
  return (
    <div className="joinAsTeacherText__container">
      <h1
        aria-labelledby=" join as a teacher heading"
        aria-describedby="join as a teacher heading"
        className="joinAsTeacherText__container-h1"
      >
        Want to share your knowledge? Join us a Mentor
      </h1>
      <p
        aria-labelledby=" join as a teacher description"
        aria-describedby="join as a teacher description"
        className="joinAsTeacherText__container-p"
      >
        High-definition video is video of higher resolution and quality than
        standard-definition. While there is no standardized meaning for
        high-definition, generally any video.
      </p>
      <Button className={"btn-primary"} text={"Career Information"}></Button>
    </div>
  );
};
export default JoinAsTeacherText;
