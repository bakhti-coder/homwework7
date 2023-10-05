import { useContext } from "react";
import { PizzaCardContex } from "../context/PizzaCard";
import CardCard from "../components/card/CardCard";

const PizzaCart = () => {
  const { cart, totalPriceQuanity } = useContext(PizzaCardContex);
  return (
    <section>
      <div className="container max-w-1200 py-10">
        {cart.length === 0 ? (
          <h1 className="text-center text-3xl my-3">No Cart...</h1>
        ) : (
          <div className="w-full">
            {cart.map((pizza) => (
              <CardCard key={pizza.id} {...pizza} />
            ))}
            <div className="flex items-center">
              <button className="bg-orange py-2 px-4 rounded-lg">
                Buy pizza
              </button>
              <p className="text-indigo-800 font-bold text-2xl ml-3">
                {totalPriceQuanity}$
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PizzaCart;
