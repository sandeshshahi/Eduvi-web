import downArrow from "../../../assets/icons/downArrowColored.svg";
import searchMagnifier from "../../../assets/icons/magnifier.svg";
import Button from "../../controls/button/Button";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search__menu">
        <span className="search__menu-text">Kindergarden</span>
        <img
          className="search__menu-icon"
          src={downArrow}
          alt="down arrow"
          style={{ color: "rgba(156, 77, 244, 1)" }}
        />
      </div>
      <span className="search__line"></span>
      <input className="search__input" placeholder="Class/Course" />
      <Button text={"search"} className={"btn-primary"}>
        <img
          className="search__button-icon"
          height={24}
          width={24}
          src={searchMagnifier}
          alt="search icon"
        />
      </Button>
    </div>
  );
};
export default Search;
