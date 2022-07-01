import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Nav() {
  const [aboutDropDown, setAboutDropDown] = useState(false);
  const aboutDropDownRef = useRef(aboutDropDown);
  useEffect(() => {
    aboutDropDownRef.current = aboutDropDown;
    return () => {};
  }, [aboutDropDown]);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavOpenRef = useRef(mobileNavOpen);
  useEffect(() => {
    mobileNavOpenRef.current = mobileNavOpen;
    return () => {};
  }, [mobileNavOpen]);

  const [mobileNavAboutDropDown, setmobileNavAboutDropDown] = useState(false);
  const mobileNavAboutDropDownRef = useRef(mobileNavAboutDropDown);
  useEffect(() => {
    mobileNavAboutDropDownRef.current = mobileNavAboutDropDown;
    return () => {};
  }, [mobileNavAboutDropDown]);

  useEffect(() => {
    document.getElementById("aboutNav").addEventListener("click", (ele) => {
      if (aboutDropDownRef.current) {
        setAboutDropDown(false);
        document
          .getElementsByTagName("body")[0]
          .classList.remove("dropdown-visible");
        ele.target.parentElement.classList.remove("dropdown-show");
      } else {
        setAboutDropDown(true);
        document
          .getElementsByTagName("body")[0]
          .classList.add("dropdown-visible");
        ele.target.parentElement.classList.add("dropdown-show");
      }
    });
    document.getElementById("dropDownNav").addEventListener("click", () => {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("dropdown-visible");
      if (document.querySelectorAll(".modal-backdrop").length > 0) {
        document.querySelectorAll(".modal-backdrop").forEach((ele, index) => {
          ele.remove();
        });

        setAboutDropDown(false);
      }
    });
    // document
    //   .getElementById("dropDownNavGallery")
    //   .addEventListener("click", () => {
    //     document
    //       .getElementsByTagName("body")[0]
    //       .classList.remove("dropdown-visible");
    //     if (document.querySelectorAll(".modal-backdrop").length > 0) {
    //       document.querySelectorAll(".modal-backdrop").forEach((ele, index) => {
    //         ele.remove();
    //       });

    //       setAboutDropDown(false);
    //     }
    //   });

    document.getElementById("nav-toggle").addEventListener("click", () => {
      if (mobileNavOpenRef.current) {
        document.getElementById("body-overlay").style.display = "none";
        document.getElementById("panel-mobile").classList.remove("show");
        setMobileNavOpen(false);
      } else {
        document.getElementById("body-overlay").style.display = "block";
        document.getElementById("panel-mobile").classList.add("show");
        setMobileNavOpen(true);
      }
    });

    document.getElementById("sidepannelClose").addEventListener("click", () => {
      if (mobileNavOpenRef.current) {
        document.getElementById("body-overlay").style.display = "none";
        document.getElementById("panel-mobile").classList.remove("show");
        setMobileNavOpen(false);
      } else {
        document.getElementById("body-overlay").style.display = "block";
        document.getElementById("panel-mobile").classList.add("show");
        setMobileNavOpen(true);
      }
    });
    document.getElementById("mobileAbout").addEventListener("click", () => {
      if (mobileNavAboutDropDownRef.current) {
        document.getElementById("mobileAboutDropdown").style.display = "none";
        setmobileNavAboutDropDown(false);
      } else {
        document.getElementById("mobileAboutDropdown").style.display = "block";

        setmobileNavAboutDropDown(true);
      }
    });

    document
      .getElementById("MobiledropDownNavAbout")
      .addEventListener("click", () => {
        document.getElementById("body-overlay").style.display = "none";
        document.getElementById("panel-mobile").classList.remove("show");
        setMobileNavOpen(false);
      });
    document
      .getElementById("MobiledropDownNavHome")
      .addEventListener("click", () => {
        document.getElementById("body-overlay").style.display = "none";
        document.getElementById("panel-mobile").classList.remove("show");
        setMobileNavOpen(false);
      });

    document
      .getElementById("MobiledropDownNavGallery")
      .addEventListener("click", () => {
        document.getElementById("body-overlay").style.display = "none";
        document.getElementById("panel-mobile").classList.remove("show");
        setMobileNavOpen(false);
      });

    return () => {};
  }, []);

  return (
    <>
      <div>
        {/* Header */}
        <header id="header" className="light">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                {/* Logo */}
                <div className="module module-logo-horizontal">
                  <Link href={"/"}>
                    <a>
                      <img
                        src="assets/img/logo-horizontal-dark-green.svg"
                        alt
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-7">
                {/* Navigation */}
                <nav className="module module-navigation left mr-4">
                  <ul id="nav-main" className="nav nav-main">
                    <li className="has-dropdown">
                      <Link href={"/"}>
                        <a style={{ cursor: "pointer" }}>Home</a>
                      </Link>
                      <div className="dropdown-container">
                        <ul>
                          <Link href={"/"}>
                            <a style={{ cursor: "pointer" }}>Home</a>
                          </Link>
                          <li>
                            <a href="index-burgers.html">Home Burgers</a>
                          </li>
                          <li>
                            <a href="index-slider.html">
                              Home Fullwidth Slider
                            </a>
                          </li>
                          <li>
                            <a href="index-video.html">Home Video</a>
                          </li>
                          <li>
                            <a href="index-fresh.html">
                              Home Fresh{" "}
                              <span className="badge badge-success">New</span>
                            </a>
                          </li>
                          <li>
                            <a href="index-dark.html">
                              Home Dark{" "}
                              <span className="badge badge-success">New</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="has-dropdown">
                      <span id="aboutNav" style={{ cursor: "pointer" }}>
                        About
                      </span>
                      <div className="dropdown-container">
                        <ul className="dropdown-mega">
                          <li style={{ marginTop: 10 }}>
                            <Link href={"/about-us"}>
                              <span
                                id="dropDownNav"
                                style={{ cursor: "pointer" }}
                              >
                                About Us
                              </span>
                            </Link>
                          </li>

                          <li style={{ marginTop: 10 }}>
                            <Link href={"/service"}>
                              <span
                                id="dropDownNav"
                                style={{ cursor: "pointer" }}
                              >
                                Service
                              </span>
                            </Link>
                          </li>

                          <li style={{ marginTop: 10 }}>
                            <Link href={"/gallery"}>
                              <span
                                id="dropDownNav"
                                style={{ cursor: "pointer" }}
                              >
                                Gallery
                              </span>
                            </Link>
                          </li>

                          <li style={{ marginTop: 10 }}>
                            <Link href={"/review"}>
                              <span
                                id="dropDownNav"
                                style={{ cursor: "pointer" }}
                              >
                                Review
                              </span>
                            </Link>
                          </li>

                          <li style={{ marginTop: 10 }}>
                            <Link href={"/faq"}>
                              <span
                                id="dropDownNav"
                                style={{ cursor: "pointer" }}
                              >
                                FAQ
                              </span>
                            </Link>
                          </li>

                          {/* <li>
                            <Link href={"/gallery"}>
                              <span
                                id="dropDownNavGallery"
                                style={{ cursor: "pointer" }}
                              >
                                Gallery
                              </span>
                            </Link>
                          </li> */}
                          {/* <li>
                            <a href="page-reviews.html">Reviews</a>
                          </li>
                          <li>
                            <a href="page-faq.html">FAQ</a>
                          </li> */}
                        </ul>
                        <div className="dropdown-image">
                          <img
                            src="http://assets.suelo.pl/soup/img/photos/dropdown-about.jpg"
                            alt
                          />
                        </div>
                      </div>
                    </li>

                    <li>
                      <Link href={"/products"}>
                        <a>Menu</a>
                      </Link>
                    </li>

                    <li>
                      <Link href={"/offer"}>
                        <a>Offers</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"contact"}>
                        <a>Contact</a>
                      </Link>
                    </li>

                    <li>
                      <Link href={"/reservation"}>
                        <a>Reservations</a>
                      </Link>
                    </li>
                    {/* <li className="has-dropdown">
                      <a href="#">More</a>
                      <div className="dropdown-container">
                        <ul className="dropdown-mega">
                          <li>
                            <a href="page-offer-single.html">Offer single</a>
                          </li>
                          <li>
                            <a href="page-product.html">Product</a>
                          </li>
                          <li>
                            <a href="book-a-table.html">Book a table</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="confirmation.html">Confirmation</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-sidebar.html">Blog + Sidebar</a>
                          </li>
                          <li>
                            <a href="blog-post.html">Blog Post</a>
                          </li>
                          <li>
                            <a href="documentation/" target="_blank">
                              Documentation
                            </a>
                          </li>
                        </ul>
                        <div className="dropdown-image">
                          <img
                            src="http://assets.suelo.pl/soup/img/photos/dropdown-more.jpg"
                            alt
                          />
                        </div>
                      </div>
                    </li> */}
                  </ul>
                </nav>
                <div className="module left">
                  <Link href={"/products"}>
                    <a className="btn btn-outline-secondary">
                      <span>Order</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-2">
                <a
                  href="#"
                  className="module module-cart right"
                  data-toggle="panel-cart"
                >
                  <span className="cart-icon">
                    <i className="ti ti-shopping-cart" />
                    <span className="notification">0</span>
                  </span>
                  <span className="cart-value">
                    $<span className="value">0.00</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Header / End */}
        {/* Header */}
        <header id="header-mobile" className="light">
          <div className="module module-nav-toggle">
            <span href="#" id="nav-toggle" data-toggle="panel-mobile">
              <span />
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className="module module-logo">
            <a href="index.html">
              <img src="assets/img/logo-horizontal-dark.svg" alt />
            </a>
          </div>
          <a href="#" className="module module-cart" data-toggle="panel-cart">
            <i className="ti ti-shopping-cart" />
            <span className="notification">0</span>
          </a>
        </header>

        {/* Panel Mobile */}
        <nav id="panel-mobile">
          <div className="module module-logo bg-dark dark">
            <a href="#">
              <img src="assets/img/logo-light.svg" alt width={88} />
            </a>
            <button
              className="close"
              id="sidepannelClose"
              data-toggle="panel-mobile"
            >
              <i className="ti ti-close" />
            </button>
          </div>
          <nav className="module module-navigation">
            <ul id="nav-main-mobile" className="nav nav-main-mobile">
              <li className="has-dropdown">
                <Link href={"/"}>
                  <a style={{ cursor: "pointer" }} id="MobiledropDownNavHome">
                    Home
                  </a>
                </Link>
                <div className="dropdown-container">
                  <ul>
                    <li>
                      <a href="index.html">Home Basic</a>
                    </li>
                    <li>
                      <a href="index-burgers.html">Home Burgers</a>
                    </li>
                    <li>
                      <a href="index-slider.html">Home Fullwidth Slider</a>
                    </li>
                    <li>
                      <a href="index-video.html">Home Video</a>
                    </li>
                    <li>
                      <a href="index-fresh.html">
                        Home Fresh{" "}
                        <span className="badge badge-success">New</span>
                      </a>
                    </li>
                    <li>
                      <a href="index-dark.html">
                        Home Dark{" "}
                        <span className="badge badge-success">New</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="has-dropdown" style={{ cursor: "pointer" }}>
                <a id="mobileAbout" style={{ cursor: "pointer" }}>
                  About
                </a>
                <div className="dropdown-container" id="mobileAboutDropdown">
                  <ul className="dropdown-mega">
                    <li>
                      <Link href={"/about-us"}>
                        <span
                          id="MobiledropDownNavAbout"
                          style={{ cursor: "pointer" }}
                        >
                          About Us
                        </span>
                      </Link>
                    </li>
                    <li>
                      <a href="page-services.html">Services</a>
                    </li>
                    <li>
                      <Link href={"/gallery"}>
                        <span
                          id="MobiledropDownNavGallery"
                          style={{ cursor: "pointer" }}
                        >
                          Gallery
                        </span>
                      </Link>
                    </li>
                    <li>
                      <a href="page-reviews.html">Reviews</a>
                    </li>
                    <li>
                      <a href="page-faq.html">FAQ</a>
                    </li>
                  </ul>
                  <div className="dropdown-image">
                    <img
                      src="http://assets.suelo.pl/soup/img/photos/dropdown-about.jpg"
                      alt
                    />
                  </div>
                </div>
              </li>
              <li className="has-dropdown">
                <a href="#">Menu</a>
                <div className="dropdown-container">
                  <ul>
                    <li className="has-dropdown">
                      <a href="#">List</a>
                      <ul>
                        <li>
                          <a href="menu-list-navigation.html">Navigation</a>
                        </li>
                        <li>
                          <a href="menu-list-collapse.html">Collapse</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#">Grid</a>
                      <ul>
                        <li>
                          <a href="menu-grid-navigation.html">Navigation</a>
                        </li>
                        <li>
                          <a href="menu-grid-collapse.html">Collapse</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="page-offers.html">Offers</a>
              </li>
              <li>
                <a href="page-contact.html">Contact</a>
              </li>
              <li className="has-dropdown">
                <a href="#">More</a>
                <div className="dropdown-container">
                  <ul className="dropdown-mega">
                    <li>
                      <a href="page-offer-single.html">Offer single</a>
                    </li>
                    <li>
                      <a href="page-product.html">Product</a>
                    </li>
                    <li>
                      <a href="book-a-table.html">Book a table</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="confirmation.html">Confirmation</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-sidebar.html">Blog + Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-post.html">Blog Post</a>
                    </li>
                    <li>
                      <a href="documentation/" target="_blank">
                        Documentation
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown-image">
                    <img
                      src="http://assets.suelo.pl/soup/img/photos/dropdown-more.jpg"
                      alt
                    />
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div className="module module-social">
            <h6 className="text-sm mb-3">Follow Us!</h6>
            <a
              href="#"
              className="icon icon-social icon-circle icon-sm icon-facebook"
            >
              <i className="fa fa-facebook" />
            </a>
            <a
              href="#"
              className="icon icon-social icon-circle icon-sm icon-google"
            >
              <i className="fa fa-google" />
            </a>
            <a
              href="#"
              className="icon icon-social icon-circle icon-sm icon-twitter"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              href="#"
              className="icon icon-social icon-circle icon-sm icon-youtube"
            >
              <i className="fa fa-youtube" />
            </a>
            <a
              href="#"
              className="icon icon-social icon-circle icon-sm icon-instagram"
            >
              <i className="fa fa-instagram" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
