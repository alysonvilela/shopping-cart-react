import { BuyContext } from "../../App";
import { useContext } from "react";

export const Cart = ({ handleSelect }) => {
  const { productList, cartItems } = useContext(BuyContext);

  const cartProducts = productList
    .filter((g) => cartItems.includes(g.id))
    .map((g) => g);

  const prices = cartProducts.map((i) => Number(i.price));
  const sum = prices.reduce((pv, cv) => pv + cv, 0);

  return (
    <section className="container mx-auto grid grid-cols-8 gap-4">
      <div className="items col-span-5">
        <div className="container flex flex-col mx-auto items-center justify-center">
          <ul className="flex flex-col w-full">
            {cartProducts?.map(({ product, pic, price, id }) => (
              <li className="border-secondary-3 flex flex-row mb-4">
                <div className="shadow select-none bg-secondary-2 rounded-lg flex flex-1 items-center p-4">
                  <div className="flex flex-col h-10 justify-center items-center mr-4">
                    <a href="#" className="block relative">
                      <img
                        alt={product}
                        src={pic}
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a>
                  </div>
                  <div className="flex-1 pl-1 md:mr-16">
                    <div className="font-medium">{product}</div>
                    <div className="text-sm">$ {price}</div>
                  </div>
                  <button
                    className="text-xs text-red-500 underline"
                    onClick={() => handleSelect(id, true)}
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="summary-wrapper col-span-3">
        <article className="summary p-5 w-full bg-secondary-3 rounded-lg max-h-fit">
          <ul>
            <li className="items">
              <h2 className="text-secondary-12 mb-5 text-lg">Produtos</h2>
              <div className="border-t border-secondary-2 mb-4" />
              <ul className="text-secondary-11 mb-5">
                {cartProducts?.map(({ product, price }) => (
                  <li className="flex flex-row justify-between w-full">
                    <h3 className="uppercase text-sm">{product}</h3>
                    <span className="block text-sm">$ {price}</span>
                  </li>
                ))}
              </ul>
            </li>
            <div className="border-t border-secondary-2 mb-4" />
            <li className="total text-secondary-12 flex justify-between">
              <h2 className="text-lg font-bold">Total</h2>
              <span className="block font-bold">$ {sum}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
