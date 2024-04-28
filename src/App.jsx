import "./styles/css/style.min.css";
import LandingPage from "./pages/LandingPage";
import ShopPage from "./pages/ShopPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const routes = {
  landing: "/",
  shop: "/shop",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.landing} element={<LandingPage />} />
        <Route path={routes.shop} element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
