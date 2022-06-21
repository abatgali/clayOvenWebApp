import React from "react";

function MenuProducts({ name, slug, banner_img, products }) {
  return (
    <div id={slug} className="menu-category">
      <div className="menu-category-title">
        <div className="bg-image">
          <img src={banner_img} alt />
        </div>
        <h2 className="title">{name}</h2>
      </div>
      <div className="menu-category-content">
        {/* Menu Item */}

        {products.map((ele, index) => {
          return (
            <div className="menu-item menu-list-item">
              <div className="row align-items-center">
                <div className="col-sm-6 mb-2 mb-sm-0">
                  <h6 className="mb-0">{ele.name}</h6>
                  <span className="text-muted text-sm">
                    {ele.gradients.join(" , ")}
                  </span>
                </div>
                <div className="col-sm-6 text-sm-right">
                  <span className="text-md mr-4">
                    <span className="text-muted">from</span> {ele.curruncy}
                    <span data-product-base-price>{ele.price}</span>
                  </span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    data-action="open-cart-modal"
                    data-id={1}
                  >
                    <span>Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MenuProducts;
