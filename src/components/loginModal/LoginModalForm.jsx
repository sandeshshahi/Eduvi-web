import GoogleIcon from "../../assets/icons/googleIcon.svg";
import messageIcon from "../../assets/icons/messageIcon.svg";
import lockIcon from "../../assets/icons/lock.svg";
import eye from "../../assets/icons/eye.svg";
import Button from "../../components/controls/button/Button";

const LoginModalForm = () => {
  return (
    <div className="loginModalForm">
      <button role="button" className="loginModalForm__button-google">
        <img src={GoogleIcon} alt="google icon" />
        <span className="loginModalForm__button-google-text">
          Sign in with google
        </span>
      </button>

      {/* sign in with text */}
      <div className="loginModalForm__option">
        <span className="loginModalForm__option-span"></span>
        <p className="loginModalForm__option-p">Or signin with your email</p>
        <span className="loginModalForm__option-span"></span>
      </div>

      {/* login input fields */}
      <div className="loginModalForm__input">
        <label htmlFor="email" className="loginModalForm__input-label">
          Email
        </label>
        <label className="loginModalForm__input-field">
          <img
            className="loginModalForm__input-field-icon"
            src={messageIcon}
            alt="message icon"
          />
          <input
            role="input"
            id="email"
            className="loginModalForm__input-email"
            type="text"
            placeholder="bill.sanders@example.com"
          />
        </label>
      </div>

      {/* password input field */}
      <div className="loginModalForm__input">
        <label htmlFor="password" className="loginModalForm__input-label">
          Password
        </label>
        <div className="loginModalForm__input-password-field">
          <label className="loginModalForm__input-password-field-label">
            <img
              className="loginModalForm__input-field-icon"
              src={lockIcon}
              alt="lock icon"
            />
            <input
              role="input"
              id="password"
              className="loginModalForm__input-password"
              type="password"
              placeholder="*************"
            />
          </label>

          <img
            className="loginModalForm__input-password-img"
            src={eye}
            alt="eye icon"
          />
        </div>
      </div>

      {/* button */}
      <Button
        text={"Sign In"}
        style={{ width: "23.125rem" }}
        className={"btn-primary"}
      />

      {/* checkbox and forgot password */}
      <div className="loginModalForm-checkbox">
        <div className="loginModalForm-checkbox-wrapper">
          <input
            role="checkbox"
            aria-checked
            className="loginModalForm-checkbox-input"
            type="checkbox"
            id="checkbox"
          />
          <label className="loginModalForm-checkbox-label" htmlFor="checkbox">
            keep me signed in
          </label>
        </div>

        <a className="loginModalForm-forgotPassword" href="/forgot">
          Forgot password?
        </a>
      </div>
    </div>
  );
};
export default LoginModalForm;
