import Button from "../../controls/button/Button";

const Title = () => {
  return (
    <div className="title">
      <h1 className="title__heading">
        High quality video, audio <br /> & live classes
      </h1>
      <p className="title__description">
        High-definition video is video of higher resolution and quality than
        standard-definition. While there is no standardized meaning for
        high-definition, generally any video image with considerably more than
        480 vertical scan lines or 576 vertical lines is considered
        high-definition.
      </p>
      <Button text={"Visit Courses "} className={"btn-primary"}></Button>
    </div>
  );
};
export default Title;
