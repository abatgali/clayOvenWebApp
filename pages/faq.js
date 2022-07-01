import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/template/Faq/Banner";

const Faq = () => {
  return (
    <Layout>
      <Banner />
      {/* Section */}
      <div>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <nav
                  id="side-navigation"
                  className="stick-to-content pt-4"
                  data-local-scroll
                >
                  <h5 className="mb-3">
                    <i className="ti ti-align-justify mr-3 text-muted"></i>Pick
                    a content:
                  </h5>
                  <ul className="nav nav-vertical">
                    <li className="nav-item">
                      <a href="#faq1" className="nav-link">
                        General
                      </a>
                      <ul>
                        <li className="nav-item">
                          <a href="#faq1_1" className="nav-link">
                            How does it work?
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#faq1_2" className="nav-link">
                            How long does it take?
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#faq2" className="nav-link">
                        Delivery
                      </a>
                      <ul>
                        <li className="nav-item">
                          <a href="#faq2_1" className="nav-link">
                            How does it work?
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#faq2_2" className="nav-link">
                            How long does it take?
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#faq3" className="nav-link">
                        Payments
                      </a>
                      <ul>
                        <li className="nav-item">
                          <a href="#faq3_1" className="nav-link">
                            How does it work?
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#faq3_2" className="nav-link">
                            How long does it take?
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-8 offset-md-1">
                <div id="faq1">
                  <h3>
                    <i className="ti ti-file mr-4 text-primary"></i>General info
                  </h3>
                  <hr />
                  <div id="faq1_1" className="pb-5">
                    <h4>How does it work?</h4>
                    <p className="lead">
                      Vivamus non euismod dui. Curabitur rhoncus massa sit amet
                      nisi molestie lobortis. Nam quis neque nec odio vestibulum
                      pulvinar sit amet sed enim.
                    </p>
                    <p>
                      Sed lacus lacus, tincidunt a posuere sed, varius ut
                      sapien. Vivamus nulla odio, scelerisque eu orci ut,
                      tincidunt consequat ligula. Etiam ante felis, consequat
                      vel accumsan vitae, gravida nec mauris. Maecenas vitae
                      lobortis nisl. Donec lorem libero, vulputate sed arcu nec,
                      sollicitudin vestibulum nisi.
                    </p>
                  </div>
                  <div id="faq1_2" className="pb-5">
                    <h4>How long does it take?</h4>
                    <p className="lead">
                      Vivamus non euismod dui. Curabitur rhoncus massa sit amet
                      nisi molestie lobortis. Nam quis neque nec odio vestibulum
                      pulvinar sit amet sed enim.
                    </p>
                    <p>
                      {" "}
                      Vivamus nulla odio, scelerisque eu orci ut, tincidunt
                      consequat ligula. Etiam ante felis, consequat vel accumsan
                      vitae, gravida nec mauris. Maecenas vitae lobortis nisl.
                      Donec lorem libero, vulputate sed arcu nec, sollicitudin
                      vestibulum nisi.
                    </p>
                  </div>
                </div>
                <div id="faq2">
                  <h3>
                    <i className="ti ti-package mr-4 text-primary"></i>Delivery
                  </h3>
                  <hr />
                  <div id="faq2_1" className="pb-5">
                    <h4>How does it work?</h4>
                    <p className="lead">
                      Vivamus non euismod dui. Curabitur rhoncus massa sit amet
                      nisi molestie lobortis. Nam quis neque nec odio vestibulum
                      pulvinar sit amet sed enim.
                    </p>
                    <p>
                      Sed lacus lacus, tincidunt a posuere sed, varius ut
                      sapien. Vivamus nulla odio, scelerisque eu orci ut,
                      tincidunt consequat ligula. Etiam ante felis, consequat
                      vel accumsan vitae, gravida nec mauris. Maecenas vitae
                      lobortis nisl. Donec lorem libero, vulputate sed arcu nec,
                      sollicitudin vestibulum nisi.
                    </p>
                  </div>
                  <div id="faq2_2" className="pb-5">
                    <h4>How long does it take?</h4>
                    <p className="lead">
                      Vivamus non euismod dui. Curabitur rhoncus massa sit amet
                      nisi molestie lobortis. Nam quis neque nec odio vestibulum
                      pulvinar sit amet sed enim.
                    </p>
                    <p>
                      {" "}
                      Vivamus nulla odio, scelerisque eu orci ut, tincidunt
                      consequat ligula. Etiam ante felis, consequat vel accumsan
                      vitae, gravida nec mauris. Maecenas vitae lobortis nisl.
                      Donec lorem libero, vulputate sed arcu nec, sollicitudin
                      vestibulum nisi.
                    </p>
                  </div>
                </div>
                <div id="faq3">
                  <h3>
                    <i className="ti ti-wallet mr-4 text-primary"></i>Payments
                  </h3>
                  <hr />
                  <div id="faq3_1" className="pb-5">
                    <h4>How does it work?</h4>
                    <p className="lead">
                      Vivamus non euismod dui. Curabitur rhoncus massa sit amet
                      nisi molestie lobortis. Nam quis neque nec odio vestibulum
                      pulvinar sit amet sed enim.
                    </p>
                    <p>
                      Sed lacus lacus, tincidunt a posuere sed, varius ut
                      sapien. Vivamus nulla odio, scelerisque eu orci ut,
                      tincidunt consequat ligula. Etiam ante felis, consequat
                      vel accumsan vitae, gravida nec mauris. Maecenas vitae
                      lobortis nisl. Donec lorem libero, vulputate sed arcu nec,
                      sollicitudin vestibulum nisi.
                    </p>
                  </div>
                  <div id="faq3_2" className="pb-5">
                    <h4>How long does it take?</h4>
                    <p className="lead">
                      Vivamus non euismod dui. Curabitur rhoncus massa sit amet
                      nisi molestie lobortis. Nam quis neque nec odio vestibulum
                      pulvinar sit amet sed enim.
                    </p>
                    <p>
                      {" "}
                      Vivamus nulla odio, scelerisque eu orci ut, tincidunt
                      consequat ligula. Etiam ante felis, consequat vel accumsan
                      vitae, gravida nec mauris. Maecenas vitae lobortis nisl.
                      Donec lorem libero, vulputate sed arcu nec, sollicitudin
                      vestibulum nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Faq;
