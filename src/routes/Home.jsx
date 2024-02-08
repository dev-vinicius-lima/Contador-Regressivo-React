import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountDownContext } from '../context/CountDownContext';

import './Home.modules.css';

const Home = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const { setEvent } = useContext(CountDownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventObject = {
      title,
      date,
    };

    setEvent(eventObject);
    navigate('/countdown');
  };
  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countDownForm" onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o nome do evento"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input
            type="datetime-local"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
