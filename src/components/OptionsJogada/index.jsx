import { useState, useEffect } from "react";
import Jogada from "../Jogada/index";
import Placar from "../Placar/index";

const computer = (options) => {
  const result = options[Math.floor(Math.random() * options.length)];
  return result;
};

const OptionsJogada = () => {
  const options = ["Pedra", "Papel", "Tesoura"];
  const [optionComputer, setOptionComputer] = useState("");
  const [optionUse, setOptionUse] = useState("");
  const [aux, setAux] = useState(false);

  return (
    <>
      <Placar
        optionUse={optionUse}
        optionComputer={optionComputer}
        aux={aux}
      ></Placar>
      <Jogada optionUse={optionUse} optionComputer={optionComputer}></Jogada>
      <div>
        <button
          onClick={() => {
            setOptionUse("Pedra");
            setOptionComputer(computer(options));
            setAux({ aux: !aux });
          }}
        >
          Pedra
        </button>
        <button
          onClick={() => {
            setOptionUse("Papel");
            setOptionComputer(computer(options));
            setAux({ aux: !aux });
          }}
        >
          Papel
        </button>
        <button
          onClick={() => {
            setOptionUse("Tesoura");
            setOptionComputer(computer(options));
            setAux({ aux: !aux });
          }}
        >
          Tesoura
        </button>
      </div>
    </>
  );
};

export default OptionsJogada;
