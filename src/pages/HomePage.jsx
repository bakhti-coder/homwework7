import { LazyLoadImage } from "react-lazy-load-image-component";

import { categories } from "../constants/Category";
import { pizza } from "../constants/Pizza";

import CategoryCard from "../components/card/CategoryCard";
import DiscountCard from "../components/card/DiscountCard";
import { Fragment } from "react";
import Card from "../components/card/Card";

const HomePage = () => {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="container max-w-1200 py-10 ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <div className="hover:shadow-md py-5 px-10 rounded-xl border border-[#F0F0F0] cursor-pointer">
            <LazyLoadImage
              className="mx-auto"
              src={"/Fire.svg"}
              height={32}
              width={32}
              alt={"aksiya"}
            />
            <p className="text-lg  text-center mt-3 text-[#E23535]">Акции</p>
          </div>
          {categories.map((category, idx) => (
            <CategoryCard key={idx} {...category} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {pizza
            .filter((pizza) => pizza.discount)
            .slice(0, 4)
            .map((pizza, idx) => (
              <DiscountCard key={idx} {...pizza} i={idx} />
            ))}
        </div>

        <div className="mt-10 ">
          <div className="bg-white rounded-lg flex justify-between items-center py-3 px-5">
            <h4>Проверить адрес доставки</h4>
            <button className="bg-orange py-2 px-5 rounded-lg text-center text-white">
              Проверить
            </button>
          </div>
          <div className="mt-10">
            {categories.map((ctgr) => (
              <Fragment key={ctgr}>
                <h3 className="text-5xl text-[#191919] font-bold my-5">
                  {ctgr.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {pizza
                    .filter((el) => el.category === ctgr.name)
                    .map((pizza, i) => (
                      <Card key={i} {...pizza} />
                    ))}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
