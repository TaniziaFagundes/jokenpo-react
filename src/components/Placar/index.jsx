import { useState, useEffect } from "react";
import EndGame from "../EndGamer/index";

const resetGamer = (setUsePonto, setCompPonto) => {
  setUsePonto(0);
  setCompPonto(0);
};

const Placar = ({ optionUse, optionComputer, selectionUser }) => {
  const [usePonto, setUsePonto] = useState(0);
  const [compPonto, setCompPonto] = useState(0);

  useEffect(() => {
    if (optionUse === "Pedra" && optionComputer === "Papel") {
      setCompPonto(compPonto + 1);
    } else if (optionUse === "Papel" && optionComputer === "Pedra") {
      setUsePonto(usePonto + 1);
    } else if (optionUse === "Tesoura" && optionComputer === "Papel") {
      setUsePonto(usePonto + 1);
    } else if (optionUse === "Pedra" && optionComputer === "Tesoura") {
      setUsePonto(usePonto + 1);
    } else if (optionUse === "Papel" && optionComputer === "Tesoura") {
      setCompPonto(compPonto + 1);
    } else if (optionUse === "Tesoura" && optionComputer === "Pedra") {
      setCompPonto(compPonto + 1);
    }
  }, [selectionUser]);

  return (
    <div>
      <div>
        <p>User</p>
        <p>{usePonto}</p>
      </div>
      <div>
        <p>Computer</p>
        <p>{compPonto}</p>
      </div>
      {usePonto === 10 || compPonto === 10 ? (
        <EndGame
          resetGamer={resetGamer}
          setUsePonto={setUsePonto}
          setCompPonto={setCompPonto}
        ></EndGame>
      ) : (
        ""
      )}
    </div>
  );
};

export default Placar;
