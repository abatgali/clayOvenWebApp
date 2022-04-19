import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation";
import GiftCardPage from "./pages/giftcard-page";
import HomePage from "./pages/home-page";
import LoginPage from "./pages/login-page";
import MenuPage from "./pages/menu-page";
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
      </Routes>
    </>
  );
}

export default App;
