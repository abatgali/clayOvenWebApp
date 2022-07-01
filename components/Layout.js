import { isNumeric } from "jquery";
import React, { useEffect } from "react";
import Cart from "./template/Global/Cart/Cart";
import ModalCart from "./template/Global/Cart/ModalCart";
import CookiesBar from "./template/Global/CookiesBar";
import VideoDemoModal from "./template/Global/VideoDemoModal";
import Footer from "./ui/Footer/Footer";
import Nav from "./ui/Header/Nav";
import Script from "next/script";
import loadjs from "loadjs";
const JSON_CATEGORIES = require("./../public/data/categories.json");
const JSON_MENU = require("./../public/data/menu.json");
const JSON_DELIVERY = require("./../public/data/delivery.json");
function Layout({ children }) {
  useEffect(() => {
    if (!window.load) {
    }
    loadjs("./core.js");
    window.cartData = {
      categories: JSON_CATEGORIES,
      menu: JSON_MENU,
      delivery: JSON_DELIVERY,
    };
    if (window.RunMe) {
      window.RunMe();
    }

    if (document.querySelectorAll(".modal-backdrop").length > 0) {
      document.querySelectorAll(".modal-backdrop").forEach((ele, index) => {
        ele.remove();
      });
    }
    return () => {};
  }, []);

  return (
    <>
      <div id="body-wrapper" class="animsition">
        <Nav />
        <div id="content">{children}</div>
        <Footer />
        <ModalCart />
        <VideoDemoModal />
        <CookiesBar />
        <Cart />
      </div>
      {/* <Script src="/core.js" onLoad={(e) => {}}></Script> */}
    </>
  );
}

export default Layout;
