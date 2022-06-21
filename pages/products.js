import React, { useState } from "react";
import Layout from "../components/Layout";
import Banner from "../components/template/Products/Banner";
import MenuProducts from "../components/template/Products/MenuProducts";
import { useContext, useEffect } from "react";
import { dataContext } from "./_app";
import Router, { useRouter } from "next/router";
import Link from "next/link";
function products() {
  let router = useRouter();
  let allData = useContext(dataContext);
  let [categories, setCategories] = allData.categories;
  let [menu, setmenu] = allData.menu;
  let [delivery, setdelivery] = allData.delivery;
  // const [items, setItems] = useState();

  const [sortedMenu, setSortedMenu] = useState([]);
  useEffect(() => {
    let m = [];
    categories.forEach((ele, index) => {
      let k = [];
      menu.forEach((_ele, _index) => {
        if (ele.id === _ele.categoryId) {
          _ele.categorySlug = ele.slug;
          k.push(_ele);
        }
      });

      m.push({
        categoryName: ele.name,
        categorySlug: ele.slug,
        bannerImage: ele.bannerImage,
        products: k,
      });
    });
    setSortedMenu(m);
    return () => {};
  }, [allData, menu]);

  return (
    <Layout>
      <Banner />
      <div className="page-content">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-3">
              <nav
                id="menu-navigation"
                className="stick-to-content"
                data-local-scroll
              >
                <ul className="nav nav-menu bg-dark dark">
                  {sortedMenu.map((ele, index) => {
                    return (
                      <li key={index}>
                        <div
                          style={{
                            padding: ".5rem 0",
                            fontSize: "1.1rem",
                            display: "block",
                            cursor: "pointer",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            router.push(`#${ele.categorySlug}`);
                          }}
                        >
                          {ele.categoryName}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="col-md-9">
              {sortedMenu.map((ele, index) => {
                if (ele.products.length < 1) {
                  return null;
                }
                return (
                  <div
                    key={index}
                    id={`${ele.categorySlug}`}
                    className="menu-category"
                  >
                    <div className="menu-category-title">
                      <div className="bg-image">
                        <img src={ele.bannerImage} alt />
                      </div>
                      <h2 className="title">{ele.categoryName}</h2>
                    </div>
                    <div className="menu-category-content">
                      {ele.products.map((product, _index) => {
                        return (
                          <div
                            key={_index}
                            className="menu-item menu-list-item"
                          >
                            <div className="row align-items-center">
                              <div className="col-sm-6 mb-2 mb-sm-0">
                                <h6 className="mb-0">{product.name}</h6>
                                <span className="text-muted text-sm">
                                  {product.ingredients.join(", ")}
                                </span>
                              </div>
                              <div className="col-sm-6 text-sm-right">
                                <span className="text-md mr-4">
                                  <span className="text-muted">from</span> $
                                  <span data-product-base-price>
                                    {product.price}
                                  </span>
                                </span>
                                <button
                                  className="btn btn-outline-secondary btn-sm"
                                  data-action="open-cart-modal"
                                  data-id={product.id}
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
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default products;
