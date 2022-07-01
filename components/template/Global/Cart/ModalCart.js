import React, { useEffect } from "react";

export default function ModalCart() {
  useEffect(() => {
    document.getElementById("closeModalCart").addEventListener("click", () => {
      if (document.querySelectorAll(".modal-backdrop").length > 0) {
        document.querySelectorAll(".modal-backdrop").forEach((ele, index) => {
          ele.remove();
        });
      }
    });
    document.getElementById("AddToCart_").addEventListener("click", () => {
      if (document.querySelectorAll(".modal-backdrop").length > 0) {
        document.querySelectorAll(".modal-backdrop").forEach((ele, index) => {
          ele.remove();
        });
      }
    });

    return () => {};
  }, []);

  return (
    <div>
      {/* Modal / Product */}
      <div
        className="modal fade product-modal"
        id="product-modal"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header modal-header-lg dark bg-dark">
              <div className="bg-image">
                <img
                  src="http://assets.suelo.pl/soup/img/photos/modal-add.jpg"
                  alt
                />
              </div>
              <h4 className="modal-title">Specify your dish</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                id="closeModalCart"
              >
                <i className="ti ti-close" />
              </button>
            </div>
            <div className="modal-product-details">
              <div className="row align-items-center">
                <div className="col-9">
                  <h6 className="mb-1 product-modal-name">Boscaiola Pasta</h6>
                  <span className="text-muted product-modal-ingredients">
                    Pasta, Cheese, Tomatoes, Olives
                  </span>
                </div>
                <div className="col-3 text-lg text-right">
                  $<span className="product-modal-price" />
                </div>
              </div>
            </div>
            <div className="modal-body panel-details-container">
              {/* Panel Details / Size */}
              <div className="panel-details panel-details-size">
                <h5 className="panel-details-title">
                  <label className="custom-control custom-radio">
                    <input
                      name="radio_title_size"
                      type="radio"
                      className="custom-control-input"
                    />
                    <span className="custom-control-indicator" />
                  </label>
                  <a href="#panel-details-sizes-list" data-toggle="collapse">
                    Size
                  </a>
                </h5>
                <div id="panel-details-sizes-list" className="collapse show">
                  <div className="panel-details-content">
                    <div className="product-modal-sizes">
                      <div className="form-group">
                        <label className="custom-control custom-radio">
                          <input
                            name="radio_size"
                            type="radio"
                            className="custom-control-input"
                            defaultChecked
                          />
                          <span className="custom-control-indicator" />
                          <span className="custom-control-description">
                            Small - 100g ($9.99)
                          </span>
                        </label>
                      </div>
                      <div className="form-group">
                        <label className="custom-control custom-radio">
                          <input
                            name="radio_size"
                            type="radio"
                            className="custom-control-input"
                          />
                          <span className="custom-control-indicator" />
                          <span className="custom-control-description">
                            Medium - 200g ($14.99)
                          </span>
                        </label>
                      </div>
                      <div className="form-group">
                        <label className="custom-control custom-radio">
                          <input
                            name="radio_size"
                            type="radio"
                            className="custom-control-input"
                          />
                          <span className="custom-control-indicator" />
                          <span className="custom-control-description">
                            Large - 350g ($21.99)
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Panel Details / Additions */}
              <div className="panel-details panel-details-additions">
                <h5 className="panel-details-title">
                  <label className="custom-control custom-radio">
                    <input
                      name="radio_title_additions"
                      type="radio"
                      className="custom-control-input"
                    />
                    <span className="custom-control-indicator" />
                  </label>
                  <a
                    href="#panel-details-additions-content"
                    data-toggle="collapse"
                  >
                    Additions
                  </a>
                </h5>
                <div id="panel-details-additions-content" className="collapse">
                  <div className="panel-details-content">
                    {/* Additions List */}
                    <div className="row product-modal-additions">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">
                              Tomato ($1.29)
                            </span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">
                              Ham ($1.29)
                            </span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">
                              Chicken ($1.29)
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">
                              Cheese($1.29)
                            </span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <span className="custom-control-indicator" />
                            <span className="custom-control-description">
                              Bacon ($1.29)
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Panel Details / Other */}
              <div className="panel-details panel-details-form">
                <h5 className="panel-details-title">
                  <label className="custom-control custom-radio">
                    <input
                      name="radio_title_other"
                      type="radio"
                      className="custom-control-input"
                    />
                    <span className="custom-control-indicator" />
                  </label>
                  <a href="#panel-details-other" data-toggle="collapse">
                    Other
                  </a>
                </h5>
                <div id="panel-details-other" className="collapse">
                  <form action="#">
                    <textarea
                      cols={30}
                      rows={4}
                      className="form-control"
                      placeholder="Put this any other informations..."
                      defaultValue={""}
                    />
                  </form>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="modal-btn btn btn-secondary btn-block btn-lg"
              data-action="add-to-cart"
              id="AddToCart_"
            >
              <span>Add to Cart</span>
            </button>
            <button
              type="button"
              className="modal-btn btn btn-secondary btn-block btn-lg"
              data-action="update-cart"
            >
              <span>Update</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
