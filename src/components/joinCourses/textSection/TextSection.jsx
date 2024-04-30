import Button from "../../controls/button/Button";

const TextSection = () => {
  return (
    <div className="text__section">
      <span className="text__section-title">College Level</span>
      <h1
        aria-labelledby=" join course heading"
        aria-describedby="join course heading"
        className="text__section-heading"
      >
        Don’t waste time in COVID-19 pandemic. Develop your skills.
      </h1>
      <p
        aria-labelledby=" join course description"
        aria-describedby="join course description"
        className="text__section-description"
      >
        High-definition video is video of higher resolution and quality than
        standard-definition. While there is no standardized meaning for
        high-definition, generally any video.
      </p>

      <div className="text__section-buttonWrapper">
        <Button text={"Registation Now"} className={"btn-primary"} />
      </div>
    </div>
  );
};
export default TextSection;
