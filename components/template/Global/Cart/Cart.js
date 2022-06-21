import React from "react";

function Cart() {
  return (
    <div>
      {/* Panel Cart */}
      <div id="panel-cart">
        <div className="panel-cart-container">
          <div className="panel-cart-title">
            <h5 className="title">Your Cart</h5>
            <button className="close" data-toggle="panel-cart">
              <i className="ti ti-close" />
            </button>
          </div>
          <div className="panel-cart-content cart-details">
            <table className="cart-table">
              <tbody>
                <tr>
                  <td className="title">
                    <span className="name">
                      <a href="#product-modal" data-toggle="modal">
                        Beef Burger
                      </a>
                    </span>
                    <span className="caption text-muted">Large (500g)</span>
                  </td>
                  <td className="price">$9.00</td>
                  <td className="actions">
                    <a
                      href="#product-modal"
                      data-toggle="modal"
                      className="action-icon"
                    >
                      <i className="ti ti-pencil" />
                    </a>
                    <a href="#" className="action-icon">
                      <i className="ti ti-close" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="title">
                    <span className="name">
                      <a href="#product-modal" data-toggle="modal">
                        Extra Burger
                      </a>
                    </span>
                    <span className="caption text-muted">Small (200g)</span>
                  </td>
                  <td className="price text-success">$9.00</td>
                  <td className="actions">
                    <a
                      href="#product-modal"
                      data-toggle="modal"
                      className="action-icon"
                    >
                      <i className="ti ti-pencil" />
                    </a>
                    <a href="#" className="action-icon">
                      <i className="ti ti-close" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="cart-summary">
              <div className="row">
                <div className="col-7 text-right text-muted">Order total:</div>
                <div className="col-5">
                  <strong>
                    $<span className="cart-products-total">0.00</span>
                  </strong>
                </div>
              </div>
              <div className="row">
                <div className="col-7 text-right text-muted">Devliery:</div>
                <div className="col-5">
                  <strong>
                    $<span className="cart-delivery">0.00</span>
                  </strong>
                </div>
              </div>
              <hr className="hr-sm" />
              <div className="row text-lg">
                <div className="col-7 text-right text-muted">Total:</div>
                <div className="col-5">
                  <strong>
                    $<span className="cart-total">0.00</span>
                  </strong>
                </div>
              </div>
            </div>
            <div className="cart-empty">
              <i className="ti ti-shopping-cart" />
              <p>Your cart is empty...</p>
            </div>
          </div>
        </div>
        <a
          href="/checkout"
          className="panel-cart-action btn btn-secondary btn-block btn-lg"
        >
          <span>Go to checkout</span>
        </a>
      </div>
      {/* Panel Mobile */}
      <nav id="panel-mobile">
        <div className="module module-logo bg-dark dark">
          <a href="#">
            <img src="assets/img/logo-light.svg" alt width={88} />
          </a>
          <button className="close" data-toggle="panel-mobile">
            <i className="ti ti-close" />
          </button>
        </div>
        <nav className="module module-navigation" />
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
      {/* Body Overlay */}
      <div id="body-overlay" />
    </div>
  );
}

export default Cart;
