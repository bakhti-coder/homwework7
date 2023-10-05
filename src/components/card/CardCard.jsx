import PropTypes from "prop-types";
import { useContext } from "react";
import { PizzaCardContex } from "../../context/PizzaCard";

const CardCard = ({ image, name, description, price, id }) => {
  const { cart, increaseQuantity, deceaseQuantity } =
    useContext(PizzaCardContex);

  const pizzaInCard = cart.find((pr) => pr.id === id);
  return (
    <div className="flex flex-col my-5  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image}
        alt="sad"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">{description}</p>
        <p>{price}$</p>
        <div className="mt-5">
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
      </div>
    </div>
  );
};

CardCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  category: PropTypes.string,
  filter: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default CardCard;
