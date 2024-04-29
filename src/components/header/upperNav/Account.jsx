import { useState } from "react";
import account from "../../../assets/icons/profile.svg";
import LoginModal from "../../loginModal/LoginModal";

const Account = () => {
  const [toggleLoginModal, setToggleLoginModal] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setToggleLoginModal(true);
        }}
        className="account"
      >
        <span className="account-title">My Account</span>
        <img height={30} width={30} src={account} alt="account icon" />
      </div>

      {console.log(toggleLoginModal)}
      <LoginModal
        openloginModal={toggleLoginModal}
        closeloginModal={setToggleLoginModal}
      />
    </>
  );
};
export default Account;
