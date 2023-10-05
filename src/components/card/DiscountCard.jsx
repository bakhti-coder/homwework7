import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

const DiscountCard = ({ image, discount, price, i }) => {
  const descountPrice = (price * discount) / 100;
  const totalPrice = price - descountPrice;
  return (
    <div
      className={`rounded-lg ${i % 2 === 0 ? "bg-red" : "bg-orange"} py-4 px-4`}
    >
      <LazyLoadImage
        src={image}
        height={image.height}
        width={image.width}
        alt="name"
      />
      <div className="flex justify-between items-center">
        <p className="mt-2 text-white font-extrabold text-xl  line-through ">
          {price}$
        </p>
        <span className="mt-2 text-white font-extrabold text-xl">
          {totalPrice}$
        </span>
      </div>
      <div>
        <p className="mt-5 text-white font-extrabold text-xl">
          {discount}% Cкидка
        </p>
        <p></p>
      </div>
    </div>
  );
};

DiscountCard.propTypes = {
  image: PropTypes.string,
  discount: PropTypes.number,
  price: PropTypes.number,
  i: PropTypes.number,
};

export default DiscountCard;
