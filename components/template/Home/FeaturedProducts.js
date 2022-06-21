import React from "react";
import { useContext, useEffect } from "react";
import { dataContext } from "../../../pages/_app";

function FeaturedProducts() {
  let allData = useContext(dataContext);
  let [categories, setCategories] = allData.categories;
  let [menu, setmenu] = allData.menu;
  let [delivery, setdelivery] = allData.delivery;
  return (
    <section className="section right">
      <div className="container">
        <h1 className="mb-6">Featured Products</h1>
        <div className="row">
          {menu.map((ele, index) => {
            if (!ele.featured) {
              return null;
            }
            return (
              <div key={index} className="col-md-4">
                {/* Card */}
                <div className="card bg-primary-light">
                  <div className="card-image">
                    <img src={ele.image} alt />
                  </div>
                  <div className="card-body">
                    <h5 className="mb-1">{ele.name}</h5>
                    <span className="text-muted text-sm">
                      {ele.ingredients.join(", ")}
                    </span>
                    <div className="row align-items-center mt-4">
                      <div className="col-sm-6">
                        <span className="text-md mr-4">
                          <span className="text-muted">from</span> $
                          <span data-product-base-price>{ele.price} </span>
                        </span>
                      </div>
                      <div className="col-sm-6 text-sm-right mt-2 mt-sm-0">
                        <button
                          className="btn btn-outline-primary btn-sm"
                          data-action="open-cart-modal"
                          data-id={ele.id}
                        >
                          <span>Add to cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-5">
          <a href="/products" className="btn btn-secondary">
            <span>View Our Menu</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
