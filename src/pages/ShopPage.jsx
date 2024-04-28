import BookShopBanner from "../components/banner/BookShopBanner";
import SubscribeBanner from "../components/banner/SubscribeBanner";
import Footer from "../components/footer/Footer";
import UpperNav from "../components/header/upperNav/UpperNav";
import NewArrivalBooks from "../components/popularAndNewBooks/NewArrivalBooks";
import PopularBook from "../components/popularAndNewBooks/PopularBook";
import RightShopSection from "../components/shopSection/RightShopSection";

const ShopPage = () => {
  return (
    <div className="shopPage">
      <header className="shopPage__header">
        <UpperNav selected={true} />
        <BookShopBanner />
      </header>

      <main className="shopPage__main">
        <aside className="shopPage__main-aside">
          <PopularBook />
          <NewArrivalBooks />
        </aside>
        <section className="shopPage__main-section">
          <RightShopSection />
        </section>
      </main>

      <section className="shopPage__banner">
        <SubscribeBanner />
      </section>

      <footer className="shopPage__footer">
        <Footer />
      </footer>
    </div>
  );
};
export default ShopPage;
