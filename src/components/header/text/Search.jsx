import downArrow from "../../../assets/icons/downArrowColored.svg";
import searchMagnifier from "../../../assets/icons/magnifier.svg";
import Button from "../../controls/button/Button";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search__input">
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

        <input
          aria-labelledby="search input"
          aria-describedby="search input"
          role="input"
          className="search__input"
          placeholder="Class/Course"
        />
      </div>

      <span>
        <Button
          aria-labelledby="search button"
          aria-describedby="search button"
          text={"search"}
          className={"btn-primary"}
          style={{ padding: "15px 30px" }}
        >
          <img
            className="search__button-icon"
            height={24}
            width={24}
            src={searchMagnifier}
            alt="search icon"
          />
        </Button>
      </span>
    </div>
  );
};
export default Search;
