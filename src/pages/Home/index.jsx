import axios from "axios";
import { useState, useEffect, useCallback, useContext } from "react";
import { BuyContext } from "../../App";

const selectedProductsIds = new Set();

export const Home = () => {
  const [data, setData] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const {setCartItems} = useContext(BuyContext)

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://61bd023ad8542f0017824ad2.mockapi.io/api/fin/product"
      );
      console.log(data);
      setData(data);
    })();
  }, []);

  const handleSelect = useCallback(
    (id, isSelected) => {
      if (isSelected) {
        selectedProductsIds.delete(id);
      } else selectedProductsIds.add(id);

      const arr = Array.from(selectedProductsIds);
      setCartItems(arr);
    },
    [setCartItems]
  );

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data?.map(({ id, pic, product, price }) => {
            const isSelected = selectedProductsIds.has(id);
            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={id}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={pic}
                  />
                </a>
                <div className="my-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium flex-wrap-reverse">
                    {product}
                  </h2>
                  <p className="mt-1"> $ {price} </p>
                </div>
                <button
                  onClick={() => handleSelect(id, isSelected)}
                  className={`flex items-center justify-center ${
                    isSelected
                      ? " bg-red-500 hover:bg-red-400 text-red-100"
                      : "bg-primary-11 hover:bg-primary-10 text-primary-3"
                  } border-0 text-lg py-3 w-full focus:outline-none rounded mt-0`}
                >
                  {isSelected ? "Remover" : "Comprar"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
