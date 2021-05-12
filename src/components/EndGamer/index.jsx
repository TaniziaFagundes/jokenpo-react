const EndGame = ({ resetGamer, setUsePonto, setCompPonto }) => {
  return (
    <div>
      <h4>Fim de Jogo</h4>
      <button
        className="novoJogo"
        onClick={() => resetGamer(setUsePonto, setCompPonto)}
      >
        Jogar Novamente
      </button>
    </div>
  );
};

export default EndGame;
