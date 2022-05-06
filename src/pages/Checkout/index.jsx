import { useContext, useState, useCallback } from "react";
import { BuyContext } from "../../App";
import { NewAccordion } from "../../components/Accordion";
import { Cart } from "../Cart";

export const Checkout = () => {
  const { productList, cartItems } = useContext(BuyContext);
  const [selected, setSelected] = useState(0);
  const [validation, setValidation] = useState({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
  });
  const [finish, setFinish] = useState(false)

  const toggle = useCallback(
    (index) => {
      if (selected === index) {
        return setSelected(null);
      }


      return setSelected(index);
    },
    [selected]
  );

  const handleContinue = useCallback((isOk) => {
    if (isOk) {
      setSelected((prev) => prev + 1);
    }
  }, []);

  return (
    <section className="px-3 lg:px-6 py-10">
      <div className="accordion-wrapper py-4 px-6">
        <NewAccordion
          selected={selected}
          toggle={toggle}
          list={[
            {
              id: 1,
              title: "Endereço",
              content: (
                <>
                  <ContentSimulation phase={1} />
                  <button
                    className="mb-5 bg-gray-600 px-4 py-3"
                    onClick={() =>
                      setValidation((prev) => ({ ...prev, stepOne: true }))
                    }
                  >
                    Validação feita no passo um
                  </button>
                </>
              ),
              contentButton: (
                <Button
                  isValid={validation.stepOne}
                  toggle={() => handleContinue(validation.stepOne)}
                />
              ),
            },
            {
              id: 2,
              title: "Frete",
              content: (
                <>
                  <ContentSimulation phase={2} />
                  <button
                    className="mb-5 bg-gray-600 px-4 py-3"
                    onClick={() =>
                      setValidation((prev) => ({ ...prev, stepTwo: true }))
                    }
                  >
                    Validação feita no passo um
                  </button>
                </>
              ),
              contentButton: (
                <Button
                  isValid={validation.stepTwo}
                  toggle={() => handleContinue(validation.stepTwo)}
                />
              ),
            },
            {
              id: 3,
              title: "Pagamento",
              content: (
                <>
                  <ContentSimulation phase={4} />
                  <button
                    className="mb-5 bg-gray-600 px-4 py-3"
                    onClick={() =>
                      setValidation((prev) => ({ ...prev, stepThree: true }))
                    }
                  >
                    Validação feita no passo um
                  </button>
                </>
              ),
              contentButton: (
                <Button
                  isValid={validation.stepThree}
                  toggle={() => {
                    setFinish(true);
                    handleContinue(validation.stepThree);
                  }}
                />
              ),
            },
          ]}
        />
      </div>
      {finish && 'Prontinho :D'}
    </section>
  );
};

const Button = ({ toggle, isValid }) => (
  <button
    onClick={toggle}
    className={`flex items-center justify-center border-0 text-lg py-3 w-full focus:outline-none rounded mt-0 ${
      isValid
        ? " bg-primary-9 hover:bg-primary-8 text-primary-2"
        : "bg-secondary-8 pointer-events-none text-secondary-11"
    }`}
  >
    Continuar
  </button>
);

const ContentSimulation = ({ phase }) => {
  const step = {
    1: "ENDEREÇO",
    2: "FRETE",
    3: "PAGAMENTO",
  };
  return (
    <p>
      SIMULAÇÃO DE CONTEÚDO DA ÁREA{" "}
      <span className="font-bold">{step[phase] && step[phase]}</span>{" "}
    </p>
  );
};