import './Home.modules.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countDownForm">
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o nome do evento"
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input type="date" name="date" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
