import { Link } from "react-router-dom";

export const Header = ({cart}) => {
const cartQuantity = cart.length
    return (
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1C0.447715 1 0 1.44772 0 2V13C0 13.5523 0.447715 14 1 14H14C14.5523 14 15 13.5523 15 13V2C15 1.44772 14.5523 1 14 1H1ZM7.5 10.625C9.22589 10.625 10.625 9.22589 10.625 7.5C10.625 5.77411 9.22589 4.375 7.5 4.375C5.77411 4.375 4.375 5.77411 4.375 7.5C4.375 9.22589 5.77411 10.625 7.5 10.625Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="ml-3 text-xl">CartApp</span>
          </a>
          <nav class="hidden sm:flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">
              <Link to="/">Home</Link>
            </a>
            <a class="mr-5 hover:text-gray-900">
              <Link to="/cart">Cart</Link>
            </a>
            <a class="mr-5 hover:text-gray-900">
              <Link to="/checkout">Checkout</Link>
            </a>
          </nav>
          <button class="inline-flex items-center bg-primary-11 text-primary-3 border-0 py-3 px-5 focus:outline-none hover:bg-primary-10 rounded text-base mt-0">
            {cartQuantity > 0 ? `${cartQuantity} Itens no carrinho` : "Carrinho vazio"}
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    );
  };
  