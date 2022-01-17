import axios from "axios";
import { useState, useEffect, useCallback, useContext } from "react";
import { BuyContext } from "../../App";

export const Home = () => {
  const { setProductList, productList, handleSelect, setArr } = useContext(BuyContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://61bd023ad8542f0017824ad2.mockapi.io/api/fin/product"
      );
      setProductList(data);
    })();
  }, []);

  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {productList?.map(({ id, pic, product, price }) => {
            const isSelected = setArr.has(id);
            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={id}>
                <a className="block relative h-48 rounded-t-lg overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={pic}
                  />
                </a>
                <article className="bg-secondary-2 p-4 rounded-b-lg">
                  <div className="mb-4">
                    <h2 className="text-secondary-12 title-font text-lg font-medium flex-wrap-reverse">
                      {product}
                    </h2>
                    <p className="mt-1"> $ {price} </p>
                  </div>
                  <button
                    onClick={() => handleSelect(id, isSelected)}
                    className={`flex items-center justify-center ${
                      isSelected
                        ? " bg-red-500 hover:bg-red-400 text-red-200"
                        : "bg-primary-3 hover:bg-primary-4 text-primary-11"
                    } border-0 text-lg py-3 w-full focus:outline-none rounded mt-0`}
                  >
                    {isSelected ? "Remover" : "Comprar"}
                  </button>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
