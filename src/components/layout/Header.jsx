import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import { LanguageContex } from "../../context/LanguageContext";
import { PizzaCardContex } from "../../context/PizzaCard";

const Header = () => {
  const { lang, langType, changeLang } = useContext(LanguageContex);

  const { cart, totalPriceQuanity } = useContext(PizzaCardContex);

  return (
    <header className="shadow-md bg-white sticky top-0">
      <div className="container max-w-1200 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/public/Location.svg" alt="locaion" />
          <select className="mx-3 h-7 rounded-md border-0  py-0 pl-2 pr-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
            <option>{lang.location}</option>
            <option>{lang.location2}</option>
          </select>
          <p className="px-4">{lang.adress}</p>
          <p>
            {lang.kurer} <span className="font-extrabold">00:24:19</span>
          </p>
        </div>
        <div className="flex items-center">
          <p className="mr-10">{lang.WorkingHours}</p>
          <div className="flex items-center">
            <img src="/public/Account.svg" alt="account" />
            <p className="ml-3">{lang.login}</p>
          </div>
        </div>
      </div>
      <hr />
      <nav className="container max-w-1200 py-5">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <LazyLoadImage
              src={"/public/logo1.svg"} // use normal <img> attributes as props
              width={150}
              height={150}
              alt={"logo"}
            />
          </Link>
          <div className="flex items-center">
            <Link to={"/cart"}>
              <button className="py-2 px-4 bg-[#FF7010] rounded-lg flex items-center text-center">
                <LazyLoadImage
                  src={"/public/card.svg"} // use normal <img> attributes as props
                  width={24}
                  height={24}
                  alt={"logo"}
                />
                <p className="text-white font-bold">
                  ({cart.length}) {totalPriceQuanity}$
                </p>
              </button>
            </Link>

            <select
              onChange={changeLang}
              value={langType}
              className="ml-4 h-7 rounded-md border border-[#FF7010] py-0 pl-2 pr-7 text-gray-500 sm:text-sm"
            >
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="uz">UZ</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
