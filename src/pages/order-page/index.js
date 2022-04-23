import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Isotope from "isotope-layout";
import AddToCartModal from "../../components/add-to-cart-modal";

const allMenu = [
  {
    name: "Cucumber",
    price: "$5.95",
    type: "vege",
  },
  {
    name: "Apple",
    price: "$5.95",
    type: "fruit",
  },
  {
    name: "Orange",
    price: "$5.95",
    type: "fruit",
  },
  {
    name: "Tomato",
    price: "$5.95",
    type: "vege fruit",
  },
];

const OrderPage = () => {
  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    // cleanup
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <div id="menu" style={{ marginTop: 20, marginBottom: 20 }} className="menu">
      <Container>
        <h2 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
          Check our tasty <span>Menu</span>
        </h2>
        <Row>
          <Col lg={12} className=" d-flex justify-content-center">
            <ul id="menu-flters">
              <li
                onClick={handleFilterKeyChange("*")}
                className={filterKey === "*" && "filter-active"}
              >
                Show All
              </li>
              <li
                className={filterKey === "vege" && "filter-active"}
                onClick={handleFilterKeyChange("vege")}
              >
                Vegetables
              </li>
              <li
                className={filterKey === "fruit" && "filter-active"}
                onClick={handleFilterKeyChange("fruit")}
              >
                Fruits
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="menu-container filter-container">
          {allMenu?.map((item) => (
            <Col
              style={{ padding: 20 }}
              lg={6}
              className={`menu-item filter-starters filter-item ${item.type} `}
            >
              <div className="menu-content">
                <div className="link">{item.name}</div>
                <span>{item.price}</span>
              </div>
              <div className="menu-ingredients">
                Lorem, deren, trataro, filede, nerada
              </div>
              <div className="ms-auto bubbly-button">
                Add
                <i className="fa-solid ms-1 fa-plus"></i>
              </div>
            </Col>
          ))}
        </Row>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            left: 0,
            borderRadius: 0,
            zIndex: 10,
          }}
          className="btn-primary-red d-lg-none"
        >
          Cart
        </div>
      </Container>

      <AddToCartModal />
    </div>
  );
};

export default OrderPage;
