import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext, useEffect } from "react";
import { dataContext } from "../../../pages/_app";
function MenuCategory() {
  let router = useRouter();
  let allData = useContext(dataContext);
  let [categories, setCategories] = allData.categories;
  let [menu, setmenu] = allData.menu;
  let [delivery, setdelivery] = allData.delivery;
  return (
    <section className="section cover protrude">
      <div
        className="menu-sample-carousel carousel inner-controls"
        data-slick='{
  "dots": true,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "infinite": true,
  "responsive": [
      {
          "breakpoint": 991,
          "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 1
          }
      },
      {
          "breakpoint": 690,
          "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
          }
      }
  ]
    }'
      >
        {/* Menu Sample */}
        {categories.map((ele, index) => {
          return (
            <div className="menu-sample" key={index}>
              <a
                href={`products#${ele.slug}`}
                // onClick={(e) => {
                //   e.preventDefault();
                //   router.push("/products");
                // }}
              >
                <img src={ele.bannerImage} alt className="image" />
                <h3 className="title">{ele.name}</h3>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MenuCategory;
