import { useState, useEffect } from "react";
import Jogada from "../Jogada/index";
import Placar from "../Placar/index";

const computer = (options, setOptionComputer) => {
  const optionComputer = options[Math.floor(Math.random() * options.length)];
  setOptionComputer(optionComputer);
};

const OptionsJogada = () => {
  const options = ["Pedra", "Papel", "Tesoura"];
  const [optionComputer, setOptionComputer] = useState("");
  const [optionUse, setOptionUse] = useState("");
  const [selectionUser, setselectionUser] = useState(false);

  return (
    <>
      <Placar
        optionUse={optionUse}
        optionComputer={optionComputer}
        selectionUser={selectionUser}
      ></Placar>
      <Jogada optionUse={optionUse} optionComputer={optionComputer}></Jogada>
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
  );
};

export default OptionsJogada;
