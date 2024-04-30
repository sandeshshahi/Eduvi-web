import magnifierIcon from "../../assets/icons/magnifier.svg";
import downWardArrow from "../../assets/icons/downArrowColored.svg";
import Button from "../controls/button/Button";
const ShopButtonsAndSearchBar = () => {
  return (
    <div className="shopSection__right-controls">
      {/* button group */}
      <div className="shopSection__right-buttonGroup">
        <Button text={"All Books"} className={"btn-secondary active"} />
        <Button
          text={"Kindergarden"}
          className={"btn-secondary background-white"}
        />
        <Button
          text={"High School"}
          className={"btn-secondary background-white"}
        />
        <Button text={"College"} className={"btn-secondary background-white"} />
      </div>

      {/* searchbar and dropdown */}
      <div className="shopSection__right-searchBarAndDropdown">
        <div className="shopSection__right-searchBarGroup">
          <input
            aria-labelledby=" search Class, Course, Book Name "
            aria-describedby="search Class, Course, Book Name "
            role="input"
            type="text"
            placeholder="Search Class, Course, Book Name"
            className="shopSection__right-searchBar"
          />
          <Button className="btn-primary" style={{ padding: "10px" }}>
            <img src={magnifierIcon} height={24} width={24} />
          </Button>
        </div>
        <div className="shopSection__right-dropdown">
          <span className="sortbySpan">Sort by: &nbsp;</span>
          <select className="shopSection__right-dropdownSelect">
            <option>Latest</option>
          </select>
          <img
            className="shopSection__right-dropdownSelect-image"
            src={downWardArrow}
            height={24}
            width={24}
          />
        </div>
      </div>
    </div>
  );
};
export default ShopButtonsAndSearchBar;
