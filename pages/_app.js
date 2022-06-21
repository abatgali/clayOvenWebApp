import { useEffect, useState, createContext } from "react";
import "../styles/globals.scss";
const JSON_CATEGORIES = require("./../public/data/categories.json");
const JSON_MENU = require("./../public/data/menu.json");
const JSON_DELIVERY = require("./../public/data/delivery.json");
export const dataContext = createContext();
function MyApp({ Component, pageProps }) {
  const [menu, setmenu] = useState(JSON_MENU);
  const [categories, setCategories] = useState(JSON_CATEGORIES);
  const [delivery, setdelivery] = useState(JSON_DELIVERY);

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <dataContext.Provider
      value={{
        categories: [categories, setCategories],
        menu: [menu, setmenu],
        delivery: [delivery, setdelivery],
      }}
    >
      <Component {...pageProps} />
    </dataContext.Provider>
  );
}

export default MyApp;
