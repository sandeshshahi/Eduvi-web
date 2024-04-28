import ShopButtonsAndSearchBar from "../shopButtonsAndSearchbar/ShopButtonsAndSearchBar";
import { books } from "../../data/shopData";
import ShopCard from "../shopCard/ShopCard";
import Button from "../controls/button/Button";
import paginationButtonPrev from "../../assets/icons/paginationButtonPrev.svg";
import paginationButtonNext from "../../assets/icons/paginationButtonNext.svg";

const RightShopSection = () => {
  return (
    <div className="shopSection__right">
      <ShopButtonsAndSearchBar />
      <div className="shopSection__right-cards">
        {books.map((item) => {
          return <ShopCard item={item} key={item.id} />;
        })}
      </div>
      <div className="shopSection__right-pagination">
        <Button
          className={"btn-primary inactive"}
          style={{
            padding: "0.625rem",
            borderRadius: "0.375rem",
            height: "2.75rem",
            width: "2.75rem",
          }}
        >
          <img
            src={paginationButtonPrev}
            alt="previous button"
            height={13.37}
            width={7.69}
          />
        </Button>
        <span className="shopSection__right-pagination-pageSpan">page</span>
        <span className="shopSection__right-pagination-pageNumber active">
          5
        </span>
        <span className="shopSection__right-pagination-pageNumber">of 80</span>
        <Button
          className={"btn-primary"}
          style={{
            padding: "0.625rem",
            borderRadius: "0.375rem",
            height: "2.75rem",
            width: "2.75rem",
          }}
        >
          <img
            src={paginationButtonNext}
            alt="next button"
            height={13.37}
            width={7.69}
          />
        </Button>
      </div>
    </div>
  );
};
export default RightShopSection;
