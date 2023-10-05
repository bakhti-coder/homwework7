import { LazyLoadImage } from "react-lazy-load-image-component";

import PropTypes from "prop-types";

const CategoryCard = ({ image, name }) => {
  return (
    <div
      className={`hover:shadow-md py-5 px-10 rounded-xl border border-[#F0F0F0] cursor-pointer`}
    >
      <LazyLoadImage
        className="mx-auto"
        src={image}
        height={50}
        width={image.width}
        alt={name}
      />
      <p className="text-lg text-[#191919] text-center mt-3 ">{name}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default CategoryCard;
