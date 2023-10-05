import { Link } from "react-router-dom";
import { useContext } from "react";

import { PizzaCardContex } from "../../context/PizzaCard";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ id, image, name, description, price }) => {
  const { addToCart, cart, increaseQuantity, deceaseQuantity } =
    useContext(PizzaCardContex);

  const pizzaInCard = cart.find((pr) => pr.id === id);

  return (
    <div className="rounded-lg bg-white p-5">
      <Link to={`/pizza/${id}`}>
        <LazyLoadImage
          src={image}
          width={image.width}
          height={image.height}
          alt="name"
        />
      </Link>
      <div>
        <h1 className="truncate font-bold">{name}</h1>
        <p className="leading-relaxed text-base line-clamp-1 mt-2 text-[#191919]">
          {description}
        </p>
        <div className="flex justify-between items-center mt-4">
          {pizzaInCard ? (
            <div>
              <button
                onClick={() => deceaseQuantity(id)}
                className="bg-orange py-2 px-4 rounded-lg text-center text-white"
              >
                -
              </button>
              <span className="px-2 text-black font-bold text-xl">
                {pizzaInCard.quantity}
              </span>
              <button
                onClick={() => increaseQuantity(id)}
                className="bg-orange py-2 px-4 rounded-lg text-center text-white"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(id)}
              className="bg-orange py-2 px-5 rounded-lg text-center text-white"
            >
              Выбрать
            </button>
          )}

          <p className="tracking-widest text-lg text-orange-600 font-medium title-font">
            {price}
            {`$`}
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  category: PropTypes.string,
  filter: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
