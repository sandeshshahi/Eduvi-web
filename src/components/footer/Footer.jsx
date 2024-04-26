import EduviLogo from "../../assets/logo/EduviLogo.svg";
import facebookLogo from "../../assets/logo/facebookLogo.svg";
import instagramLogo from "../../assets/logo/instagramLogo.svg";
import twitterLogo from "../../assets/logo/twitterLogo.svg";
import linkedInIcon from "../../assets/logo/linkedInIcon.svg";

const Footer = () => {
  return (
    <div className="footer__section">
      {/* left */}
      <ul className="footer__left">
        <li className="footer__left-logo">
          <img src={EduviLogo} alt="EduVi logo" height={30} width={25} />
          <span className="footer__left-logo_text">Eduvi</span>
        </li>

        <li className="footer__left-socialIcons">
          <img src={facebookLogo} alt="fabook icon" />
          <img src={instagramLogo} alt="instagram icon" />
          <img src={twitterLogo} alt="twitter icon" />
          <img src={linkedInIcon} alt="linkedin icon" />
        </li>

        <li className="footer__left-copy_right">©2021 Eduvi.co</li>
        <li className="footer__left-trademark">
          Eduvi is a registered trademark of Eduvi.co
        </li>
      </ul>

      {/* 1 */}
      <ul className="footer__items">
        <h4 className="footer__items-header">Courses</h4>
        <li className="footer__item">Classroom courses</li>
        <li className="footer__item">Virtual classroom courses</li>
        <li className="footer__item">E-learning courses</li>
        <li className="footer__item">Video Courses</li>
        <li className="footer__item">Offline Courses</li>
      </ul>

      {/* 2 */}
      <ul className="footer__items">
        <h4 className="footer__items-header">Community</h4>
        <li className="footer__item">Learners</li>
        <li className="footer__item">Parteners</li>
        <li className="footer__item">Developers</li>
        <li className="footer__item">Transactions</li>
        <li className="footer__item">Blog</li>
        <li className="footer__item">Teaching Center</li>
      </ul>

      {/* 3 */}
      <ul className="footer__items">
        <h4 className="footer__items-header">Quick links</h4>
        <li className="footer__item">Home</li>
        <li className="footer__item">Professional Education</li>
        <li className="footer__item">Courses</li>
        <li className="footer__item">Admissions</li>
        <li className="footer__item">Testimonial</li>
        <li className="footer__item">Programs</li>
      </ul>

      {/* 4 */}
      <ul className="footer__items">
        <h4 className="footer__items-header">More</h4>
        <li className="footer__item">Press</li>
        <li className="footer__item">Investors</li>
        <li className="footer__item">Terms</li>
        <li className="footer__item">Privacy</li>
        <li className="footer__item">Help</li>
        <li className="footer__item">Contact</li>
      </ul>
    </div>
  );
};
export default Footer;
