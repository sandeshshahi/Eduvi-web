import image1 from "../../../public/images/1.png";
import image2 from "../../../public/images/2.png";
import image3 from "../../../public/images/3.png";
import image4 from "../../../public/images/4.png";
import image5 from "../../../public/images/5.png";
import image6 from "../../../public/images/6.png";

const SubscribeBanner = () => {
  return (
    <div className="subscribe__banner">
      <div className="subscribe__banner-contents">
        {/* images */}
        <img
          className="subscribe__banner-image image-1"
          src={image1}
          alt="image 1"
        />
        <img
          className="subscribe__banner-image image-2"
          src={image2}
          alt="image 2"
        />
        <img
          className="subscribe__banner-image image-3"
          src={image3}
          alt="image 3"
        />
        <img
          className="subscribe__banner-image image-4"
          src={image4}
          alt="image 4"
        />
        <img
          className="subscribe__banner-image image-5"
          src={image5}
          alt="image 5"
        />
        <img
          className="subscribe__banner-image image-6"
          src={image6}
          alt="image 6"
        />

        <h1 className="subscribe__banner-contents-h1">
          Subscribe For Get Update <br /> Every New Courses
        </h1>
        <p className="subscribe__banner-contents-p">
          20k+ students daily learn with Eduvi. Subscribe for new courses.
        </p>

        {/* subscribe input and button */}

        <div className="subscribe__banner-contents_controls">
          <input
            className="subscribe__banner-contents_controls-input"
            placeholder="enter your email"
            type="text"
          />
          <button className="subscribe__banner-contents_controls-button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default SubscribeBanner;
