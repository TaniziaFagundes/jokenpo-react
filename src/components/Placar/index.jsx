import { useState, useEffect } from "react";

const Placar = ({ optionUse, optionComputer, aux }) => {
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
  }, [aux]);

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
    </div>
  );
};

export default Placar;