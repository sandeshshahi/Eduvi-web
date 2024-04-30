import BannerImage from "../../assets/images/bannerImage.png";

const SubscribeBanner = () => {
  return (
    <div className="subscribe__banner">
      <img
        className="subscribe__banner-image image-1"
        src={BannerImage}
        alt="Banner Image"
      />
      <div className="subscribe__banner-contents">
        <h1
          aria-labelledby=" subscribe heading"
          aria-describedby="subscribe heading"
          className="subscribe__banner-contents-h1"
        >
          Subscribe For Get Update <br /> Every New Courses
        </h1>
        <p
          aria-labelledby=" subscribe detail"
          aria-describedby="subscribe detail"
          className="subscribe__banner-contents-p"
        >
          20k+ students daily learn with Eduvi. Subscribe for new courses.
        </p>

        {/* subscribe input and button */}

        <div className="subscribe__banner-contents_controls">
          <input
            aria-labelledby=" email input"
            aria-describedby="email input"
            role="input"
            className="subscribe__banner-contents_controls-input"
            placeholder="enter your email"
            type="text"
          />
          <button
            aria-labelledby=" subscribe button"
            aria-describedby="subscribe button"
            role="button"
            className="subscribe__banner-contents_controls-button"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default SubscribeBanner;
