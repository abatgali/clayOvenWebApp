import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Isotope from "isotope-layout";

const OrderPage = () => {
  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

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
          <Col lg={6} className="menu-item filter-starters filter-item vege">
            <div class="menu-content">
              <div className="link">Cucumber</div>
              <span>$5.95</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </Col>

          <Col lg={6} className="menu-item filter-starters filter-item fruit">
            <div class="menu-content">
              <div className="link">Apple</div>
              <span>$5.95</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </Col>

          <Col lg={6} className="menu-item filter-starters filter-item fruit">
            <div class="menu-content">
              <div className="link">Orange</div>
              <span>$5.95</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </Col>

          <Col
            lg={6}
            className="menu-item filter-starters filter-item vege fruit"
          >
            <div class="menu-content">
              <div className="link">Tomato</div>
              <span>$5.95</span>
            </div>
            <div class="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderPage;
