import account from "../../../assets/icons/profile.svg";

const Account = () => {
  return (
    <div className="account">
      <span className="account-title">My Account</span>
      <img height={30} width={30} src={account} alt="account icon" />
    </div>
  );
};
export default Account;
