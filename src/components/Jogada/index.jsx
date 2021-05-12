const Jogada = ({ optionUse, optionComputer }) => {
  return (
    <div className="flex-col">
      <div className="flex-row">
        <p>Jogador: </p>
        <p>{optionUse}</p>
      </div>
      <div className="flex-row">
        <p>Computer: </p>
        <p>{optionComputer}</p>
      </div>
    </div>
  );
};

export default Jogada;
