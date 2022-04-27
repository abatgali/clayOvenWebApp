import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const menuForAll = [
  {
    category: "Vegetables",
    items: [
      { name: "Spinach", price: "$5.95" },
      { name: "Kale", price: "$2.95" },
      { name: "Broccoli", price: "$6.95" },
      { name: "Peas", price: "$7.95" },
      { name: "Sweet potatoes", price: "$8.95" },
      { name: "Beets", price: "$15.95" },
      { name: "Carrots", price: "$3.95" },
      { name: "Fermented vegetables", price: "$4.95" },
    ],
  },
  {
    category: "Fruits",
    items: [
      { name: "Apple", price: "$5.95" },
      { name: "Banana", price: "$2.95" },
      { name: "Mango", price: "$6.95" },
      { name: "Coconut", price: "$7.95" },
      { name: "Guava", price: "$8.95" },
      { name: "Orange", price: "$15.95" },
      { name: "Avocado", price: "$3.95" },
      { name: "Pineapple", price: "$4.95" },
    ],
  },
];

const MenuPage = () => {
  const [filterKey, setFilterKey] = useState("Vegetables");
  const [currentMenu, setCurrentMenu] = useState([]);

  useEffect(() => {
    if (filterKey) {
      setCurrentMenu(menuForAll.find((menu) => menu.category === filterKey));
    }
  }, [filterKey]);

  console.log("currentMenu", currentMenu);

  return (
    <div className="menu" style={{ marginTop: 40, marginBottom: 40 }}>
      <Container>
        <h2 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
          <span style={{ fontSize: 48 }}>Menu</span>
        </h2>
        <Row>
          <Col lg={12} className=" d-flex justify-content-center">
            <ul id="menu-flters">
              <li
                className={filterKey === "Vegetables" && "filter-active"}
                onClick={() => setFilterKey("Vegetables")}
              >
                Vegetables
              </li>
              <li
                className={filterKey === "Fruits" && "filter-active"}
                onClick={() => setFilterKey("Fruits")}
              >
                Fruits
              </li>
            </ul>
          </Col>
        </Row>
        <hr />

        <div className="fancy-border menu-text text-center menu-text">
          <h1 className="">{currentMenu.category}</h1>
          {currentMenu?.items?.map((item, index) => (
            <Row key={index} className="justify-content-center">
              <Col
                lg={4}
                className="menu-item filter-starters filter-item justify-content-center"
              >
                <div className="menu-content">
                  <div className="link">{item.name}</div>
                  <span>{item.price}</span>
                </div>
                <div style={{ textAlign: "left" }} className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MenuPage;
