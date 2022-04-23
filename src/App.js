import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation";
import GiftCardPage from "./pages/giftcard-page";
import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import MenuPage from "./pages/menu-page";
import OrderPage from "./pages/order-page";
import SignupPage from "./pages/signup-page";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/giftcard" element={<GiftCardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
