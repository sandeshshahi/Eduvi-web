import "./styles/css/style.min.css";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Text from "./components/header/text/Text";
import ImageSection from "./components/header/imageSection/ImageSection";

const routes = {
  landing: "/",
  shop: "/shop",
};

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path={routes.landing} element={<LandingPage />} />
    //     <Route path={routes.shop} element={<ShopPage />} />
    //   </Routes>
    // </BrowserRouter>
    <section className="header-section">
      <Text />
      <ImageSection />
    </section>
  );
}

export default App;
