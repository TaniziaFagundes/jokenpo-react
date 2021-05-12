import { useState } from "react";
import Jogada from "../Jogada/index";
import Placar from "../Placar/index";
import EndGame from "../EndGamer/index";

const resetGamer = (setUsePonto, setCompPonto) => {
  setUsePonto(0);
  setCompPonto(0);
};

const computer = (options, setOptionComputer) => {
  const optionComputer = options[Math.floor(Math.random() * options.length)];
  setOptionComputer(optionComputer);
};

const OptionsJogada = () => {
  const options = ["Pedra", "Papel", "Tesoura"];
  const [optionComputer, setOptionComputer] = useState("");
  const [optionUse, setOptionUse] = useState("");
  const [selectionUser, setselectionUser] = useState(false);
  const [usePonto, setUsePonto] = useState(0);
  const [compPonto, setCompPonto] = useState(0);

  return (
    <>
      <Placar
        optionUse={optionUse}
        optionComputer={optionComputer}
        selectionUser={selectionUser}
        usePonto={usePonto}
        setUsePonto={setUsePonto}
        compPonto={compPonto}
        setCompPonto={setCompPonto}
      ></Placar>

      {usePonto === 10 || compPonto === 10 ? (
        <EndGame
          resetGamer={resetGamer}
          setUsePonto={setUsePonto}
          setCompPonto={setCompPonto}
        ></EndGame>
      ) : (
        <>
          <Jogada
            optionUse={optionUse}
            optionComputer={optionComputer}
          ></Jogada>
          <div>
            <button
              onClick={() => {
                setOptionUse("Pedra");
                computer(options, setOptionComputer);
                setselectionUser({ selectionUser: !selectionUser });
              }}
            >
              Pedra
            </button>
            <button
              onClick={() => {
                setOptionUse("Papel");
                computer(options, setOptionComputer);
                setselectionUser({ selectionUser: !selectionUser });
              }}
            >
              Papel
            </button>
            <button
              onClick={() => {
                setOptionUse("Tesoura");
                computer(options, setOptionComputer);
                setselectionUser({ selectionUser: !selectionUser });
              }}
            >
              Tesoura
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default OptionsJogada;
